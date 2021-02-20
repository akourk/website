import React from 'react';
import { Link } from 'react-router-dom';

//import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
    <section id="sidebar">
        <section id="intro">
            <Link to="/" className="logo">
                <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
            </Link>
            <header>
                <h2>Alex Kourkoumelis</h2>
                <p><a href="mailto:shtufff@gmail.com">shtufff@gmail.com</a></p>
            </header>
        </section>

        <section className="blurb">
            <h2>About</h2>
            <p>My name is Alex Kourkoumelis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
            </p>
            <ul className="actions">
                <li>
                    {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
                </li>
            </ul>
        </section>

        <section id="footer">
            <ContactIcons />
            <p className="copyright">&copy; Alex Kourkoumelis <Link to="/">https://akourk.github.io/website/</Link>.</p>
        </section>
    </section>
);

export default SideBar;