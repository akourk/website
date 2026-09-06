// Guards the two halves of the prerendering setup that a page-component test
// cannot see: that each route's <title> and <meta name="description"> actually
// reach the document, and that client-side navigation keeps updating them.
import '@testing-library/jest-dom';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';

import AppRoutes from '../AppRoutes';

const renderAt = (route: string) => render(
  <HelmetProvider>
    <MemoryRouter initialEntries={[route]}>
      <AppRoutes />
    </MemoryRouter>
  </HelmetProvider>,
);

const description = () => document.querySelector('meta[name="description"]')?.getAttribute('content');

// The masthead nav, the footer nav and the small-screen menu all link to every
// route, so link queries have to say which navigation they mean.
const mainNavLink = (name: string) => within(
  screen.getByRole('navigation', { name: 'Main' }),
).getByRole('link', { name });

test.each([
  ['/', 'Alex Kourkoumelis', 'Lead Software Engineer'],
  ['/about', 'About | Alex Kourkoumelis', 'About Me'],
  ['/resume', 'Resume | Alex Kourkoumelis', 'Resume'],
  ['/projects', 'Projects | Alex Kourkoumelis', 'Projects'],
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
  await waitFor(() => expect(document.title).toBe('404 Not Found'));
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
