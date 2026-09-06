
import type { Degree as DegreeData } from '../../../data/resume/degrees';

interface DegreeProps {
  data: DegreeData;
}

const Degree = ({ data }: DegreeProps) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school"><a href={data.link}>{data.school}</a>, {data.year}</p>
    </header>
  </article>
);

export default Degree;
