import SectionWrapper from './SectionWrapper';
import CircuitPath from './CircuitPath';

const includes = [
  "Focused 1:1 work on your specific patterns.",
  "Small group sessions with other founders & CEOs.",
  "Clear actions applied in real conditions, not theory.",
  "No requirement to step away from the business.",
];

export default function ProgrammeIncludes() {
  return (
    <SectionWrapper id="programme" showMotif>
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-lavender mb-6">
          The Programme
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-12 leading-tight">
          What the Programme<br />
          <span className="text-gradient-lavender">Involves</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-6">
            {includes.map((text, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 flex-shrink-0" />
                <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Circuit diagram */}
          <div className="flex justify-center lg:justify-end">
            <CircuitPath />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
