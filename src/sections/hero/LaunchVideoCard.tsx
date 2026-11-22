import { useState } from 'react';
import { LAUNCH_VIDEO_URL } from '@/config/site';

export function LaunchVideoCard() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (LAUNCH_VIDEO_URL) {
      window.open(LAUNCH_VIDEO_URL, '_blank', 'noopener,noreferrer');
    } else {
      setShowMessage(true);
    }
  };

  return (
    <div className="relative group">
      <div className="pointer-events-none absolute -inset-1 rounded-[26px] bg-gradient-to-tr from-royal/50 via-cyanGlow/35 to-goldRank/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
      <button
        type="button"
        onClick={handleClick}
        aria-label="Play launch video"
        className="relative w-full min-h-[260px] aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden border border-cyanGlow/45 bg-gradient-to-br from-[#0E1E48] via-[#0B1636] to-[#070E24] text-left cursor-pointer shadow-2xl flex flex-col justify-between p-4 sm:p-5 transition-transform duration-300 hover:scale-[1.01] focus-visible:outline-cyanGlow"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(44,229,245,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(44,229,245,0.22) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-cyanGlow/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-52 h-52 rounded-full bg-royal/35 blur-3xl" />
          <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 opacity-60" viewBox="0 0 240 240" fill="none">
            <circle cx="120" cy="120" r="96" stroke="#2CE5F5" strokeOpacity="0.22" strokeWidth="1.2" strokeDasharray="8 8" className="orbit-spin origin-center" />
            <circle cx="120" cy="120" r="74" stroke="#3B82F6" strokeOpacity="0.45" strokeWidth="1.5" />
            <ellipse cx="120" cy="120" rx="108" ry="38" transform="rotate(-22 120 120)" stroke="#2CE5F5" strokeOpacity="0.4" strokeWidth="1.3" />
          </svg>
          <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyanGlow/80 rounded-tl-sm" />
          <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyanGlow/80 rounded-tr-sm" />
          <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyanGlow/80 rounded-bl-sm" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyanGlow/80 rounded-br-sm" />
        </div>

        <div className="relative z-10 flex items-center justify-between gap-2 w-full pt-1">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-abyss/75 border border-cyanGlow/35 text-[11px] font-display font-bold uppercase tracking-[0.16em] text-cyanGlow">
            <span className="w-1.5 h-1.5 rounded-full bg-cyanGlow" />
            Launch Trailer
          </span>
        </div>

        <div className="relative z-10 my-auto flex flex-col items-center justify-center py-2">
          <span className="relative grid place-items-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#FFE27A] via-[#FFC83D] to-[#F59E0B] shadow-[0_0_32px_rgba(255,200,61,0.55)] ring-4 ring-cyanGlow/35 transition-transform duration-200 group-hover:scale-110">
            <svg className="w-8 h-8 text-abyss translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v14l11-7-11-7z" /></svg>
          </span>
        </div>

        <div className="relative z-10 w-full space-y-2">
          <div className="flex items-center justify-between gap-2 px-1 pb-1 text-xs sm:text-sm font-medium">
            <span className={showMessage ? 'text-goldRank font-semibold' : 'text-ice/90'}>
              {showMessage ? 'The launch video is coming soon. Check back on launch day.' : 'Watch the launch video'}
            </span>
            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-cyanGlow shrink-0">
              {showMessage ? 'Stay Tuned' : 'Play →'}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
