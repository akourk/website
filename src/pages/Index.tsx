import { Link } from 'react-router';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    fullPage
    description="Alex Kourkoumelis, Lead Software Engineer. Frontend architecture, React, TypeScript, and modernizing customer-facing software."
  >
    <article className="page" id="index">
      <header className="page__header">
        <h1 className="page__title" data-testid="heading">Lead Software Engineer</h1>
        <p className="page__standfirst">
          I build software people rely on, and help teams make it easier to change.
        </p>
        <div className="page__actions">
          <Link className="button" to="/projects">View projects</Link>
          <Link className="button button--quiet" to="/resume">Read my resume</Link>
        </div>
      </header>
      <p>
        I&apos;m Alex. I lead frontend architecture at{' '}
        <a href="https://www.statefarm.com">State Farm</a>, building the tools customers
        use to manage their insurance policies. My work centers on React and TypeScript,
        modernizing the frontend while keeping it connected to the systems people
        already depend on.
      </p>
      <p>
        I like working with existing systems. There&apos;s a lot to learn from the decisions
        that came before, and I enjoy figuring out what to keep, what to change, and how
        to help the team work through it.
      </p>
      <p>
        Earlier, I worked on detection and abuse analysis at{' '}
        <a href="https://microsoft.com">Microsoft</a> and built emissions data pipelines
        for <a href="https://www.watttime.org/">WattTime</a> during my computer science
        capstone. Before software, I studied philosophy and coached athletes. Teaching
        people and working through difficult problems have been part of every job.
      </p>
      <p>
        There&apos;s more about that path on my <Link to="/about">About page</Link>.
        If you&apos;re working on something interesting, <Link to="/contact">get in touch</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
