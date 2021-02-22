import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact me via email @ akourk@icloud.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Please don&apos;t hesitate to email me at:</p>
        <p><a href="mailto:akourk@icloud.com">akourk@icloud.com</a></p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
