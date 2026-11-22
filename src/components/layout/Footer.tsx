import { HexLogo } from '@/components/brand/HexLogo';

export function Footer() {
  return (
    <footer className="border-t border-royal/30 bg-abyss/85">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <HexLogo size={34} />
          <div>
            <div className="text-sm font-medium text-ice">© 2026 Humanity+. All rights reserved.</div>
            <div className="font-display font-bold text-[11px] uppercase tracking-[0.18em] text-cyanGlow/80 mt-0.5">
              LEVEL UP HUMANITY • Together for a Better Tomorrow
            </div>
          </div>
        </div>
        <a href="#top" className="text-xs font-display font-bold uppercase tracking-wider text-steel hover:text-cyanGlow transition-colors no-underline px-3 py-2 rounded-lg border border-royal/30 hover:border-cyanGlow/50">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
