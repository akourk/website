import type { Position } from '../../../data/resume/positions';

interface JobProps {
  data: Position;
}

const Job = ({ data }: JobProps) => (
  <article className="entry">
    <h3 className="entry__title">
      <a href={data.link}>{data.company}</a>, {data.position}
    </h3>
    <p className="entry__meta">{data.daterange}</p>
    {data.previousRole && <p className="entry__progression">{data.previousRole}</p>}
    <p className="entry__summary">{data.description}</p>
    <ul className="entry__points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

export default Job;
