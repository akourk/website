import Main from '../layouts/Main';
import assetUrl from '../utils/assetUrl';
import { revealHashTarget } from '../utils/hashTarget';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import skillGroups from '../data/resume/skills';

const sections = [
  'Experience',
  'Skills',
  'Education',
  'Courses',
];

const Resume = () => (
  <Main
    title="Resume"
    fullPage
    description="Alex Kourkoumelis, Lead Software Engineer. Experience, skills, and education."
  >
    <article className="page page--wide" id="resume">
      <header className="resume__header">
        <div>
          <h1 className="page__title" data-testid="heading">Resume</h1>
          {/*
            A table of contents, not headings. As <h4> under the page's <h1> it
            skipped two levels for no reason.
          */}
          <nav className="resume__toc" aria-label="Resume sections">
            <ul>
              {sections.map((sec) => (
                <li key={sec}>
                  <a
                    href={`#${sec.toLowerCase()}`}
                    onClick={() => { revealHashTarget(`#${sec.toLowerCase()}`); }}
                  >
                    {sec}
                  </a>
                </li>))}
            </ul>
          </nav>
        </div>
        <a
          href={assetUrl('/AlexKourkoumelisResume.pdf')}
          download="AlexKourkoumelisResume.pdf"
          className="button"
        >
          Download PDF
        </a>
      </header>
      <Experience data={positions} />
      <Skills data={skillGroups} />
      <Education data={degrees} />
      <Courses data={courses} />
    </article>
  </Main>
);

export default Resume;
