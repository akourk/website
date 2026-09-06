import { NavLink, Link } from 'react-router';

import ContactIcons from '../Contact/ContactIcons';
import assetUrl from '../../utils/assetUrl';
import routes from '../../data/routes';

interface SiteFooterProps {
  /** The bio card is dropped on pages that are already about Alex. */
  showBio?: boolean;
}

// Everything the old right-hand sidebar carried, moved to the end of the page as
// an author card. Same content, no column of chrome beside every article.
const SiteFooter = ({ showBio = true }: SiteFooterProps) => (
  <footer className="site-footer">
    {showBio && (
      <div className="bio">
        <div className="bio__portrait">
          <img src={assetUrl('/images/me.jpg')} alt="Alex Kourkoumelis" width="208" height="208" />
        </div>
        <div>
          <h2 className="bio__name">Alex Kourkoumelis</h2>
          <p className="bio__text">
            I lead frontend architecture at State Farm. Before software I coached athletes for
            fifteen years and took a philosophy degree at{' '}
            <a href="https://www.evergreen.edu/">Evergreen State College</a>, then a computer
            science degree at{' '}
            <a href="https://www.bellevuecollege.edu/">Bellevue College</a>.
          </p>
          <p className="bio__text">
            <a href="mailto:akourk@icloud.com">akourk@icloud.com</a>
          </p>
          <ContactIcons />
        </div>
      </div>
    )}

    <nav className="footer-nav" aria-label="Footer">
      <ul>
        {routes.map((route) => (
          <li key={route.label}>
            <NavLink to={route.path}>{route.index ? 'Home' : route.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>

    <p className="colophon">
      &copy; {new Date().getFullYear()} Alex Kourkoumelis.{' '}
      <Link to="/">akourk.github.io/website</Link>.{' '}
      <a href="https://github.com/akourk/website">Source on GitHub</a>, built on a template
      by <a href="https://github.com/mldangelo/personal-site">mldangelo</a>.
    </p>
  </footer>
);

export default SiteFooter;
