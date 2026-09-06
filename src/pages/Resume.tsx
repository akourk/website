import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import assetUrl from '../utils/assetUrl';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { levels, skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Alex Kourkoumelis, Lead Software Engineer. Experience, skills, and education."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/resume">Resume</Link></h2>
          {/*
            These were <h4> elements directly under the page's <h2>, which skips
            a heading level. They are a table of contents, so they are marked up
            as one.
          */}
          <nav className="link-container" aria-label="Resume sections">
            <ul>
              {sections.map((sec) => (
                <li key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
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
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} levels={levels} />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;
