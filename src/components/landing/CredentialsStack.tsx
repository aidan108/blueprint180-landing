import SectionWrapper from './SectionWrapper';

export default function CredentialsStack() {
  return (
    <SectionWrapper id="about" showMotif>
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-gold mb-6">
          Credentials
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-16 leading-tight">
          The Stack Behind<br />
          <span className="text-gradient-gold">The System</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground uppercase tracking-wide mb-6">
              Clinical & Performance
            </h3>
            <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
              <p><span className="text-foreground font-medium">Team Coach:</span> Cambridge University</p>
              <p><span className="text-foreground font-medium">Executive Coach:</span> Performance Consultants International</p>
              <p><span className="text-foreground font-medium">Master Practitioner:</span> Clinical Hypnosis & NLP</p>
              <p><span className="text-foreground font-medium">Generative Consulting:</span> Advanced Training</p>
              <p><span className="text-foreground font-medium">Applied Research:</span> 25+ years deep investigation into High Performance, Autonomic Regulation & NSDR (Non-Sleep Deep Rest).</p>
              <p><span className="text-foreground font-medium">Strategic Advisor:</span> 23 years facilitating Business Transformation & Business Performance Dynamics.</p>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg text-foreground uppercase tracking-wide mb-6">
              Indigenous Immersion & Research
            </h3>
            <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
              <p><span className="text-foreground font-medium">QiGong:</span> Student Teacher & Practitioner</p>
              <p><span className="text-foreground font-medium">Immersive Study:</span> Ongoing work with leaders of the Noke Koi and Huni Kuin tribes in the Amazon.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
