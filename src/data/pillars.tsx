import type { ReactNode } from 'react';

export interface Pillar {
  label: string;
  icon: ReactNode;
}

export const PILLARS: Pillar[] = [
  {
    label: 'Discover Quests',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="6"/></svg>,
  },
  {
    label: 'Earn Impact XP',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h18"/><rect x="5" y="13" width="3" height="7" rx="0.5"/><rect x="10.5" y="9" width="3" height="11" rx="0.5"/><rect x="16" y="5" width="3" height="15" rx="0.5"/><path d="M5 9l5-4 4 2 5-4"/><path d="M16 3h3v3"/></svg>,
  },
  {
    label: 'Unlock Achievements',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l7 4v6c0 5-3.2 8.7-7 10-3.8-1.3-7-5-7-10V6l7-4z"/><path d="M9 12l1.5-2.5L12 11l1.5-1.5L15 12v2H9v-2z"/></svg>,
  },
  {
    label: 'Join Guilds',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    label: 'Create a Real Impact',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M12 3a13 13 0 0 1 0 18"/><path d="M12 3a13 13 0 0 0 0 18"/></svg>,
  },
];
