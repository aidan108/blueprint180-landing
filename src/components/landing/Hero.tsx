import heroJaguar from '@/assets/hero-jaguar-right.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image — jaguar on left, text on right */}
      <div className="absolute inset-0">
        <img
          src={heroJaguar}
          alt=""
          className="w-full h-full object-cover object-[80%_35%] -scale-x-100"
        />
        {/* Gradient: semi-dark on left for text readability, fades to reveal jaguar on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-32">
        <div className="max-w-2xl">
          <p className="font-body text-[11px] font-medium uppercase tracking-[0.35em] text-primary mb-6">
            Built for CEOs
          </p>

          <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tight text-foreground mb-4">
            Break Free<br />
            <span className="text-gradient-warm">From Burnout</span>
            <span className="text-primary align-super text-2xl md:text-3xl">™</span>
          </h1>

          <p className="font-heading font-semibold text-xl md:text-2xl text-foreground/90 uppercase tracking-wide mb-8">
            Get Your Clarity, Energy and Leadership Edge. Fast.
          </p>

          <div className="space-y-4 font-body text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            <p>Most burnout advice assumes pressure will ease.</p>
            <p className="text-foreground/60">Time off. Better boundaries. Improved time management.</p>
            <p>Yet, in your seat, <span className="text-foreground font-medium">the pressure stays.</span></p>
            <p>We retrain your system to handle the intensity.</p>
            <p>So you can operate at full capacity again, without stepping away from the business.</p>
          </div>

          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary/80 mb-4">
            The first step is a Leadership Energy Debrief.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#assessment"
              className="inline-block bg-gradient-warm text-primary-foreground px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.15em] rounded-[3px] hover:opacity-90 transition-opacity"
            >
              Check Availability
            </a>
          </div>

          <p className="font-body text-xs text-muted-foreground mt-4 max-w-sm leading-relaxed">
            A short call to uncover what's really driving the strain, and what to change first.
          </p>
        </div>
      </div>

      {/* Bottom gradient bleed */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
