import SectionWrapper from './SectionWrapper';

const pillars = [
  {
    label: "Neural Re-patterning",
    desc: "Targeted interventions that reduce chronic stress activation and restore adaptive response patterns.",
  },
  {
    label: "Bio-Energy Dynamics",
    desc: "Optimising metabolic inputs and rest efficiency to lower physiological drag.",
  },
  {
    label: "High-Output State Access",
    desc: "Protocols for sustaining intensity without accumulating internal cost.",
  },
];

function SystemCurve() {
  // Dysregulated (red) → Intervention (gold) → Baseline/Beyond (green)
  const redPath = "M 20,180 C 30,60 40,200 55,40 C 65,180 70,30 85,80 C 95,160 105,50 120,90 C 135,150 145,70 160,110 C 170,140 180,85 195,120";
  const goldPath = "M 195,120 C 210,140 220,100 235,125 C 248,140 258,115 275,130 C 290,138 305,128 320,135";
  const greenPath = "M 320,135 C 340,138 360,140 380,138 C 400,136 420,140 440,138 C 460,137 480,139 500,138 C 520,137 540,138 560,137";
  const baselineY = 140;

  return (
    <div className="w-full">
      {/* Single unified chart with integrated staircase labels */}
      <div className="border border-border/30 bg-card/30 rounded-lg p-4 md:p-6">
        {/* Title */}
        <p className="font-heading font-bold text-lg md:text-xl text-foreground italic text-center mb-4">
          Dysregulated system → baseline → beyond
        </p>

        {/* SVG chart with embedded staircase legend */}
        <svg viewBox="0 0 580 380" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
          {/* Vertical phase dividers */}
          <line x1="195" y1="20" x2="195" y2="200" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.4" />
          <line x1="320" y1="20" x2="320" y2="200" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.4" />

          {/* Baseline dashed line */}
          <line x1="10" y1={baselineY} x2="570" y2={baselineY} stroke="hsl(var(--muted-foreground))" strokeWidth="0.8" strokeDasharray="6,4" opacity="0.3" />
          <text x="572" y={baselineY + 4} fill="hsl(var(--muted-foreground))" fontSize="9" fontFamily="var(--font-body)" opacity="0.5">BASELINE</text>

          {/* Dysregulated curve (red/coral) */}
          <path d={redPath} fill="none" stroke="hsl(var(--coral))" strokeWidth="2.5" strokeLinecap="round" />

          {/* Intervention curve (gold) */}
          <path d={goldPath} fill="none" stroke="hsl(var(--gold))" strokeWidth="2.5" strokeLinecap="round" />

          {/* Beyond curve (green/mint) */}
          <path d={greenPath} fill="none" stroke="hsl(var(--mint))" strokeWidth="2.5" strokeLinecap="round" />

          {/* Staircase legend — integrated below the chart */}
          {/* Step 1: Dysregulated */}
          <rect x="10" y="225" width="270" height="32" rx="6" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
          <circle cx="24" cy="241" r="4" fill="hsl(var(--coral))" />
          <text x="34" y="238" fill="hsl(var(--coral))" fontSize="11" fontWeight="600" fontFamily="var(--font-body)">Dysregulated</text>
          <text x="34" y="250" fill="hsl(var(--muted-foreground))" fontSize="9" fontFamily="var(--font-body)">Sustained threat response</text>

          {/* Step 2: Intervention */}
          <rect x="140" y="265" width="270" height="32" rx="6" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
          <circle cx="154" cy="281" r="4" fill="hsl(var(--gold))" />
          <text x="164" y="278" fill="hsl(var(--gold))" fontSize="11" fontWeight="600" fontFamily="var(--font-body)">Intervention</text>
          <text x="164" y="290" fill="hsl(var(--muted-foreground))" fontSize="9" fontFamily="var(--font-body)">Protocol activation</text>

          {/* Step 3: Baseline */}
          <rect x="270" y="305" width="270" height="32" rx="6" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
          <circle cx="284" cy="321" r="4" fill="hsl(var(--mint))" opacity="0.7" />
          <text x="294" y="318" fill="hsl(var(--mint))" fontSize="11" fontWeight="600" fontFamily="var(--font-body)" opacity="0.7">Baseline</text>
          <text x="294" y="330" fill="hsl(var(--muted-foreground))" fontSize="9" fontFamily="var(--font-body)">System recalibration</text>

          {/* Step 4: Beyond */}
          <rect x="380" y="345" width="190" height="32" rx="6" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
          <circle cx="394" cy="361" r="4" fill="hsl(var(--mint))" />
          <text x="404" y="358" fill="hsl(var(--mint))" fontSize="11" fontWeight="600" fontFamily="var(--font-body)">Beyond</text>
          <text x="404" y="370" fill="hsl(var(--muted-foreground))" fontSize="9" fontFamily="var(--font-body)">Capacity expansion</text>
        </svg>

        {/* Bottom tagline */}
        <div className="border-t border-border/20 mt-4 pt-4 text-center">
          <p className="font-body text-sm text-foreground/70 italic">
            We don't manage symptoms. We retrain the system.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Methodology() {
  return (
    <SectionWrapper id="methodology" showMotif>
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-sky mb-6">
          Methodology
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-6 leading-tight">
          How We Execute<br />
          <span className="text-gradient-sky">The Reset</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
            <p>
              Most solutions try to reduce the load. <span className="text-foreground font-medium">We upgrade the processor.</span>
            </p>
            <p>
              Your system has learned to treat sustained demand as a physical threat. That's why capacity drops. Why recovery stops working the way it used to. And, why effort costs more than it should.
            </p>
            <p className="text-foreground font-medium italic">
              You're redlining the engine just to sit in traffic.
            </p>
            <p>
              We don't offer generic burnout coaching. When burnout persists despite control over inputs, it is a biological systems problem. We manually retrain your physiological response to it.
            </p>
            <p>
              Our methodology uses evidence-based, clinically validated protocols drawn from outside standard burnout support. This is what allows change to occur with speed and precision.
            </p>
            <p>
              The focus is not symptom management. It is how to bias a dysregulated system back to baseline, and then beyond it.
            </p>
          </div>

          <SystemCurve />
        </div>

        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-primary mb-8">
          The work integrates:
        </p>

        <div className="grid md:grid-cols-3 gap-0">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="border border-border p-10 rounded-[3px] md:first:border-r-0 md:[&:nth-child(2)]:border-r-0 group hover:bg-card/50 transition-colors"
            >
              <p className="font-body text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-3">
                0{i + 1}
              </p>
              <h3 className="font-heading font-bold text-lg text-foreground uppercase tracking-wide mb-4">
                {p.label}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-sm text-foreground/70 italic mb-6">
            You can't access this combination of protocols anywhere else.
          </p>
          <a
            href="#assessment"
            className="inline-block bg-gradient-warm text-primary-foreground px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.15em] rounded-[3px] hover:opacity-90 transition-opacity"
          >
            Check Availability
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
