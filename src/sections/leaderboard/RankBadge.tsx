interface RankBadgeProps {
  rank: number;
}

export function RankBadge({ rank }: RankBadgeProps) {
  if (rank === 1) {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl badge-gold flex flex-col items-center justify-center leading-none font-display font-black shrink-0" title="Rank 1">
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" /></svg>
        <span className="text-[10px] font-black -mt-0.5" aria-hidden="true">1</span>
        <span className="sr-only">Rank 1</span>
      </div>
    );
  }

  if (rank === 2) {
    return <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl badge-silver grid place-items-center font-display font-black text-sm shrink-0"><span className="sr-only">Rank </span>2</div>;
  }

  if (rank === 3) {
    return <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl badge-bronze grid place-items-center font-display font-black text-sm shrink-0"><span className="sr-only">Rank </span>3</div>;
  }

  return <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-abyss/70 border border-royal/30 grid place-items-center font-display font-bold text-sm text-steel shrink-0"><span className="sr-only">Rank </span>{rank}</div>;
}
