import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';

import Main from '../layouts/Main';
import assetUrl from '../utils/assetUrl';

import markdown from '../data/about.md?raw';

const About = () => (
  <Main
    fullPage
    title="About"
    description="How coaching, philosophy, and curiosity led Alex Kourkoumelis to software engineering."
  >
    <article className="page markdown" id="about">
      <header className="page__header about__header">
        <div>
          <h1 className="page__title" data-testid="heading">About Me</h1>
          <p className="page__standfirst">How coaching, philosophy, and curiosity led me to software.</p>
        </div>
        <img className="about__portrait" src={assetUrl('/images/me.jpg')} alt="Alex Kourkoumelis" width="296" height="296" />
      </header>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <p>
        For the professional details, see my <Link to="/resume">resume</Link>. You can
        also <Link to="/contact">get in touch</Link> or take a look at a few{' '}
        <Link to="/stats">personal stats</Link>.
      </p>
    </article>
  </Main>
);

export default About;
