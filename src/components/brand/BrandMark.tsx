import { HexLogo } from './HexLogo';

interface BrandMarkProps {
  compact?: boolean;
}

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <HexLogo size={compact ? 36 : 42} />
      <span className="flex flex-col leading-none">
        <span className="font-display font-black italic tracking-wide text-xl sm:text-2xl text-ice">
          HUMANITY<span className="text-cyanGlow cyan-text-glow not-italic ml-0.5">+</span>
        </span>
        <span className="font-display font-bold uppercase tracking-[0.22em] text-[9px] sm:text-[10px] text-cyanGlow/90 mt-1">
          LEVEL UP HUMANITY
        </span>
      </span>
    </span>
  );
}
