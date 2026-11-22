import type { LeaderboardPeriod } from '@/data/leaderboard';

const TIER_THRESHOLDS: Record<LeaderboardPeriod, [number, number, number, number, number]> = {
  week: [50, 120, 200, 300, 400],
  month: [250, 600, 900, 1150, 1400],
  all: [2000, 4500, 6500, 8000, 8800],
};

export interface Tier {
  letter: 'S' | 'A' | 'B' | 'C' | 'D' | 'E';
  cls: string;
}

export function getTier(pts: number, period: LeaderboardPeriod = 'week'): Tier {
  const [d, c, b, a, s] = TIER_THRESHOLDS[period];
  if (pts >= s) return { letter: 'S', cls: 'bg-goldRank/20 text-goldRank border-goldRank/40' };
  if (pts >= a) return { letter: 'A', cls: 'bg-emeraldXp/15 text-emeraldXp border-emeraldXp/40' };
  if (pts >= b) return { letter: 'B', cls: 'bg-cyanGlow/15 text-cyanGlow border-cyanGlow/40' };
  if (pts >= c) return { letter: 'C', cls: 'bg-royal/25 text-blue-300 border-royal/50' };
  if (pts >= d) return { letter: 'D', cls: 'bg-steel/15 text-steel border-steel/35' };
  return { letter: 'E', cls: 'bg-abyss/70 text-steel/70 border-royal/25' };
}
