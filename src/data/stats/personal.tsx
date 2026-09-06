import type { ReactNode } from 'react';

import { createTickingStore, useTickingValue } from '../../utils/tickingStore';

/** One row of the stats table. */
export interface Stat {
  key: string;
  label: string;
  /** Rendered as-is, or passed through `format` when one is given. */
  value: ReactNode;
  /** When present, the value is wrapped in a link to here. */
  link?: string;
  format?: (value: ReactNode) => ReactNode;
}

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const MS_PER_YEAR = MS_PER_DAY * 365.2421897; // ms in an average year

const BIRTH_TIME = new Date('1990-03-15T22:55:00').getTime();
const DUOLINGO_START = new Date('2023-06-25').getTime();

// Module scope, so the timer is created once and shared rather than per render.
const ageStore = createTickingStore(
  () => ((Date.now() - BIRTH_TIME) / MS_PER_YEAR).toFixed(11),
  25,
);
const duolingoStore = createTickingStore(
  () => Math.floor(Math.abs(Date.now() - DUOLINGO_START) / MS_PER_DAY),
  1000 * 60 * 60, // Update every hour
);

// Both render a placeholder until the first tick. The prerendered HTML has no
// clock in it, and the streak sits inside a link: an empty one would have no
// accessible name, which is what the axe suite caught when this returned null.
const PENDING = '\u2014';

const Age = () => <>{useTickingValue(ageStore) ?? PENDING}</>;

const DuolingoStreak = () => {
  const days = useTickingValue(duolingoStore);

  return <>{days ?? PENDING} days</>;
};

// Removed GitHub commits stat due to API limitations

const data: Stat[] = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 'USA, Canada, Japan, Australia, Iceland, Greece',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Seattle, WA',
  },
  {
    key: 'duolingo',
    label: 'Duolingo streak',
    value: <DuolingoStreak />,
    link: 'https://www.duolingo.com/',
  },
];

export default data;
