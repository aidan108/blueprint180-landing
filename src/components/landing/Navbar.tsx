import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-14">
        {/* Logo */}
        <a href="#" className="font-heading font-bold text-sm tracking-[0.15em] text-foreground uppercase">
          Blueprint<span className="text-primary">180</span>
        </a>

        {/* Nav links — Summit style: tiny, uppercase, light weight, wide tracking */}
        <div className="hidden md:flex items-center gap-10">
          {['Programme', 'Methodology', 'Results', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-[10px] font-normal uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA — isolated right, Summit "JOIN" style */}
        <a
          href="#assessment"
          className="bg-primary text-primary-foreground px-5 py-2 text-[10px] font-body font-semibold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
        >
          Book Your Debrief
        </a>
      </div>
    </nav>
  );
}
