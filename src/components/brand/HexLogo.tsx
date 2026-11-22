interface HexLogoProps {
  size?: number;
}

export function HexLogo({ size = 40 }: HexLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 drop-shadow-[0_0_12px_rgba(44,229,245,0.35)]"
    >
      <polygon points="50,10 92,34 92,82 50,106 8,82 8,34" fill="#0B1633" stroke="#D8E3F6" strokeWidth="2.6" strokeLinejoin="round" />
      <polygon points="50,17 85,37.5 85,78.5 50,99 15,78.5 15,37.5" fill="#0A132B" stroke="#2563EB" strokeWidth="1.8" strokeLinejoin="round" />
      <polygon points="50,2 56,10 50,18 44,10" fill="#2CE5F5" />
      <path d="M31 35 H40 V53 H60 V48 H69 V77 H60 V62 H40 V77 H31 Z" fill="#F0F6FF" />
      <path d="M62 27 H67 V33.5 H73.5 V38.5 H67 V45 H62 V38.5 H55.5 V33.5 H62 Z" fill="#2CE5F5" />
      <rect x="30" y="84" width="11.5" height="3.8" rx="1.2" fill="#2CE5F5" />
      <rect x="44.2" y="84" width="11.5" height="3.8" rx="1.2" fill="#2CE5F5" />
      <rect x="58.5" y="84" width="11.5" height="3.8" rx="1.2" fill="#3B82F6" />
    </svg>
  );
}
