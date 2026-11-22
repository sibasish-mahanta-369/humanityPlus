import { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TABS, type LeaderboardPeriod } from '@/data/leaderboard';
import { useLiveLeaderboard } from '@/hooks/useLiveLeaderboard';
import { useFlipAnimation } from '@/hooks/useFlipAnimation';
import { LeaderboardRow } from './LeaderboardRow';

export function LeaderboardSection() {
  const [period, setPeriod] = useState<LeaderboardPeriod>('week');
  const { ranked, maxPts, flash } = useLiveLeaderboard(period);
  const orderKey = ranked.map((person) => person.id).join(',');
  const { listRef, rowRefs } = useFlipAnimation(ranked, orderKey);

  const setRowRef = (id: number, element: HTMLDivElement | null) => {
    if (element) rowRefs.current[id] = element;
    else delete rowRefs.current[id];
  };

  return (
    <section id="leaderboard" className="pb-12 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <SectionHeader
          eyebrow="Hero Rankings"
          eyebrowTone="gold"
          title="Community leaderboard"
          description="Rankings update live as people log deeds. Sample data shown until launch."
        />

        <div className="rpg-card rounded-3xl p-3 sm:p-6">
          <div className="flex items-center gap-2 mb-5 flex-wrap" role="group" aria-label="Leaderboard period">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                aria-pressed={period === tab.key}
                onClick={() => setPeriod(tab.key)}
                className={`font-display font-bold text-xs sm:text-sm uppercase tracking-wider px-3.5 sm:px-4 py-2.5 min-h-[40px] rounded-full border transition-all cursor-pointer ${
                  period === tab.key
                    ? 'bg-cyanGlow text-abyss border-cyanGlow shadow-[0_0_20px_rgba(44,229,245,0.45)]'
                    : 'bg-abyss/60 text-steel border-royal/40 hover:border-cyanGlow/60 hover:text-ice'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <span className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emeraldXp/10 border border-emeraldXp/35 text-xs font-display font-bold uppercase tracking-wider text-emeraldXp">
              <i className="block w-2 h-2 rounded-full bg-emeraldXp live-dot shadow-[0_0_8px_#2EE6A6]" />
              Live
            </span>
          </div>

          <div ref={listRef} className="relative space-y-1.5" role="list">
            {ranked.map((person, rankIndex) => (
              <LeaderboardRow
                key={person.id}
                person={person}
                rankIndex={rankIndex}
                maxPts={maxPts}
                period={period}
                flash={flash}
                setRowRef={setRowRef}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
