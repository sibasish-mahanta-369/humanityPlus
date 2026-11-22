import { getTier } from '@/utils/tier';
import { RankBadge } from './RankBadge';
import type { LiveFlash } from '@/hooks/useLiveLeaderboard';
import type { LeaderboardPeriod, Person } from '@/data/leaderboard';

interface RankedPerson extends Person {
  pts: number;
}

interface LeaderboardRowProps {
  person: RankedPerson;
  rankIndex: number;
  maxPts: number;
  period: LeaderboardPeriod;
  flash: LiveFlash;
  setRowRef: (id: number, element: HTMLDivElement | null) => void;
}

export function LeaderboardRow({ person, rankIndex, maxPts, period, flash, setRowRef }: LeaderboardRowProps) {
  const rank = rankIndex + 1;
  const pct = Math.max(12, Math.round((person.pts / maxPts) * 100));
  const isFlashing = flash.id === person.id;
  const isTop1 = rankIndex === 0;
  const tier = getTier(person.pts, period);

  return (
    <div
      ref={(element) => setRowRef(person.id, element)}
      role="listitem"
      className={`lb-row min-h-[64px] py-2 flex items-center gap-2 sm:gap-4 px-2.5 sm:px-4 rounded-2xl border ${
        isFlashing
          ? 'lb-flash'
          : isTop1
            ? 'bg-gradient-to-r from-goldRank/12 via-royal/15 to-abyss/60 border-goldRank/45 shadow-[0_0_20px_rgba(255,200,61,0.12)]'
            : 'bg-abyss/45 border-royal/25 hover:border-cyanGlow/45'
      }`}
    >
      <RankBadge rank={rank} />

      <div
        aria-hidden="true"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full grid place-items-center font-display font-extrabold text-sm text-white shrink-0 ring-2 ring-cyanGlow/45 shadow-[0_0_12px_rgba(44,229,245,0.2)]"
        style={{ background: `linear-gradient(135deg, hsl(${person.hue} 68% 46%), hsl(${(person.hue + 30) % 360} 65% 30%))` }}
      >
        {person.name[0]}
      </div>

      <div className="flex-1 min-w-0 leading-tight">
        <div className="flex items-center gap-2">
          <b className="font-semibold text-sm sm:text-base text-ice truncate">{person.name}</b>
          <span className={`shrink-0 text-[10px] font-display font-black uppercase tracking-wider px-1.5 py-0.5 rounded border ${tier.cls}`} title={`${tier.letter}-Tier`}>
            <span className="sm:hidden">{tier.letter}</span>
            <span className="hidden sm:inline">{tier.letter}-Tier</span>
          </span>
        </div>
        <small className="text-xs text-steel block truncate">
          {person.guild}
          {isFlashing && <span className="sm:hidden ml-2 font-display font-extrabold text-emeraldXp">+{flash.add} XP</span>}
        </small>
      </div>

      <div className="hidden sm:block text-right font-display font-extrabold text-xs sm:text-sm text-emeraldXp min-w-[54px] tabular-nums">
        {isFlashing ? `+${flash.add} XP` : ''}
      </div>

      <div className="text-right shrink-0 w-[4.5rem] sm:w-28">
        <div className={`font-display font-extrabold text-sm sm:text-base tabular-nums ${isTop1 ? 'text-goldRank' : 'text-ice'}`}>
          {person.pts.toLocaleString()} <span className="text-[10px] font-bold text-cyanGlow/80">XP</span>
        </div>
        <div className="mt-1 h-1.5 w-full rounded-full bg-midnight/90 overflow-hidden border border-royal/30">
          <div
            className={`h-full rounded-full transition-all duration-500 ${isTop1 ? 'bg-gradient-to-r from-goldRank to-amber-400' : 'bg-gradient-to-r from-royal to-cyanGlow'}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
