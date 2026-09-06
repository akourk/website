import { NavLink, Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

const home = routes.find((route) => route.index);
const navRoutes = routes.filter((route) => !route.index);

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

    <Hamburger />
  </header>
);

export default Masthead;
