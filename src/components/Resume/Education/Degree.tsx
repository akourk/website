import type { Degree as DegreeData } from '../../../data/resume/degrees';

interface DegreeProps {
  data: DegreeData;
}

const Degree = ({ data }: DegreeProps) => (
  <article className="entry">
    <h3 className="entry__title">{data.degree}</h3>
    <p className="entry__meta">
      <a href={data.link}>{data.school}</a>, {data.year}
    </p>
  </article>
);

export default Degree;
