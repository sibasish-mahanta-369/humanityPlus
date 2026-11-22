import type { MouseEventHandler } from 'react';
import { LINKS } from '@/config/site';

interface StoreButtonsProps {
  onStoreClick: (storeName: string, url: string) => MouseEventHandler<HTMLAnchorElement>;
  message: string;
}

export function StoreButtons({ onStoreClick, message }: StoreButtonsProps) {
  return (
    <>
      <div className="mt-7 grid grid-cols-1 min-[420px]:flex min-[420px]:flex-wrap gap-3.5">
        <a
          href={LINKS.appStore}
          onClick={onStoreClick('App Store', LINKS.appStore)}
          className="btn-cyan-glow inline-flex items-center justify-center min-[420px]:justify-start gap-3 px-5 py-3.5 rounded-2xl no-underline"
        >
          <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.67-.81 1.12-1.94 1-3.08-.96.04-2.13.64-2.82 1.45-.61.7-.15 1.85-1.01 2.97 1.07.08 2.16-.54 2.83-1.34z" /></svg>
          <span className="leading-tight">
            <small className="block text-[10px] font-bold uppercase tracking-wider opacity-80">Download on the</small>
            <span className="font-display font-extrabold text-base">App Store</span>
          </span>
        </a>

        <a
          href={LINKS.playStore}
          onClick={onStoreClick('Google Play', LINKS.playStore)}
          className="btn-glass-cta inline-flex items-center justify-center min-[420px]:justify-start gap-3 px-5 py-3.5 rounded-2xl no-underline"
        >
          <svg className="w-5 h-5 text-cyanGlow shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.6 2.4c-.3.3-.6.8-.6 1.5v16.2c0 .7.3 1.2.6 1.5l.1.1 9.1-9.1v-.2L3.7 2.3l-.1.1zm12.2 12.6l-3-3v-.2l3-3 .1.1 3.6 2c1 .6 1 1.5 0 2.1l-3.6 2h-.1zm-3.1-2.9l-9 9c.4.4 1.1.4 1.9 0l10.2-5.8-3.1-3.2zm0-4.2l3.1-3.1L5.6 2.9c-.8-.4-1.5-.4-1.9 0l9 9z" /></svg>
          <span className="leading-tight">
            <small className="block text-[10px] font-semibold uppercase tracking-wider text-steel">Get it on</small>
            <span className="font-display font-extrabold text-base text-ice">Google Play</span>
          </span>
        </a>
      </div>
      {message && <p role="status" className="mt-3 text-sm font-medium text-goldRank">{message}</p>}
    </>
  );
}
