import { useState, useEffect, useRef } from "react";

export default function CircuitPath() {
  const [visible, setVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !visible) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = rect.height;
    const cx = W / 2;
    const cy = H / 2;
    const rx = W * 0.34; // horizontal radius
    const ry = H * 0.34; // vertical radius

    // Four junction points on a rounded-rect-ish path
    const junctions = [
      { x: cx, y: cy - ry },           // top
      { x: cx + rx, y: cy },           // right
      { x: cx, y: cy + ry },           // bottom
      { x: cx - rx, y: cy },           // left
    ];

    // Build a smooth closed path through the four junctions using bezier curves
    function getPath() {
      const pts = junctions;
      const tension = 0.62;
      const segments = [];

      for (let i = 0; i < 4; i++) {
        const p0 = pts[i];
        const p1 = pts[(i + 1) % 4];
        // Control points — pull toward the corners for a rounded-rect feel
        let cp1x, cp1y, cp2x, cp2y;

        if (i === 0) { // top → right
          cp1x = p0.x + rx * tension; cp1y = p0.y;
          cp2x = p1.x; cp2y = p1.y - ry * tension;
        } else if (i === 1) { // right → bottom
          cp1x = p1.x + rx * tension; cp1y = p1.y - ry * tension;
          cp2x = p1.x + rx * tension; cp2y = p1.y;
          // Actually: smooth curve
          cp1x = p0.x; cp1y = p0.y + ry * tension;
          cp2x = p1.x + rx * tension; cp2y = p1.y;
        } else if (i === 2) { // bottom → left
          cp1x = p0.x - rx * tension; cp1y = p0.y;
          cp2x = p1.x; cp2y = p1.y + ry * tension;
        } else { // left → top
          cp1x = p0.x; cp1y = p0.y - ry * tension;
          cp2x = p1.x - rx * tension; cp2y = p1.y;
        }

        segments.push({ p0, p1, cp1x, cp1y, cp2x, cp2y });
      }

      return segments;
    }

    // Sample points along bezier for drawing with progress
    function sampleBezier(p0x: number, p0y: number, cp1x: number, cp1y: number, cp2x: number, cp2y: number, p1x: number, p1y: number, steps: number) {
      const pts = [];
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const mt = 1 - t;
        const x = mt*mt*mt*p0x + 3*mt*mt*t*cp1x + 3*mt*t*t*cp2x + t*t*t*p1x;
        const y = mt*mt*mt*p0y + 3*mt*mt*t*cp1y + 3*mt*t*t*cp2y + t*t*t*p1y;
        pts.push({ x, y });
      }
      return pts;
    }

    const segments = getPath();

    // Sample all points
    const stepsPerSeg = 80;
    let allPoints: { x: number; y: number }[] = [];
    for (const s of segments) {
      const pts = sampleBezier(s.p0.x, s.p0.y, s.cp1x, s.cp1y, s.cp2x, s.cp2y, s.p1.x, s.p1.y, stepsPerSeg);
      allPoints = allPoints.concat(pts);
    }

    const totalPts = allPoints.length;

    // Gradient colors
    const colorStart = [155, 122, 191]; // hsl(270,50%,65%) approx
    const colorEnd = [181, 97, 158];    // hsl(300,45%,55%) approx

    function lerpColor(a: number[], b: number[], t: number) {
      return [
        Math.round(a[0] + (b[0] - a[0]) * t),
        Math.round(a[1] + (b[1] - a[1]) * t),
        Math.round(a[2] + (b[2] - a[2]) * t),
      ];
    }

    let startTime: number | null = null;
    const drawDuration = 2400;
    // After draw: a flowing pulse travels the circuit
    const pulseSpeed = 4000; // ms per full loop

    function draw(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const drawProgress = Math.min(elapsed / drawDuration, 1);

      ctx.clearRect(0, 0, W, H);

      // Draw the path up to drawProgress
      const drawCount = Math.floor(totalPts * drawProgress);

      if (drawCount > 1) {
        // Draw line segments with gradient color
        ctx.lineWidth = 1.8;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        for (let i = 1; i < drawCount; i++) {
          const t = i / totalPts;
          const c = lerpColor(colorStart, colorEnd, t);
          ctx.strokeStyle = `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.35)`;

          ctx.beginPath();
          ctx.moveTo(allPoints[i - 1].x, allPoints[i - 1].y);
          ctx.lineTo(allPoints[i].x, allPoints[i].y);
          ctx.stroke();
        }
      }

      // Junction nodes
      const juncIndices = [0, stepsPerSeg, stepsPerSeg * 2, stepsPerSeg * 3];
      for (let j = 0; j < 4; j++) {
        const idx = juncIndices[j];
        if (idx < drawCount) {
          const pt = allPoints[idx];
          const t = idx / totalPts;
          const c = lerpColor(colorStart, colorEnd, t);

          // Outer ring
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 12, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.25)`;
          ctx.lineWidth = 1.6;
          ctx.stroke();

          // Inner dot
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.45)`;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.8)`;
          ctx.fill();
        }
      }

      // Flowing pulse after draw completes
      if (drawProgress >= 1) {
        const pulseElapsed = elapsed - drawDuration;
        const pulseT = (pulseElapsed % pulseSpeed) / pulseSpeed;
        const pulseIdx = Math.floor(pulseT * totalPts);
        const pulseLen = 30;

        for (let k = 0; k < pulseLen; k++) {
          const idx = (pulseIdx - k + totalPts) % totalPts;
          const alpha = (1 - k / pulseLen) * 0.6;
          const t = idx / totalPts;
          const c = lerpColor(colorStart, colorEnd, t);

          ctx.beginPath();
          ctx.arc(allPoints[idx].x, allPoints[idx].y, 1.8 * (1 - k / pulseLen) + 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${alpha})`;
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => { 
      if (animRef.current) cancelAnimationFrame(animRef.current); 
    };
  }, [visible]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div
        className="relative w-full aspect-square bg-card/5 rounded-2xl border border-lavender/10"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
      </div>
    </div>
  );
}