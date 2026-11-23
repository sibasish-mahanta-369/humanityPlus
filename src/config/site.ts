export const LINKS = {
  appStore: import.meta.env.VITE_APP_STORE_URL || '#',
  playStore: import.meta.env.VITE_PLAY_STORE_URL || '#',
  instagram: 'https://instagram.com/humanityplusofficial',
  x: 'https://x.com/humanityplusofficial',
  email: 'hello.humanityplus@gmail.com',
} as const;

export const LAUNCH_VIDEO_URL = import.meta.env.VITE_LAUNCH_VIDEO_URL || '';

export const NAV_LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#leaderboard', label: 'Leaderboard' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
] as const;
