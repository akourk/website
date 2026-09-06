import { NavLink, Link } from 'react-router';

import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';
import { navigationRoutes } from '../../data/routes';

const home = navigationRoutes.find((route) => route.index);
const navRoutes = navigationRoutes.filter((route) => !route.index);

// The masthead: name, role, and the routes from src/data/routes. Type only, and
// it scrolls away with the page rather than being pinned to the viewport.
const Masthead = () => (
  <header className="masthead">
    <div className="masthead__identity">
      <p className="masthead__name">
        <Link to={home?.path ?? '/'}>{home?.label ?? 'Alex Kourkoumelis'}</Link>
      </p>
      <span className="masthead__role">Lead Software Engineer</span>
    </div>

    <div className="masthead__controls">
      <ThemeToggle />
      <Hamburger />
    </div>

    {/* Its own row under the name, so the navigation has space to breathe. */}
    <nav className="masthead__nav" aria-label="Main">
      <ul>
        {navRoutes.map((route) => (
          <li key={route.label}>
            {/* NavLink sets aria-current, which the stylesheet marks with a rule. */}
            <NavLink to={route.path}>{route.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Masthead;
