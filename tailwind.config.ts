import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Exo 2"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        abyss: '#070D1F',
        midnight: '#0A1124',
        surface: 'rgba(15, 25, 54, 0.78)',
        cyanGlow: '#2CE5F5',
        royal: '#2563EB',
        goldRank: '#FFC83D',
        emeraldXp: '#2EE6A6',
        ice: '#F0F6FF',
        steel: '#94A8CC',
      },
    },
  },
  plugins: [],
} satisfies Config;
