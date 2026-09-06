import { NavLink, Link } from 'react-router';

import ContactIcons from '../Contact/ContactIcons';
import assetUrl from '../../utils/assetUrl';
import { navigationRoutes } from '../../data/routes';

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
          {/* The file's own dimensions, so the box reserved before it loads is the
              shape it actually arrives in. */}
          <img src={assetUrl('/images/me.jpg')} alt="Alex Kourkoumelis" width="296" height="296" />
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
        {navigationRoutes.map((route) => (
          <li key={route.label}>
            <NavLink to={route.path}>{route.index ? 'Home' : route.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>

    {/*
      The resume page drops the bio card, so a project mentioned only there
      would be missing from the one page a recruiter is most likely to open.
      This sits with the colophon instead, which every page carries.
    */}
    <p className="footer-elsewhere">
      Also on GitHub:{' '}
      <a href="https://github.com/akourk/finledger">finledger</a>, a multi-broker
      portfolio tracker, with a{' '}
      <a href="https://akourk.github.io/finledger/">live demo</a>.
    </p>

    <p className="colophon">
      &copy; {new Date().getFullYear()} Alex Kourkoumelis.{' '}
      <Link to="/">akourk.github.io/website</Link>.{' '}
      <a href="https://github.com/akourk/website">Source on GitHub</a>, built on a template
      by <a href="https://github.com/mldangelo/personal-site">mldangelo</a>.
    </p>
  </footer>
);

export default SiteFooter;
