import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Alex Kourkoumelis's projects."
  >
    <article className="page page--wide" id="projects">
      <header className="page__header">
        <h1 className="page__title" data-testid="heading">Projects</h1>
        <p className="page__standfirst">
          Fewer than there used to be. Both of these are current, and the source is
          public for both.
        </p>
      </header>
      <ul className="project-list">
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </ul>
    </article>
  </Main>
);

export default Projects;
