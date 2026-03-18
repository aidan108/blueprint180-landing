import sectionTexture from '@/assets/section-texture.jpg';

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <img src={sectionTexture} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-10">
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/[0.06] text-[200px] font-heading font-black leading-none select-none">▲</div>

          <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-primary mb-8 relative z-10">
            Your Next Move
          </p>
          <h2 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-foreground mb-6 leading-[0.9] relative z-10">
            Bias Your System<br />
            <span className="text-gradient-warm">Back to Baseline.</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed relative z-10">
            The workload isn't going anywhere. But the internal cost can change.
          </p>

          <div className="relative z-10 mt-10">
            <a
              href="#"
              className="inline-block bg-gradient-warm text-primary-foreground px-10 py-5 font-body text-sm font-semibold uppercase tracking-[0.15em] rounded-[3px] hover:opacity-90 transition-opacity"
            >
              Book Your Leadership Energy Debrief
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
