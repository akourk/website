import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Explore Alex Kourkoumelis's projects, including finledger, with live demos and source code."
  >
    <article className="page page--wide" id="projects">
      <header className="page__header">
        <h1 className="page__title" data-testid="heading">Projects</h1>
        <p className="page__standfirst">
          Selected projects, with live demos and source code.
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
