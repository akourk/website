import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';

import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';
import assetUrl from '../utils/assetUrl';

import markdown from '../data/about.md?raw';

const Index = () => (
  <Main
    fullPage
    description="Alex Kourkoumelis, Lead Software Engineer. Frontend development, React, and TypeScript, by way of coaching and philosophy."
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
        I’m a Lead Software Engineer at <a href="https://www.statefarm.com">State Farm</a>,
        where I lead frontend development for customer-facing life insurance
        applications. I work primarily with React and TypeScript, combining hands-on
        development with technical planning, code reviews, and mentoring.
      </p>
      <p>
        I enjoy planning and building new systems as much as improving existing ones.
        In both, I like understanding the problem, working through the tradeoffs, and
        helping the team find a practical way forward.
      </p>
      <p>
        I’m always open to new opportunities, especially in public health, the
        environment, and other work with a social impact. If you’re working on something
        interesting, <Link to="/contact">get in touch</Link>.
      </p>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <section aria-labelledby="personal-title">
        <h2 id="personal-title">At a glance</h2>
        <Personal />
      </section>
    </article>
  </Main>
);

export default Index;
