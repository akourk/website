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

// Age changes once a year; an hourly check keeps the page current without a
// constantly animating number. Calendar dates avoid an ambiguous birth timezone.
const ageStore = createTickingStore(() => {
  const today = new Date();
  const birthdayPending = today.getMonth() < 2
    || (today.getMonth() === 2 && today.getDate() < 15);
  return today.getFullYear() - 1990 - (birthdayPending ? 1 : 0);
}, 1000 * 60 * 60);

const Age = () => <>{useTickingValue(ageStore) ?? '—'}</>;

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
    label: 'Started Duolingo',
    value: <time dateTime="2023-06-25">June 25, 2023</time>,
    link: 'https://www.duolingo.com/',
  },
];

export default data;
