import SectionWrapper from './SectionWrapper';

const quotes = [
  {
    text: "An absolute, immediate change.",
    name: "Hannah Rosalie",
    detail: "CEO",
  },
  {
    text: "The business has never been so well.",
    name: "Eloi Beauchamp",
    detail: "CEO",
  },
  {
    text: "Easily the best investment I've made.",
    name: "Andy Woods",
    detail: "Founder",
  },
];

export default function SocialProof() {
  return (
    <SectionWrapper className="border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {quotes.map((q, i) => (
            <div key={i} className="relative text-center md:text-left">
              <div className="text-primary opacity-30 text-6xl font-heading font-black leading-none mb-4">"</div>
              <p className="font-heading font-bold text-xl md:text-2xl text-foreground leading-snug mb-6">
                {q.text}
              </p>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">— {q.name}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{q.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
