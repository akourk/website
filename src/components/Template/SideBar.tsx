import { Link, useLocation } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import assetUrl from '../../utils/assetUrl';

const SideBar = () => {
  // Read the route from the router, not from window: this component is also
  // rendered by the prerenderer, where there is no window.
  const { pathname } = useLocation();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={assetUrl('/images/me.jpg')} alt="" />
        </Link>
        <header>
          <h2>Alex Kourkoumelis</h2>
          <p><a href="mailto:akourk@icloud.com">akourk@icloud.com</a></p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>Hi, I&apos;m Alex. I like taking on challenging new projects, learning, and building.
          I am a <a href="https://www.bellevuecollege.edu/">Bellevue College</a> Computer Science and <a href="https://www.evergreen.edu/">Evergreen State College</a> Philosophy graduate. Before Computer Science I was a CrossFit Coach.
        </p>
        <ul className="actions">
          <li>
            {!pathname.startsWith('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy; Alex Kourkoumelis <Link to="/">https://akourk.github.io/website/</Link>.</p>
      </section>
    </section>
  );
};

export default SideBar;
