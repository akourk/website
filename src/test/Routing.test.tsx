// Guards the two halves of the prerendering setup that a page-component test
// cannot see: that each route's <title> and <meta name="description"> actually
// reach the document, and that client-side navigation keeps updating them.
import '@testing-library/jest-dom';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';

import AppRoutes from '../AppRoutes';

const renderAt = (route: string) => render(
  <MemoryRouter initialEntries={[route]}>
    <AppRoutes />
  </MemoryRouter>,
);

const description = () => document.querySelector('meta[name="description"]')?.getAttribute('content');

// Site navigation appears in more than one place, so link queries have to say
// which navigation they mean. Project detail routes stay out of those menus.
const mainNavLink = (name: string) => within(
  screen.getByRole('navigation', { name: 'Main' }),
).getByRole('link', { name });

test.each([
  ['/', 'Alex Kourkoumelis', 'Lead Software Engineer'],
  ['/about', 'About | Alex Kourkoumelis', 'About Me'],
  ['/resume', 'Resume | Alex Kourkoumelis', 'Resume'],
  ['/projects', 'Projects | Alex Kourkoumelis', 'Projects'],
  ['/projects/finledger', 'finledger case study | Alex Kourkoumelis', 'finledger'],
  ['/stats', 'Stats | Alex Kourkoumelis', 'Stats'],
  ['/contact', 'Contact | Alex Kourkoumelis', 'Contact'],
])('%s sets its own title, description and heading', async (route, title, heading) => {
  renderAt(route);

  await waitFor(() => expect(screen.getByTestId('heading')).toHaveTextContent(heading));
  await waitFor(() => expect(document.title).toBe(title));
  expect(description()).toBeTruthy();
});

test('an unknown route renders the NotFound page', async () => {
  renderAt('/no-such-page');

  await waitFor(() => expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument());
  // The 404 carries the site name like every other page now. It used to be the
  // one page without it, because it was the one page outside the layout that
  // applied helmet's title template.
  await waitFor(() => expect(document.title).toBe('404 Not Found | Alex Kourkoumelis'));
});

test('navigation moves focus to the new page heading, but arriving does not', async () => {
  const user = userEvent.setup();
  renderAt('/');

  await waitFor(() => expect(screen.getByTestId('heading')).toHaveTextContent('Lead Software Engineer'));
  // Arriving on a page must not steal focus from the reader.
  expect(document.activeElement).toBe(document.body);

  await user.click(mainNavLink('Resume'));

  await waitFor(() => expect(screen.getByTestId('heading')).toHaveTextContent('Resume'));
  await waitFor(() => expect(document.activeElement).toBe(screen.getByTestId('heading')));
});

test('the skip link points at the main landmark', () => {
  renderAt('/');

  const skip = screen.getByRole('link', { name: /skip to content/i });
  expect(skip).toHaveAttribute('href', '#main');
  expect(document.querySelector('main#main')).toBeInTheDocument();
});

test('client-side navigation swaps the page and its metadata', async () => {
  const user = userEvent.setup();
  renderAt('/');

  await waitFor(() => expect(document.title).toBe('Alex Kourkoumelis'));

  await user.click(mainNavLink('Resume'));

  await waitFor(() => expect(screen.getByTestId('heading')).toHaveTextContent('Resume'));
  await waitFor(() => expect(document.title).toBe('Resume | Alex Kourkoumelis'));
  expect(description()).toContain('Experience, skills, and education');
});

test('a case study is reachable from Projects while its parent stays active in site navigation', async () => {
  const user = userEvent.setup();
  renderAt('/projects');

  await user.click(await screen.findByRole('link', { name: 'Read case study for finledger' }));

  await waitFor(() => expect(document.title).toBe('finledger case study | Alex Kourkoumelis'));
  expect(screen.getByTestId('heading')).toHaveFocus();
  expect(mainNavLink('Projects')).toHaveAttribute('aria-current', 'page');
  expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
    'href', 'https://akourk.github.io/website/projects/finledger/',
  );
  for (const navigation of ['Main', 'Mobile', 'Footer']) {
    // Include the closed mobile dialog: hiding a link is not the same as keeping
    // a detail page out of its navigation list.
    const nav = screen.getByRole('navigation', { name: navigation, hidden: true });
    expect(within(nav).queryByRole('link', { name: /finledger/i, hidden: true })).not.toBeInTheDocument();
  }

  await user.click(screen.getByRole('link', { name: 'Back to projects' }));
  await waitFor(() => expect(document.title).toBe('Projects | Alex Kourkoumelis'));
  expect(screen.getByTestId('heading')).toHaveFocus();
});
