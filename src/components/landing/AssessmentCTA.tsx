import SectionWrapper from './SectionWrapper';

export default function AssessmentCTA() {
  return (
    <SectionWrapper id="assessment">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-warm-soft border border-primary/20 p-12 md:p-20 relative overflow-hidden rounded-[3px]">
          <span className="absolute top-6 left-8 text-primary/10 text-7xl font-heading font-black select-none">▲</span>
          <span className="absolute bottom-6 right-8 text-primary/10 text-5xl font-heading font-black select-none rotate-180">▲</span>

          <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-primary mb-6 relative z-10">
            Not ready to talk yet?
          </p>
          <h2 className="font-heading font-extrabold text-2xl md:text-4xl uppercase tracking-tight text-foreground mb-6 leading-tight relative z-10">
            Take the 3-Minute Assessment
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed relative z-10">
            Understand where demand is costing you most.
          </p>
          <a
            href="#"
            className="relative z-10 inline-block bg-gradient-warm text-primary-foreground px-10 py-4 font-body text-sm font-semibold uppercase tracking-[0.15em] rounded-[3px] hover:opacity-90 transition-opacity"
          >
            Take the 3-Minute Test
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
