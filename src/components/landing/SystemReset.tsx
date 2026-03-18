import sectionTexture from '@/assets/section-texture.jpg';

const outcomes = [
  { bold: "You wake up fully restored.", sub: "Not on adrenaline. At full capacity." },
  { bold: "The demand hasn't gone away.", sub: "But the internal cost has dropped." },
  { bold: "You stop compensating.", sub: "No more powering through the fatigue." },
  { bold: "You control the pace.", sub: "Reactivity is replaced by choice." },
  { bold: "Recovery works again.", sub: "Sleep actually recharges you." },
  { bold: "You stop just \"coping\" with the pressure.", sub: "Because the system is finally handling the load." },
];

export default function SystemReset() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={sectionTexture} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-mint mb-6">
          The System Reset
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-16 leading-tight">
          What a System Reset<br />
          <span className="text-gradient-mint">Looks Like</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-8">
          {outcomes.map((o, i) => (
            <div key={i} className="border-l-2 border-mint/40 pl-6">
              <p className="font-body text-base text-foreground font-medium mb-1">
                {o.bold}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {o.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl">
          <p className="font-body text-lg text-foreground/80 leading-relaxed mb-2">
            The result is an Operating System that handles the intensity.
          </p>
          <p className="font-heading font-bold text-xl text-foreground uppercase tracking-wide">
            Without the internal drag.
          </p>
        </div>
      </div>
    </section>
  );
}
