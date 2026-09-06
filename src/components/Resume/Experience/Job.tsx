
import type { Position } from '../../../data/resume/positions';

interface JobProps {
  data: Position;
}

const Job = ({ data }: JobProps) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.company}</a> - {data.position}</h4>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <p className="description"> {data.description}</p>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

export default Job;
