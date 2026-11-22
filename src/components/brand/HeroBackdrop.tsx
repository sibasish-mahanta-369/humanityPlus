export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="starfield absolute inset-0" />
      <div className="absolute -top-32 left-1/4 w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] rounded-full bg-royal/25 blur-[120px]" />
      <div className="absolute top-12 right-0 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-cyanGlow/12 blur-[110px]" />
      <svg className="absolute bottom-0 right-0 w-[160%] sm:w-full max-w-[920px] h-auto opacity-25 sm:opacity-35" viewBox="0 0 920 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="spireBeam" x1="650" y1="10" x2="650" y2="410" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2CE5F5" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#2563EB" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#070D1F" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cityFade" x1="460" y1="180" x2="460" y2="420" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E3A7A" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#070D1F" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <ellipse cx="650" cy="185" rx="190" ry="42" transform="rotate(-11 650 185)" stroke="#2CE5F5" strokeOpacity="0.32" strokeWidth="1.5" />
        <ellipse cx="650" cy="155" rx="135" ry="26" transform="rotate(8 650 155)" stroke="#3B82F6" strokeOpacity="0.42" strokeWidth="1.2" />
        <path d="M120 340 C 340 240, 620 235, 910 300" stroke="#2CE5F5" strokeOpacity="0.18" strokeWidth="1.5" />
        <line x1="650" y1="8" x2="650" y2="380" stroke="url(#spireBeam)" strokeWidth="3" />
        <polygon points="650,42 668,185 676,390 624,390 632,185" fill="url(#cityFade)" stroke="#2CE5F5" strokeOpacity="0.35" strokeWidth="1" />
        <path d="M350 420 V340 L372 325 V420 M390 420 V305 L418 290 V420 M435 420 V320 L460 320 V420 M480 420 V260 L512 242 V420 M528 420 V290 L558 278 V420 M575 420 V215 L608 190 V420 M692 420 V210 L724 230 V420 M740 420 V275 L772 288 V420 M788 420 V315 L820 302 V420 M835 420 V350 L875 335 V420" fill="url(#cityFade)" />
        <line x1="340" y1="365" x2="890" y2="365" stroke="#2CE5F5" strokeOpacity="0.22" strokeWidth="1.2" />
      </svg>
    </div>
  );
}
