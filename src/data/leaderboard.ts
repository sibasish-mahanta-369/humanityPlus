export type LeaderboardPeriod = 'week' | 'month' | 'all';

export interface Person {
  id: number;
  name: string;
  guild: string;
  hue: number;
}

export type ScoreSets = Record<LeaderboardPeriod, number[]>;

export const PEOPLE: Person[] = [
  ['Aanya Shah', 'Dawn Wardens'],
  ['Marcus Webb', 'Iron Samaritans'],
  ['Lucía Ortega', 'Solar Guardians'],
  ['Kofi Mensah', 'Ember Circle'],
  ['Hana Sato', 'Tidebreakers'],
  ['Priya Nair', 'Lotus Vanguard'],
  ['Tomás Rivera', 'Skyward Helpers'],
  ['Ingrid Holm', 'Aurora Order'],
  ['Zara Khan', 'Silent Sparks'],
  ['Eli Cohen', 'Kind Knights'],
].map(([name, guild], id) => ({
  id,
  name,
  guild,
  hue: (id * 47 + 190) % 360,
}));

export const SEED: ScoreSets = {
  week: [340, 310, 285, 260, 230, 205, 180, 150, 120, 90],
  month: [1480, 1390, 1310, 1200, 1105, 990, 870, 760, 640, 520],
  all: [9120, 8740, 8300, 7810, 7220, 6650, 6010, 5400, 4780, 4120],
};

export const TABS: { key: LeaderboardPeriod; label: string }[] = [
  { key: 'week', label: 'This week' },
  { key: 'month', label: 'This month' },
  { key: 'all', label: 'All time' },
];
