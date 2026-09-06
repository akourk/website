import {
  afterEach, beforeEach, describe, expect, test, vi,
} from 'vitest';
import {
  fireEvent, render, screen, waitFor, within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Link, MemoryRouter } from 'react-router';

import AppRoutes from '../AppRoutes';
import Hamburger from '../components/Template/Hamburger';
import ThemeToggle from '../components/Template/ThemeToggle';

afterEach(() => {
  vi.restoreAllMocks();
  delete document.documentElement.dataset.theme;
  localStorage.clear();
});

test.each(['blocked', 'stale'])('theme keeps toggling when storage is %s', async (storage) => {
  localStorage.setItem('theme', 'light');
  document.documentElement.dataset.theme = 'light';
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
    throw new DOMException('Storage unavailable', 'SecurityError');
  });
  if (storage === 'blocked') {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('Storage unavailable', 'SecurityError');
    });
  }
  const user = userEvent.setup();
  render(<ThemeToggle />);

  await user.click(screen.getByRole('button'));
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  await user.click(screen.getByRole('button'));
  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
});

test.each(['skills', 'courses'])('direct resume #%s links reveal and scroll to their section', async (id) => {
  const scroll = vi.spyOn(HTMLElement.prototype, 'scrollIntoView');
  const top = vi.spyOn(window, 'scrollTo');
  render(<MemoryRouter initialEntries={[`/resume/#${id}`]}><AppRoutes /></MemoryRouter>);

  await screen.findByRole('heading', { name: 'Resume', level: 1 });
  await waitFor(() => expect(scroll.mock.contexts).toContain(document.getElementById(id)));
  expect(top).not.toHaveBeenCalled();
  if (id === 'courses') expect(document.getElementById(id)).toHaveAttribute('open');
});

test.each(['#missing', '#%E0%A4%A'])('an unknown or malformed hash %s does not break the page', async (hash) => {
  render(<MemoryRouter initialEntries={[`/resume/${hash}`]}><AppRoutes /></MemoryRouter>);
  expect(await screen.findByRole('heading', { name: 'Resume', level: 1 })).toBeInTheDocument();
});

test('the Courses link reopens its section when the hash has not changed', async () => {
  const user = userEvent.setup();
  render(<MemoryRouter initialEntries={['/resume/#courses']}><AppRoutes /></MemoryRouter>);
  await screen.findByRole('heading', { name: 'Resume', level: 1 });
  const courses = document.getElementById('courses');
  await waitFor(() => expect(courses).toHaveAttribute('open'));

  await user.click(screen.getByText('Selected Courses'));
  expect(courses).not.toHaveAttribute('open');
  await user.click(screen.getByRole('link', { name: 'Courses' }));
  expect(courses).toHaveAttribute('open');
});

test('navigating to Courses focuses its disclosure without removing it from the tab order', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <Link to="/resume/#courses">Go to courses</Link>
      <AppRoutes />
    </MemoryRouter>,
  );
  await screen.findByRole('heading', { name: 'Lead Software Engineer', level: 1 });
  await user.click(screen.getByRole('link', { name: 'Go to courses' }));
  await screen.findByRole('heading', { name: 'Resume', level: 1 });

  const summary = document.querySelector('#courses summary');
  await waitFor(() => expect(summary).toHaveFocus());
  expect(summary).not.toHaveAttribute('tabindex', '-1');
  expect(document.getElementById('courses')).toHaveAttribute('open');
});

describe('mobile menu controls', () => {
  // jsdom has no browser top layer. These shims exercise our event wiring;
  // focus containment, inertness, Escape, and geometry need a real browser.
  beforeEach(() => {
    Object.defineProperties(HTMLDialogElement.prototype, {
      showModal: {
        configurable: true,
        value(this: HTMLDialogElement) { this.setAttribute('open', ''); },
      },
      close: {
        configurable: true,
        value(this: HTMLDialogElement) {
          this.removeAttribute('open');
          this.dispatchEvent(new Event('close'));
        },
      },
    });
  });

  afterEach(() => {
    Reflect.deleteProperty(HTMLDialogElement.prototype, 'showModal');
    Reflect.deleteProperty(HTMLDialogElement.prototype, 'close');
  });

  test('opens with a close control and closes before following a navigation link', async () => {
    const user = userEvent.setup();
    render(<MemoryRouter><Hamburger /></MemoryRouter>);
    const trigger = screen.getByRole('button', { name: 'Open menu' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    await user.click(trigger);
    const dialog = screen.getByRole('dialog', { name: 'Site navigation' });
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(within(dialog).getByRole('button', { name: 'Close menu' })).toHaveFocus();

    await user.click(within(dialog).getByRole('link', { name: 'Projects' }));
    expect(dialog).not.toHaveAttribute('open');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  test('dismisses outside the panel but not on its padding', async () => {
    const user = userEvent.setup();
    render(<MemoryRouter><Hamburger /></MemoryRouter>);
    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    const dialog = screen.getByRole('dialog');
    vi.spyOn(dialog, 'getBoundingClientRect').mockReturnValue(new DOMRect(90, 0, 300, 844));

    fireEvent.click(dialog, { clientX: 120, clientY: 50 });
    expect(dialog).toHaveAttribute('open');
    fireEvent.click(dialog, { clientX: 20, clientY: 50 });
    expect(dialog).not.toHaveAttribute('open');
  });
});
