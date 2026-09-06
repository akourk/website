import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';

import markdown from '../data/about.md?raw';

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

const About = () => (
  <Main
    title="About"
    description="How a philosophy degree, fifteen years of coaching, and a hand-me-down computer led to software engineering."
  >
    <article className="page markdown" id="about">
      <header className="page__header">
        <h1 className="page__title" data-testid="heading">About Me</h1>
        <p className="page__standfirst">In about {count} words.</p>
      </header>
      <ReactMarkdown
        source={markdown}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default About;
