import { useEffect, useState } from 'react';

export function ImpactCounter() {
  const [count, setCount] = useState(128430);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCount((value) => value + 1 + Math.floor(Math.random() * 4));
    }, 1100);

    return () => window.clearInterval(intervalId);
  }, []);

  const milestoneStep = 10000;
  const nextMilestone = (Math.floor(count / milestoneStep) + 1) * milestoneStep;
  const milestonePct = Math.round(((count % milestoneStep) / milestoneStep) * 100);

  return (
    <div className="mt-7 sm:mt-8 rpg-card rounded-2xl p-4 sm:p-5 max-w-xl border-royal/40">
      <div className="flex items-center justify-between gap-x-3 gap-y-1 mb-1.5 flex-wrap">
        <span className="inline-flex items-center gap-2 text-[11px] font-display font-bold uppercase tracking-[0.18em] text-cyanGlow">
          <span className="w-2 h-2 rounded-full bg-emeraldXp live-dot shadow-[0_0_8px_#2EE6A6]" />
          Global Impact XP Counter
        </span>
        <span className="text-[11px] font-display font-bold uppercase tracking-wider text-steel tabular-nums">
          Next milestone: {nextMilestone.toLocaleString()} ({milestonePct}%)
        </span>
      </div>
      <div className="flex items-baseline gap-3 flex-wrap">
        <strong aria-live="off" className="font-display font-black text-[2rem] min-[380px]:text-4xl sm:text-5xl tracking-tight tabular-nums text-gold-metallic">
          {count.toLocaleString()}
        </strong>
        <span className="text-sm sm:text-base text-steel font-medium">good deeds logged so far, and counting</span>
      </div>
      <div
        role="progressbar"
        aria-label="Progress toward next community milestone"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={milestonePct}
        className="mt-3 h-2 w-full rounded-full bg-abyss/90 border border-royal/40 overflow-hidden"
      >
        <div className="h-full rounded-full xp-bar-fill transition-all duration-700" style={{ width: `${milestonePct}%` }} />
      </div>
    </div>
  );
}
