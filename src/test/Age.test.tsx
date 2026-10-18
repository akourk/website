import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, expect, test, vi } from 'vitest';

import Age from '../components/Stats/Age';
import ageAt from '../utils/age';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.useRealTimers();
});

test('age changes on the birthday without rounding up early', () => {
  expect(ageAt(new Date(2026, 2, 14, 23, 59, 59, 999))).toEqual({
    years: 35,
    decimals: '99999999',
  });
  expect(ageAt(new Date(2026, 2, 15))).toEqual({ years: 36, decimals: '00000000' });
});

test('decimal age measures the actual birthday year, including a leap day', () => {
  const birthday = new Date(2023, 2, 15).getTime();
  const nextBirthday = new Date(2024, 2, 15).getTime();
  expect(ageAt(new Date(birthday + (nextBirthday - birthday) / 2))).toEqual({
    years: 33,
    decimals: '50000000',
  });
});

test('hover reveals ticking decimals and stops their timer when it ends', () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 9, 17, 12));
  const { container, unmount } = render(<Age />);
  const button = screen.getByRole('button', { name: '36 years old. Toggle decimal display.' });
  const digits = container.querySelector('.age-detail__decimals');
  expect(button).toHaveAttribute('aria-expanded', 'false');
  const idleTimers = vi.getTimerCount();

  fireEvent.pointerEnter(button, { pointerType: 'mouse' });
  expect(button).toHaveAttribute('aria-expanded', 'true');
  expect(vi.getTimerCount()).toBe(idleTimers + 1);
  const initial = digits?.textContent;
  act(() => { vi.advanceTimersByTime(1000); });
  expect(digits?.textContent).not.toBe(initial);
  expect(digits).toHaveAttribute('aria-hidden', 'true');
  expect(button).toHaveAccessibleName('36 years old. Toggle decimal display.');

  fireEvent.pointerLeave(button);
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(vi.getTimerCount()).toBe(idleTimers);
  const stopped = digits?.textContent;
  act(() => { vi.advanceTimersByTime(1000); });
  expect(digits?.textContent).toBe(stopped);
  unmount();
  expect(vi.getTimerCount()).toBe(0);
});

test('keyboard activation toggles the detail and Escape dismisses it', async () => {
  const user = userEvent.setup();
  render(<Age />);
  const button = screen.getByRole('button');

  await user.tab();
  expect(button).toHaveFocus();
  await user.keyboard('[Enter]');
  expect(button).toHaveAttribute('aria-expanded', 'true');
  await user.keyboard('[Space]');
  expect(button).toHaveAttribute('aria-expanded', 'false');
  await user.keyboard('[Enter]');
  await user.keyboard('[Escape]');
  expect(button).toHaveAttribute('aria-expanded', 'false');
});

test('touch activation can open and close the details', async () => {
  const user = userEvent.setup();
  render(<Age />);
  const button = screen.getByRole('button');

  await user.pointer({ keys: '[TouchA]', target: button });
  expect(button).toHaveAttribute('aria-expanded', 'true');
  await user.pointer({ keys: '[TouchA]', target: button });
  expect(button).toHaveAttribute('aria-expanded', 'false');
});

test('reduced motion reveals a static decimal value without an extra timer', () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 9, 17, 12));
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
    ...mediaQuery,
    media: query,
    matches: query === '(prefers-reduced-motion: reduce)',
  }));
  const { container } = render(<Age />);
  const button = screen.getByRole('button');
  const idleTimers = vi.getTimerCount();

  fireEvent.pointerEnter(button, { pointerType: 'mouse' });
  expect(button).toHaveAttribute('aria-expanded', 'true');
  const initial = container.querySelector('.age-detail__decimals')?.textContent;
  act(() => { vi.advanceTimersByTime(1000); });
  expect(container.querySelector('.age-detail__decimals')?.textContent).toBe(initial);
  expect(vi.getTimerCount()).toBe(idleTimers);
});
