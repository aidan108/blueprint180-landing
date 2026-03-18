import SectionWrapper from './SectionWrapper';

export default function HiddenCost() {
  return (
    <SectionWrapper showMotif>
      <div className="max-w-4xl mx-auto">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-coral mb-6">
          The Hidden Cost
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-8 leading-tight">
          The Hidden Cost of<br />
          <span className="text-gradient-coral">"Powering Through"</span>
        </h2>

        <div className="space-y-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            <span className="text-foreground font-medium">You don't stop delivering just because you are tired. So you push through.</span>
          </p>
          <p>
            But the internal cost of delivery has spiked. Because of this, you may have noticed:
          </p>

          <div className="space-y-4 pl-6 border-l-2 border-coral/30 my-8">
            <p className="text-foreground/80">
              <span className="text-foreground font-medium">Everything feels heavier.</span> The same tasks now take double the fuel.
            </p>
            <p className="text-foreground/80">
              <span className="text-foreground font-medium">Rest doesn't reset you.</span> You wake up with the same drag.
            </p>
            <p className="text-foreground/80">
              <span className="text-foreground font-medium">The fuse is shorter.</span> Patience drops. Clarity fades.
            </p>
          </div>

          <p>
            Maybe you can operate like this for years.
          </p>
          <p>
            But you are systematically weakening the asset the business needs most.
          </p>
          <p className="text-foreground font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight pt-4">
            Your judgement.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
