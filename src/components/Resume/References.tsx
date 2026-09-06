import { Link } from 'react-router-dom';

const References = () => (
  <section className="section references" aria-labelledby="references-title">
    <div className="section-anchor" id="references" />
    <h2 className="section__title" id="references-title">References</h2>
    <p>
      References are available <Link to="/contact">on request</Link>.
    </p>
  </section>
);

export default References;
