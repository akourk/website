import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Alex Kourkoumelis."
  >
    <article className="page" id="stats">
      <header className="page__header">
        <h1 className="page__title" data-testid="heading">Stats</h1>
        <p className="page__standfirst">A few numbers, some of them ticking.</p>
      </header>
      <Personal />
    </article>
  </Main>
);

export default Stats;
