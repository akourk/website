import { Suspense, lazy, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import routes from '../../data/routes';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const MENU_ID = 'hamburger-menu';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  // react-burger-menu also closes itself on Escape and on an overlay click, so
  // the toggle's aria-expanded has to follow the menu rather than only the click.
  const handleStateChange = useCallback(
    ({ isOpen }: { isOpen: boolean }) => setOpen(isOpen),
    [],
  );

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          <li className={`menu ${open ? 'close-menu' : 'open-menu'}`}>
            <button
              type="button"
              className="menu-hover"
              aria-expanded={open}
              aria-controls={MENU_ID}
              onClick={() => setOpen(!open)}
            >
              <span aria-hidden="true">{open ? '✕' : '☰'}</span>
              <span className="screen-reader-only">{open ? 'Close menu' : 'Open menu'}</span>
            </button>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu
          right
          isOpen={open}
          id={MENU_ID}
          onStateChange={handleStateChange}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <ul className="hamburger-ul">
            {routes.map((l) => (
              <li key={l.label}>
                {/*
                  The closed menu is aria-hidden but still in the layout, so its
                  links have to leave the tab order too. Focusable content inside
                  aria-hidden is an axe "aria-hidden-focus" violation and strands
                  keyboard users in an invisible menu.
                */}
                <Link to={l.path} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                  <h3 className={l.index ? 'index-li' : undefined}>{l.label}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;
