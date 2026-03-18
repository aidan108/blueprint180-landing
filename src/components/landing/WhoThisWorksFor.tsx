import SectionWrapper from './SectionWrapper';

export default function WhoThisWorksFor() {
  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-lavender mb-6">
          Fit
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-8 leading-tight">
          Who This<br />
          <span className="text-gradient-lavender">Works With</span>
        </h2>

        <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
          <p>
            Founders, CEOs, and senior leaders operating under sustained pressure — across technology, financial services, law, consulting, and professional services.
          </p>
          <p>
            Clients include award-winning UK lawyers, senior leaders at EY, PwC, TikTok, ASOS, and AS Watson. Ongoing work as a trainer for the Law Society of Scotland.
          </p>
          <p className="text-foreground font-medium border-l-2 border-lavender/30 pl-6">
            Typical time to significant reduction in burnout symptoms: 4-6 weeks, depending on session frequency.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
