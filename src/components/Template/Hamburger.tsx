import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';

import { navigationRoutes } from '../../data/routes';
import useIsHydrated from '../../utils/useIsHydrated';

const MENU_ID = 'site-menu';

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isHydrated = useIsHydrated();

  useEffect(() => {
    const dialog = dialogRef.current;
    // The backdrop is not a DOM element. Escape and the close button provide
    // the keyboard equivalents of tapping outside the panel.
    const dismissBackdrop = (event: MouseEvent) => {
      if (!dialog || event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right
        || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    };
    const desktop = window.matchMedia('(min-width: 43.001em)');
    const closeOnDesktop = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    dialog?.addEventListener('click', dismissBackdrop);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      dialog?.removeEventListener('click', dismissBackdrop);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls={MENU_ID}
        aria-haspopup="dialog"
        disabled={!isHydrated}
        onClick={() => {
          dialogRef.current?.showModal();
          setOpen(true);
          closeRef.current?.focus();
        }}
      >
        <span aria-hidden="true">☰</span>
        <span className="screen-reader-only">Open menu</span>
      </button>
      {/* Native modal behavior keeps the background inert and handles Escape
          and focus restoration without competing with route focus management. */}
      <dialog
        ref={dialogRef}
        id={MENU_ID}
        className="site-menu"
        aria-label="Site navigation"
        onClose={() => setOpen(false)}
      >
        <div className="site-menu__header">
          <span>Navigation</span>
          <button ref={closeRef} type="button" className="menu-close" onClick={close}>
            <span aria-hidden="true">✕</span>
            <span className="screen-reader-only">Close menu</span>
          </button>
        </div>
        <nav aria-label="Mobile">
          <ul className="menu-list">
            {navigationRoutes.map((route) => (
              <li key={route.path}>
                <NavLink to={route.path} onClick={close}>
                  {route.index ? 'Home' : route.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </>
  );
};

export default Hamburger;
