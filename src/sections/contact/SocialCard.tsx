import { LINKS } from '@/config/site';

export function SocialCard() {
  return (
    <div className="space-y-6">
      <div className="rpg-card rounded-3xl p-5 sm:p-7">
        <h3 className="font-display font-extrabold text-2xl text-ice mb-2">Follow Humanity+</h3>
        <p className="text-sm sm:text-base text-steel mb-5">Launch news and community stories.</p>

        <div className="flex flex-wrap gap-3">
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="btn-glass-cta inline-flex items-center gap-2.5 px-5 py-3 min-h-[44px] rounded-xl font-semibold text-sm no-underline">
            <svg className="w-4 h-4 text-cyanGlow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            Instagram
          </a>
          <a href={LINKS.x} target="_blank" rel="noopener noreferrer" className="btn-glass-cta inline-flex items-center gap-2.5 px-5 py-3 min-h-[44px] rounded-xl font-semibold text-sm no-underline">
            <svg className="w-4 h-4 text-cyanGlow" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            X
          </a>
        </div>

        <p className="mt-6 pt-5 border-t border-royal/30 text-sm text-steel break-all sm:break-normal">
          Or email <a href={`mailto:${LINKS.email}`} className="text-cyanGlow hover:underline font-semibold">{LINKS.email}</a>
        </p>
      </div>

      <div className="brush-slash px-5 py-6 sm:px-7 sm:py-7 text-abyss sm:-rotate-1">
        <p className="font-display font-black italic text-xl sm:text-2xl leading-snug tracking-tight">
          “Because together, we can make a difference.”
        </p>
        <p className="mt-2 font-display font-bold text-xs uppercase tracking-[0.18em] text-abyss/80">
          Together for a Better Tomorrow
        </p>
      </div>
    </div>
  );
}
