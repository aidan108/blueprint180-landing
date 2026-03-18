import SectionWrapper from './SectionWrapper';
import portrait1 from '@/assets/ceo-portrait-1.jpg';
import portrait2 from '@/assets/ceo-portrait-2.jpg';
import portrait3 from '@/assets/ceo-portrait-3.jpg';

const testimonials = [
  {
    quote: "We doubled the workload, but the team feels less pressure.",
    name: "Nick Auten",
    context: "CEO — Curo 365 · Founder — PrenticeWorx",
    image: portrait1,
  },
  {
    quote: "I can count the stressful days this year on one hand.",
    name: "Lara Ayash",
    context: "Ex PWC, Ex Deloitte · Founder — Lads Consulting Group",
    image: portrait2,
  },
  {
    quote: "I'm sleeping. I don't wake up in the night anymore.",
    name: "Eloi Beauchamp",
    context: "CEO — L'Eloi · Partner — Irregular",
    image: portrait3,
  },
];

export default function CeoTestimonials() {
  return (
    <SectionWrapper id="results">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold mb-6">
          Real Results
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-16 leading-tight">
          What Other CEOs<br />
          <span className="text-gradient-gold">Are Reporting</span>
        </h2>

        <div className="space-y-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex items-start gap-8 group">
              <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden relative cursor-pointer group-hover:opacity-80 transition-opacity">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full border border-gold/60 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-gold/80 border-b-[4px] border-b-transparent ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-gold/30 pl-8">
                <p className="font-heading font-bold text-xl md:text-2xl text-foreground leading-snug mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{t.context}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
