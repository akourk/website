import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';

import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';
import assetUrl from '../utils/assetUrl';

import markdown from '../data/about.md?raw';

const Index = () => (
  <Main
    fullPage
    description="Alex Kourkoumelis, Lead Software Engineer. Frontend architecture, React, and TypeScript, by way of coaching and philosophy."
  >
    <article className="page markdown" id="index">
      <header className="page__header home__header">
        <div>
          <h1 className="page__title" data-testid="heading">Hi, I’m Alex</h1>
          <p className="page__standfirst">
            I build software people rely on, and help teams make it easier to change.
          </p>
        </div>
        <img className="home__portrait" src={assetUrl('/images/me.jpg')} alt="Alex Kourkoumelis" width="296" height="296" />
        <div className="page__actions">
          <Link className="button" to="/projects">View projects</Link>
          <Link className="button button--quiet" to="/resume">Read my resume</Link>
        </div>
      </header>
      <p>
        I lead frontend architecture at <a href="https://www.statefarm.com">State Farm</a>,
        building the tools customers use to manage their insurance policies. My work
        centers on React and TypeScript, modernizing the frontend while keeping it
        connected to the systems people already depend on.
      </p>
      <p>
        I like working with existing systems. There’s a lot to learn from the decisions
        that came before, and I enjoy figuring out what to keep, what to change, and how
        to help the team work through it.
      </p>
      <p>
        I’m always open to new opportunities, especially in public health, the
        environment, and other work with a social impact. If you’re working on something
        interesting, <Link to="/contact">get in touch</Link>.
      </p>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <section aria-labelledby="numbers-title">
        <h2 id="numbers-title">By the numbers</h2>
        <Personal />
      </section>
    </article>
  </Main>
);

export default Index;
