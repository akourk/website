import { act, cleanup, render, screen } from '@testing-library/react';
import { afterEach, expect, test, vi } from 'vitest';

import PersonalStats from '../components/Stats/Personal';
import duolingoStreak from '../utils/duolingoStreak';

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

test.each([
  ['2026-10-17T19:00:00Z', 1187],
  ['2026-10-18T06:59:59Z', 1187],
  ['2026-10-18T07:00:00Z', 1188],
  // The November clock change creates a 25-hour day in Los Angeles.
  ['2026-11-01T07:00:00Z', 1202],
  ['2026-11-02T07:59:59Z', 1202],
  ['2026-11-02T08:00:00Z', 1203],
])('streak uses Los Angeles calendar days at %s', (date, expected) => {
  expect(duolingoStreak(new Date(date))).toBe(expected);
});

test('an open page updates the streak after midnight without a reload', () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-10-18T06:59:30Z'));
  render(<PersonalStats />);
  expect(screen.getByRole('link', { name: '1,187 days' })).toBeInTheDocument();

  act(() => { vi.advanceTimersByTime(60 * 1000); });
  expect(screen.getByRole('link', { name: '1,188 days' })).toBeInTheDocument();
});
