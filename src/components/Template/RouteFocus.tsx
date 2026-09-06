import {
  createContext, useContext, useEffect, useRef,
} from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

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
 *   somewhere that survives the layout remounting, hence the provider. It is
 *   set during render, not in an effect, because effects run child-first: the
 *   layout's effect would otherwise read the flag before it was updated.
 */
const HasNavigatedContext = createContext<{ current: boolean }>({ current: false });

export const RouteFocusProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const initialPathname = useRef(pathname);
  const hasNavigated = useRef(false);

  if (pathname !== initialPathname.current) {
    hasNavigated.current = true;
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
export const useFocusOnRouteChange = (container: React.RefObject<HTMLElement | null>) => {
  const hasNavigated = useContext(HasNavigatedContext);

  useEffect(() => {
    if (!hasNavigated.current) return;

    const heading = container.current?.querySelector<HTMLElement>('h1, h2');
    if (!heading) return;

    // Headings are not focusable by default. -1 makes them programmatically
    // focusable without adding a tab stop.
    heading.setAttribute('tabindex', '-1');
    heading.focus();
  }, [container, hasNavigated]);
};
