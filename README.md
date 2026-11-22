# Humanity+ Web App

A Vite + React + TypeScript Humanity+ landing page.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Vite prints the local development URL in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Configure launch links

Copy `.env.example` to `.env.local` and set App Store, Play Store and Launch video variables:

```dotenv
VITE_APP_STORE_URL=https://apps.apple.com/...
VITE_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=...
VITE_LAUNCH_VIDEO_URL=https://...
```

If a store URL is blank, the corresponding CTA retains the original “coming soon” message. If the trailer URL is blank, the video card displays its original “coming soon” state. These values are public client-side URLs; do not put secrets in `VITE_*` variables.

## Project structure

```text
src/
├── App.tsx
├── main.tsx
├── config/
│   └── site.ts
├── data/
│   ├── faqs.ts
│   ├── howItWorks.ts
│   ├── leaderboard.ts
│   └── pillars.tsx
├── components/
│   ├── brand/
│   │   ├── BrandMark.tsx
│   │   ├── HexLogo.tsx
│   │   ├── HeroBackdrop.tsx
│   │   └── StepHexBadge.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   └── ui/
│       └── SectionHeader.tsx
├── hooks/
│   ├── useClickOutsideAndEsc.ts
│   ├── useFlipAnimation.ts
│   └── useLiveLeaderboard.ts
├── sections/
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   ├── ContactSection.tsx
│   │   └── SocialCard.tsx
│   ├── faq/
│   │   └── FaqSection.tsx
│   ├── hero/
│   │   ├── HeroPillars.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ImpactCounter.tsx
│   │   ├── LaunchVideoCard.tsx
│   │   └── StoreButtons.tsx
│   ├── how-it-works/
│   │   └── HowItWorksSection.tsx
│   └── leaderboard/
│       ├── LeaderboardRow.tsx
│       ├── LeaderboardSection.tsx
│       └── RankBadge.tsx
├── styles/
│   └── globals.css
└── utils/
    └── tier.ts
```

## Important implementation notes

- The leaderboard uses the original seed values and names, then adds random XP in the browser every 2.6 seconds. It is a visual demo, not connected to a server, and values reset on refresh.
- The global impact counter starts at the original sample value of `128,430` and increments locally. It is not a verified live community metric.
- The contact form validates fields and displays the original confirmation UI, but it does **not** send the message anywhere. Connect a backend/form provider before using it to collect real submissions.
- The App Store, Google Play, and launch-video URLs were blank placeholders in the original HTML. They remain configurable through `.env.local`.
- The Instagram, X, and email values are retained from the original source, including the example email address.

## Next integration work

1. Connect leaderboard scores and deed verification to a real API/database.
2. Replace the local impact counter with a server-sourced aggregate.
3. Connect the contact form to an email or form-submission endpoint and add server-side validation/spam protection.
4. Add real mobile-store listing URLs and the launch trailer URL.
5. Add automated tests for the leaderboard tier calculation, form validation, and key interactions.
