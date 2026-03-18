export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-16 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <p className="font-heading font-bold text-sm tracking-[0.15em] text-foreground uppercase mb-4">
              Blueprint<span className="text-primary">180</span>
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="font-body text-[10px] text-muted-foreground/50 uppercase tracking-wider">
            © {new Date().getFullYear()} Blueprint180™
          </p>
        </div>
      </div>
    </footer>
  );
}
