import type { ReactNode } from 'react';

import { createTickingStore, useTickingValue } from '../../utils/tickingStore';
import duolingoStreak from '../../utils/duolingoStreak';
import Age from '../../components/Stats/Age';

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

const streakStore = createTickingStore(() => duolingoStreak(new Date()), 60 * 1000);

const DuolingoStreak = () => {
  const streak = useTickingValue(streakStore);
  return (
    <span title="Counting up daily from 1,187 days on October 17, 2026.">
      {streak === undefined ? '—' : `${streak.toLocaleString('en-US')} days`}
    </span>
  );
};

const data: Stat[] = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'coaching',
    label: 'Years coaching athletes',
    value: 15,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 'USA, Canada, Japan, Australia, Iceland, Greece, South Korea, Jamaica, Honduras, Mexico',
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
  {
    key: 'language',
    label: 'Currently learning',
    value: 'Greek',
  },
];

export default data;
