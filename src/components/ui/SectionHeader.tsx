interface SectionHeaderProps {
  eyebrow: string;
  eyebrowTone?: 'cyan' | 'gold';
  title: string;
  description: string;
}

export function SectionHeader({
  eyebrow,
  eyebrowTone = 'cyan',
  title,
  description,
}: SectionHeaderProps) {
  const toneClass = eyebrowTone === 'gold' ? 'text-goldRank' : 'text-cyanGlow';

  return (
    <div className="mb-8 sm:mb-10">
      <span className={`inline-block font-display font-bold text-xs uppercase tracking-[0.2em] mb-2 ${toneClass}`}>
        {eyebrow}
      </span>
      <h2 className="font-display font-black italic text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-ice">
        {title}
      </h2>
      <p className="mt-3 text-base sm:text-lg text-steel max-w-xl">{description}</p>
    </div>
  );
}
