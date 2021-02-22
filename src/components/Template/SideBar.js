import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Michael D&apos;Angelo</h2>
        <p><a href="mailto:akourk@icloud.com">akourk@icloud.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Alex. I like building things.
        I am a <a href="https://www.bellevuecollege.edu/">Bellevue College</a> graduate, and
        <a href="https://www.evergreen.edu/">a Evergreen State College</a> graduate. Before CS
        I was a CrossFit Coach.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alex Kourkoumelis <Link to="/">kourk.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
