import { useEffect, useRef } from "react";

export default function SignalTower() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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
    const shift = H * 0.2;
    const midY = H * 0.5 + shift;

    const red = [200, 75, 65];
    const redDim = [180, 85, 75];
    const green = [218, 150, 47];
    const greenDim = [200, 140, 55];
    const warm = [200, 185, 165];
    const dimWarm = [120, 115, 105];

    const topSourceY = 40 + shift;
    const topZoneBottom = midY - 15;

    const topNodes: { baseX: number; baseY: number; drift: number; driftAngle: number; size: number; phase: number }[] = [];
    const topNodeCount = 8;
    for (let i = 0; i < topNodeCount; i++) {
      const angle = (i / topNodeCount) * Math.PI * 2 + 0.3;
      const baseDist = 50 + Math.random() * 30;
      const drift = 8 + Math.random() * 15;
      topNodes.push({
        baseX: cx + Math.cos(angle) * baseDist,
        baseY: topSourceY + (topZoneBottom - topSourceY) * 0.6 + Math.sin(angle) * 25,
        drift,
        driftAngle: angle + (Math.random() - 0.5) * 0.5,
        size: 2.5 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const bottomSourceY = midY + 15;
    const bottomZoneBottom = H - 20;

    const bottomNodes: { x: number; y: number; size: number; phase: number }[] = [];
    const bottomNodeCount = 8;
    for (let i = 0; i < bottomNodeCount; i++) {
      const angle = (i / bottomNodeCount) * Math.PI * 2 + 0.3;
      const baseDist = 50 + Math.random() * 20;
      bottomNodes.push({
        x: cx + Math.cos(angle) * baseDist,
        y: bottomSourceY + (bottomZoneBottom - bottomSourceY) * 0.6 + Math.sin(angle) * 25,
        size: 2.5 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let startTime: number | null = null;

    function draw(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;

      ctx.clearRect(0, 0, W, H);

      // Divider
      ctx.setLineDash([3, 5]);
      ctx.strokeStyle = `rgba(${warm[0]}, ${warm[1]}, ${warm[2]}, 0.06)`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(W * 0.15, midY);
      ctx.lineTo(W * 0.85, midY);
      ctx.stroke();
      ctx.setLineDash([]);

      // TOP — DYSREGULATED
      const erraticPulse = Math.sin(elapsed * 4.5) * 0.3 + Math.sin(elapsed * 7.2) * 0.15 + 0.6;
      const sourceJitterX = Math.sin(elapsed * 6) * 2.5 + Math.sin(elapsed * 11) * 1;
      const sourceJitterY = Math.cos(elapsed * 5) * 1.5;
      const topSx = cx + sourceJitterX;
      const topSy = topSourceY + sourceJitterY;

      const srcGlow = ctx.createRadialGradient(topSx, topSy, 0, topSx, topSy, 25);
      srcGlow.addColorStop(0, `rgba(${red[0]}, ${red[1]}, ${red[2]}, ${0.12 * erraticPulse})`);
      srcGlow.addColorStop(1, `rgba(${red[0]}, ${red[1]}, ${red[2]}, 0)`);
      ctx.fillStyle = srcGlow;
      ctx.beginPath();
      ctx.arc(topSx, topSy, 25, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(topSx, topSy, 8 + Math.sin(elapsed * 5) * 2, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${red[0]}, ${red[1]}, ${red[2]}, ${0.35 * erraticPulse})`;
      ctx.lineWidth = 1.6;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(topSx, topSy, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${red[0]}, ${red[1]}, ${red[2]}, ${0.7 * erraticPulse})`;
      ctx.fill();

      const waveCount = 4;
      for (let w = 0; w < waveCount; w++) {
        const wavePhase = (elapsed * 1.2 + w * 0.7) % 3;
        const waveR = wavePhase * 60;
        const waveAlpha = Math.max(0, 0.2 - wavePhase * 0.07);
        if (waveAlpha > 0) {
          ctx.beginPath();
          const segments = 32;
          for (let s = 0; s <= segments; s++) {
            const a = (s / segments) * Math.PI * 2;
            const noise = Math.sin(a * 5 + elapsed * 3 + w) * (waveR * 0.15) +
                          Math.sin(a * 8 + elapsed * 5) * (waveR * 0.08);
            const r = waveR + noise;
            const px = topSx + Math.cos(a) * r;
            const py = topSy + Math.sin(a) * r * 0.5;
            if (s === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.strokeStyle = `rgba(${red[0]}, ${red[1]}, ${red[2]}, ${waveAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      for (const n of topNodes) {
        const driftAmt = Math.sin(elapsed * 0.5 + n.phase) * n.drift * 0.5 + n.drift * 0.5;
        const nx = n.baseX + Math.cos(n.driftAngle) * driftAmt + Math.sin(elapsed * 3 + n.phase) * 2;
        const ny = n.baseY + Math.sin(n.driftAngle) * driftAmt * 0.4 + Math.cos(elapsed * 2.5 + n.phase) * 1.5;

        ctx.beginPath();
        ctx.moveTo(topSx, topSy);
        const midX = (topSx + nx) / 2 + Math.sin(elapsed * 4 + n.phase) * 8;
        const midMidY = (topSy + ny) / 2 + Math.cos(elapsed * 3.5 + n.phase) * 5;
        ctx.quadraticCurveTo(midX, midMidY, nx, ny);
        ctx.strokeStyle = `rgba(${redDim[0]}, ${redDim[1]}, ${redDim[2]}, 0.08)`;
        ctx.lineWidth = 0.7;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(nx, ny, n.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dimWarm[0]}, ${dimWarm[1]}, ${dimWarm[2]}, 0.25)`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${dimWarm[0]}, ${dimWarm[1]}, ${dimWarm[2]}, 0.12)`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // BOTTOM — RESET
      const steadyPulse = Math.sin(elapsed * 1.2) * 0.1 + 0.8;
      const botSx = cx;
      const botSy = bottomSourceY;

      const botGlow = ctx.createRadialGradient(botSx, botSy, 0, botSx, botSy, 28);
      botGlow.addColorStop(0, `rgba(${green[0]}, ${green[1]}, ${green[2]}, ${0.1 * steadyPulse})`);
      botGlow.addColorStop(1, `rgba(${green[0]}, ${green[1]}, ${green[2]}, 0)`);
      ctx.fillStyle = botGlow;
      ctx.beginPath();
      ctx.arc(botSx, botSy, 28, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(botSx, botSy, 8 + Math.sin(elapsed * 1.2) * 0.8, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${green[0]}, ${green[1]}, ${green[2]}, ${0.3 * steadyPulse})`;
      ctx.lineWidth = 1.6;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(botSx, botSy, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${green[0]}, ${green[1]}, ${green[2]}, ${0.6 * steadyPulse})`;
      ctx.fill();

      for (let w = 0; w < waveCount; w++) {
        const wavePhase = (elapsed * 0.7 + w * 0.8) % 3.5;
        const waveR = wavePhase * 55;
        const waveAlpha = Math.max(0, 0.18 - wavePhase * 0.05);
        if (waveAlpha > 0) {
          ctx.beginPath();
          ctx.ellipse(botSx, botSy, waveR, waveR * 0.5, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${green[0]}, ${green[1]}, ${green[2]}, ${waveAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      for (const n of bottomNodes) {
        const nx = n.x + Math.sin(elapsed * 0.5 + n.phase) * 1;
        const ny = n.y + Math.cos(elapsed * 0.4 + n.phase) * 0.8;

        ctx.beginPath();
        ctx.moveTo(botSx, botSy);
        const midBX = (botSx + nx) / 2;
        const midBY = (botSy + ny) / 2;
        ctx.quadraticCurveTo(midBX, midBY, nx, ny);
        ctx.strokeStyle = `rgba(${greenDim[0]}, ${greenDim[1]}, ${greenDim[2]}, 0.12)`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(nx, ny, n.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${warm[0]}, ${warm[1]}, ${warm[2]}, 0.35)`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${greenDim[0]}, ${greenDim[1]}, ${greenDim[2]}, 0.2)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(nx, ny, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${warm[0]}, ${warm[1]}, ${warm[2]}, 0.5)`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div className="w-full max-w-[340px]">
      <div className="w-full aspect-[1/2]">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
      </div>
    </div>
  );
}
