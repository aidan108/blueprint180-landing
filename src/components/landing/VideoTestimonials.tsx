import SectionWrapper from './SectionWrapper';

const videos = [
  {
    name: "Eloi Beauchamp, CEO",
    title: "The Sleep Correction",
    quote: "I went from several months of bad sleep... to back to normal sleep without even noticing it. It just happened. We just went inside the hood, moved a few wires around, and it was solved.",
  },
  {
    name: "Nick Auton, CEO",
    title: "The Ripple Effect",
    quote: "It used to be us dragging people along with us. Now it's everybody chipping in... there's been a ripple effect throughout my entire organization. The business has thrived ever since.",
  },
  {
    name: "Lara Ayash, Co-Founder",
    title: "The Identity Shift",
    quote: "For me, the surprise was: okay, this is not me. There is me, and there is the state of being stressed. And those two things are very separate. It's almost like I woke up one day and something that was constantly there was just not there.",
  },
];

export default function VideoTestimonials() {
  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-coral mb-6">
          In Their Words
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-16 leading-tight">
          Real Outcomes,<br />
          <span className="text-gradient-coral">In Context</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <div key={i} className="group">
              <div className="aspect-video bg-card border border-border mb-6 relative overflow-hidden rounded-[3px] cursor-pointer group-hover:border-coral/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-coral/10 to-card" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-foreground/30 flex items-center justify-center group-hover:border-coral group-hover:scale-110 transition-all">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-foreground/50 border-b-[8px] border-b-transparent ml-1 group-hover:border-l-coral transition-colors" />
                  </div>
                </div>
              </div>

              <p className="font-heading font-bold text-sm text-coral uppercase tracking-wider mb-2">{v.title}</p>
              <p className="font-body text-sm text-foreground/80 italic leading-relaxed mb-4">
                "{v.quote}"
              </p>
              <p className="font-body text-xs font-medium text-muted-foreground">{v.name}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
