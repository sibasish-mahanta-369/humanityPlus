import { useCallback, useRef, useState } from 'react';
import { NAV_LINKS } from '@/config/site';
import { useClickOutsideAndEsc } from '@/hooks/useClickOutsideAndEsc';
import { BrandMark } from '@/components/brand/BrandMark';

export function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const navToggleRef = useRef<HTMLButtonElement | null>(null);
  const closeMenu = useCallback(() => setNavOpen(false), []);

  useClickOutsideAndEsc({
    enabled: navOpen,
    containerRef: navRef,
    triggerRef: navToggleRef,
    onClose: closeMenu,
  });

  return (
    <nav ref={navRef} className="sticky top-0 z-40 nav-safe-top bg-abyss/80 backdrop-blur-xl border-b border-royal/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        <a href="#top" className="no-underline rounded-xl focus-visible:outline-cyanGlow" aria-label="Humanity+ Home">
          <BrandMark compact />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-steel hover:text-cyanGlow hover:bg-cyanGlow/10 transition-colors no-underline"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          ref={navToggleRef}
          type="button"
          onClick={() => setNavOpen((open) => !open)}
          aria-expanded={navOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden grid place-items-center w-11 h-11 rounded-xl bg-midnight/80 border border-royal/45 text-cyanGlow cursor-pointer"
        >
          {navOpen ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
          )}
        </button>
      </div>

      {navOpen && (
        <div className="md:hidden border-t border-royal/30 bg-abyss/95 px-5 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="px-3 py-3.5 rounded-xl text-base font-semibold text-ice hover:bg-cyanGlow/10 hover:text-cyanGlow no-underline"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
