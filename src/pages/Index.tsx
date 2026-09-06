import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'Alex Kourkoumelis, Lead Software Engineer. React, TypeScript, and the '
    + 'incremental replacement of a mainframe that cannot go down.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Lead Software Engineer</Link></h2>
          <p>
            I take high-stakes systems people are afraid to touch,
            and make them safe to change.
          </p>
        </div>
      </header>
      <p>
        I&apos;m Alex. I lead frontend architecture at{' '}
        <a href="https://www.statefarm.com">State Farm</a>, where my team owns the flows
        customers use to manage their own insurance policies. Underneath those flows sits a
        COBOL mainframe that has been running for decades and can&apos;t go down, so the work
        is really two jobs at once. Build good React and TypeScript on top. Replace the thing
        underneath it one piece at a time, without anyone noticing a seam.
      </p>
      <p>
        I like this kind of problem more than greenfield. Starting from nothing is rare.
        Most engineering is inheriting something that already works, that people already
        depend on, and finding a way to change it anyway.
      </p>
      <p>
        Before this I was an Engineer I at <a href="https://microsoft.com">Microsoft</a>,
        working on abuse and detection signals at platform scale, and I built carbon emissions
        data pipelines for a non-profit called <a href="https://www.watttime.org/">WattTime</a>.
        Before software I coached athletes for fifteen years and took a philosophy degree.
        It&apos;s a strange way to arrive at engineering leadership. It has also been more
        useful than it sounds.
      </p>
      <p>
        Have a look at my <Link to="/resume">resume</Link>, the{' '}
        <Link to="/projects">things I&apos;ve built</Link>, or more{' '}
        <Link to="/about">about me</Link>. If you&apos;re working on something interesting,{' '}
        <Link to="/contact">get in touch</Link>.
      </p>
      <p className="index-colophon">
        <small>
          Source for this site is <a href="https://github.com/akourk/website">on GitHub</a>,
          built on a template by <a href="https://github.com/mldangelo/personal-site">mldangelo</a>.
        </small>
      </p>
    </article>
  </Main>
);

export default Index;
