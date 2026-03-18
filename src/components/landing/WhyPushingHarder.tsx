import SectionWrapper from './SectionWrapper';

export default function WhyPushingHarder() {
  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-rose mb-6">
          The Pattern
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-8 leading-tight">
          Why Pushing Harder<br />
          <span className="text-gradient-rose">Stopped Working</span>
        </h2>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            <span className="text-foreground font-medium">CEO burnout is not caused by workload.</span>
          </p>
          <p>
            In leadership roles, demand rarely drops. Over time, sustained pressure trains your system into a constant high-alert state.
          </p>
          <p>
            Many leaders don't feel stressed in the usual sense. They've adapted to operating past internal signals.
          </p>

          <div className="my-10">
            <p className="font-heading font-bold text-lg text-foreground uppercase tracking-wide mb-6">
              What happens if nothing changes?
            </p>
            <div className="space-y-4 pl-6 border-l-2 border-rose/30">
              <p className="text-foreground/80">Decision quality erodes under pressure.</p>
              <p className="text-foreground/80">Energy becomes more inconsistent, not less.</p>
              <p className="text-foreground/80">The cost shows up in the business and in life.</p>
            </div>
          </div>

          <p className="text-foreground font-medium italic">
            This isn't usually a sudden crash. It's a slow degradation.
          </p>
        </div>

        <div className="mt-12">
          <a
            href="#assessment"
            className="inline-block bg-gradient-warm text-primary-foreground px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
          >
            Check Availability
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
