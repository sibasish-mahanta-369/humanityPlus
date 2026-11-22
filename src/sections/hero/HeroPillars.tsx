import { PILLARS } from '@/data/pillars';

export function HeroPillars() {
  return (
    <div className="mt-10 sm:mt-14 pt-6 sm:pt-7 border-t border-royal/30 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
      {PILLARS.map((pillar, index) => (
        <div
          key={pillar.label}
          className={`flex flex-col items-center text-center px-3 py-3 rounded-2xl bg-abyss/40 border border-royal/25 hover:border-cyanGlow/50 transition-colors ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
        >
          <span className="grid place-items-center w-11 h-11 rounded-xl bg-cyanGlow/10 border border-cyanGlow/35 text-cyanGlow shadow-[0_0_16px_rgba(44,229,245,0.22)] mb-2.5">
            {pillar.icon}
          </span>
          <span className="font-display font-bold text-xs sm:text-sm tracking-wide text-ice">{pillar.label}</span>
        </div>
      ))}
    </div>
  );
}
