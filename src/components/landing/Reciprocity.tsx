import tuweImage from '@/assets/tuwe-portrait.jpg';
import SectionWrapper from './SectionWrapper';

export default function Reciprocity() {
  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-mint mb-6">
              Our Commitment
            </p>
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl uppercase tracking-tight text-foreground mb-6 leading-tight">
              Reciprocity<br />
              <span className="text-gradient-mint">& Impact</span>
            </h3>
            <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
              <p>
                This is a partnership of respect. We support projects in the Jordão region of the deep Amazon, focused on food security, cultural restoration, and economic stability for the Huni Kuin and Noke Koi people.
              </p>
              <p>
                We access deep intelligence; we invest in its protection.
              </p>
            </div>
          </div>

          {/* Tuwe portrait + video link */}
          <div>
            <div className="aspect-square overflow-hidden relative mb-4 rounded-[3px]">
              <img
                src={tuweImage}
                alt="Tuwe, leader of the Huni Kuin"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="border border-border p-4 flex items-center gap-4 cursor-pointer hover:border-mint/30 transition-colors group rounded-[3px]">
              <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center flex-shrink-0 group-hover:border-mint transition-colors">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-foreground/40 border-b-[6px] border-b-transparent ml-0.5 group-hover:border-l-mint transition-colors" />
              </div>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Watch Tuwe, leader of the Huni Kuin, explain what this partnership means to his community →
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
