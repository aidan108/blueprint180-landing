import SectionWrapper from './SectionWrapper';

export default function HowItWorks() {
  return (
    <SectionWrapper showMotif>
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold mb-6">
          The Process
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-8 leading-tight">
          How The Programme<br />
          <span className="text-gradient-gold">Works</span>
        </h2>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            Weekly sessions for the first month. Then every two weeks. Between sessions: short daily protocols, anywhere from a few minutes to half an hour, depending on what your system needs.
          </p>
          <p>
            We handle the setup. Anything you need is mapped out step by step. No complex regimes, no guesswork.
          </p>
          <p>
            <span className="text-foreground font-medium">The real work happens in the sessions.</span> Your job in between is small, consistent actions that compound.
          </p>
          <p>
            After the 1:1 phase, you join a small group of founders and CEOs working through the same process. Peer support from people who understand the pressure.
          </p>
          <p className="text-foreground font-medium border-l-2 border-gold/30 pl-6">
            This requires your engagement. Not hours of homework. But showing up, following the protocol, and making the adjustments we map out together.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
