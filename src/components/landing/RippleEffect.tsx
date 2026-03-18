import SectionWrapper from './SectionWrapper';
import SignalTower from './SignalTower';

export default function RippleEffect() {
  return (
    <SectionWrapper showMotif>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left — Text content */}
        <div>
          <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-sky mb-6">
            Beyond You
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-8 leading-tight">
            The Ripple<br />
            <span className="text-gradient-sky">Effect</span>
          </h2>

          <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
            <p>
              When a leader's system is dysregulated, the people around them feel it. Not because of what you say or do. Because your state transmits. Unconsciously.
            </p>
            <p>
              Your team registers the short fuse, the inconsistency, the moments you're off your guard. When the person leading them into the fray is wobbling, it doesn't give them confidence that they won't get chopped up either. They pull back. Your best people start looking elsewhere.
            </p>
            <p className="text-foreground font-medium border-l-2 border-sky/30 pl-6 italic">
              Nick Auton increased his company's throughput significantly after completing the programme. His team's experience? Less pressure, not more. "It used to be us dragging people along with us. Now it's everybody chipping in... there's been a ripple effect throughout my entire organization. The business has thrived ever since."
            </p>
            <p>
              This pattern repeats across clients. The leader resets. Decision quality stabilises. The team relaxes into their work because the signal from the top is steady again. Retention improves.
            </p>
            <p className="text-foreground font-medium">
              The programme is for you. But you impact your organisation more than anything or anyone else. So it's for your business too.
            </p>
          </div>
        </div>

        {/* Right — Signal Tower illustration */}
        <div className="flex justify-center">
          <SignalTower />
        </div>
      </div>
    </SectionWrapper>
  );
}
