import SectionWrapper from './SectionWrapper';
import insightImage from '@/assets/insight-neural.jpg';

export default function InsightToMechanism() {
  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-lavender mb-6">
              The Science
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-8 leading-tight">
              From Insight<br />
              <span className="text-gradient-lavender">To Mechanism</span>
            </h2>

            <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
              <p>
                Most burnout interventions work on the surface: supplements, breathwork, time management, therapy. These create temporary state changes. They rest the system briefly. But when you return to sustained pressure, the dysregulation reactivates. The pattern is still there.
              </p>
              <p>
                My work with indigenous teachers in the Amazon revealed something that changed my entire approach: there is a functional difference between a <span className="text-foreground font-medium">temporary state change</span> and a <span className="text-foreground font-medium">permanent trait adaptation</span>. Most Western interventions only achieve the first.
              </p>
              <p>
                The neuroscience backs this up. Joseph LeDoux's research demonstrated that fear responses, and by extension, chronic stress activation, can be fundamentally rerouted at the neurological level. The access point is memory. Not the story of the memory, but how the nervous system fires around it. Memories are the building blocks of your skills, your unconscious reactions, and how you show up under pressure. When you can skilfully shift how those memories operate at a biological level, you don't just feel calmer. <span className="text-foreground font-medium">You are different. Permanently.</span>
              </p>
              <p>
                This is not something you can access through meditation apps, breathwork protocols, or self-guided programmes. It requires a practitioner who understands both the neuroscience and the experiential depth to apply it precisely. That combination is what took me 20 years to build, and what you access in weeks.
              </p>
              <p className="text-foreground font-medium border-l-2 border-lavender/30 pl-6">
                Book a Debrief and I'll walk you through exactly how your system is wired, and what we change.
              </p>
            </div>
          </div>

          <div className="relative mt-8 md:mt-16">
            <div className="aspect-[3/4] overflow-hidden rounded-[3px]">
              <img
                src={insightImage}
                alt="Neural pathways firing — representing the neuroscience behind the programme"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-3">
              Rewiring the pattern at source
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
