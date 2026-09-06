import {
  createContext, useContext, useEffect, useState,
} from 'react';
import type { ReactNode, RefObject } from 'react';
import { useLocation } from 'react-router';

/**
 * Focus management across client-side navigation.
 *
 * Following a link destroys the element focus was on, so the browser drops
 * focus to the top of the document and a screen reader announces nothing: the
 * page changed and the user was not told. Moving focus to the new page's
 * heading announces the page and puts the keyboard back in a sensible place.
 *
 * Two things make this fiddly, and both are why it is split into a provider and
 * a hook rather than being one component:
 *
 * - The focusing has to happen where the new page's content is, so it lives in
 *   the layout, which mounts with the page. A component above <Routes> runs its
 *   effect while the lazy route is still suspended, when the only thing in the
 *   DOM is the fallback and there is no heading to focus.
 * - Whether this is a navigation or the first page load has to be remembered
 *   somewhere that survives the layout remounting, hence the provider.
 */
const HasNavigatedContext = createContext(false);

export const RouteFocusProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  // Derived during render rather than in an effect, so the layout's own effect
  // reads the updated value in the same commit. Effects run child-first, so an
  // effect here would set this after the layout had already read it.
  const [seenPathname, setSeenPathname] = useState(pathname);
  const [hasNavigated, setHasNavigated] = useState(false);

  if (pathname !== seenPathname) {
    setSeenPathname(pathname);
    setHasNavigated(true);
  }

  return (
    <HasNavigatedContext.Provider value={hasNavigated}>
      {children}
    </HasNavigatedContext.Provider>
  );
};

/**
 * Moves focus to the first heading inside `container` when the layout mounts as
 * the result of a navigation. Deliberately does nothing on the first page load:
 * stealing focus from someone who has just arrived is its own problem.
 */
export const useFocusOnRouteChange = (container: RefObject<HTMLElement | null>) => {
  const hasNavigated = useContext(HasNavigatedContext);

  useEffect(() => {
    if (!hasNavigated) return;

    const heading = container.current?.querySelector<HTMLElement>('h1, h2');
    if (!heading) return;

    // Headings are not focusable by default. -1 makes them programmatically
    // focusable without adding a tab stop.
    heading.setAttribute('tabindex', '-1');
    heading.focus();
  }, [container, hasNavigated]);
};
