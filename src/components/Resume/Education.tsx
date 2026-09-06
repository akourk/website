import Degree from './Education/Degree';
import type { Degree as DegreeData } from '../../data/resume/degrees';

interface EducationProps {
  data?: DegreeData[];
}

const Education = ({ data = [] }: EducationProps) => (
  <section className="section" aria-labelledby="education-title">
    <div className="section-anchor" id="education" />
    <h2 className="section__title" id="education-title">Education</h2>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </section>
);

export default Education;
