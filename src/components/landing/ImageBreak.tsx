interface ImageBreakProps {
  src: string;
  alt: string;
  overlayText?: string;
  height?: string;
}

export default function ImageBreak({ src, alt, overlayText, height = 'h-[50vh] md:h-[60vh]' }: ImageBreakProps) {
  return (
    <section className={`relative ${height} overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/40" />
      {overlayText && (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="font-heading font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight text-foreground/90 text-center leading-[0.95] max-w-4xl">
            {overlayText}
          </p>
        </div>
      )}
    </section>
  );
}
