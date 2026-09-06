import { Suspense, lazy, useCallback, useState } from 'react';
import { NavLink } from 'react-router';

import routes from '../../data/routes';
import useIsHydrated from '../../utils/useIsHydrated';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const MENU_ID = 'site-menu';

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  // The sliding panel is unreachable without JavaScript, and renderToString
  // cannot resolve a lazy import, so prerendering it only produced an
  // unfinished Suspense boundary and a page of React's diagnostic text. It is
  // mounted after hydration instead.
  const isHydrated = useIsHydrated();

  // react-burger-menu also closes itself on Escape and on an overlay click, so
  // the toggle's aria-expanded has to follow the menu rather than only the click.
  const handleStateChange = useCallback(
    ({ isOpen }: { isOpen: boolean }) => setOpen(isOpen),
    [],
  );

  return (
    <>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls={isHydrated ? MENU_ID : undefined}
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        <span className="screen-reader-only">{open ? 'Close menu' : 'Open menu'}</span>
      </button>
      {isHydrated && (
      <Suspense fallback={null}>
        <Menu
          right
          isOpen={open}
          id={MENU_ID}
          onStateChange={handleStateChange}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <ul className="menu-list">
            {routes.map((route) => (
              <li key={route.label}>
                {/*
                  The closed menu is aria-hidden but still in the layout, so its
                  links have to leave the tab order too. Focusable content inside
                  aria-hidden is an axe "aria-hidden-focus" violation and strands
                  keyboard users in an invisible menu.
                */}
                <NavLink
                  to={route.path}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                >
                  {route.index ? 'Home' : route.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </Menu>
      </Suspense>
      )}
    </>
  );
};

export default Hamburger;
