import SectionWrapper from './SectionWrapper';

export default function WhyNotDIY() {
  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-coral mb-6">
          Honest Truth
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-8 leading-tight">
          Why This Isn't<br />
          <span className="text-gradient-coral">A DIY Problem</span>
        </h2>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            Most leaders who hit this point try to solve it themselves first. That's not a flaw. It's how you're wired. You optimise, you research, you build systems.
          </p>
          <p>
            But the deep change work, the part that actually rewires the pattern, requires a skilled practitioner in the loop. It's not something you can do to yourself, for the same reason a surgeon doesn't operate on their own hands.
          </p>
          <p className="text-foreground font-medium border-l-2 border-coral/30 pl-6">
            There's no other area of your business where you'd take a complex problem with this much impact and decide to solve it from first principles. You'd hire someone who's already built the system and is skilled in the domain.
          </p>
          <p>
            If you've read this far, you already know something needs to change. The Debrief is a conversation, not a commitment. We look at your system together and you decide what makes sense.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
