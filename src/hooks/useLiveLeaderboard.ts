import { useEffect, useMemo, useRef, useState } from 'react';
import { PEOPLE, SEED, type LeaderboardPeriod, type ScoreSets } from '@/data/leaderboard';

export interface LiveFlash {
  id?: number;
  add?: number;
}

export function useLiveLeaderboard(period: LeaderboardPeriod) {
  const [scores, setScores] = useState<ScoreSets>(SEED);
  const [flash, setFlash] = useState<LiveFlash>({});
  const flashTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const id = Math.floor(Math.random() * PEOPLE.length);
      const add = 5 + Math.floor(Math.random() * 30);

      setScores((previous) => ({
        week: previous.week.map((value, index) => (index === id ? value + add : value)),
        month: previous.month.map((value, index) => (index === id ? value + add : value)),
        all: previous.all.map((value, index) => (index === id ? value + add : value)),
      }));

      setFlash({ id, add });
      if (flashTimerRef.current !== null) window.clearTimeout(flashTimerRef.current);
      flashTimerRef.current = window.setTimeout(() => {
        setFlash({});
        flashTimerRef.current = null;
      }, 1800);
    }, 2600);

    return () => {
      window.clearInterval(intervalId);
      if (flashTimerRef.current !== null) window.clearTimeout(flashTimerRef.current);
    };
  }, []);

  const ranked = useMemo(
    () => PEOPLE
      .map((person) => ({ ...person, pts: scores[period][person.id] }))
      .sort((a, b) => b.pts - a.pts || a.id - b.id),
    [scores, period],
  );

  return {
    ranked,
    maxPts: ranked[0]?.pts ?? 1,
    flash,
  };
}
