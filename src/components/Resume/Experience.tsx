import Job from './Experience/Job';
import type { Position } from '../../data/resume/positions';

interface ExperienceProps {
  data?: Position[];
}

const Experience = ({ data = [] }: ExperienceProps) => (
  <section className="section" aria-labelledby="experience-title">
    <div className="section-anchor" id="experience" />
    <h2 className="section__title" id="experience-title">Experience</h2>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </section>
);

export default Experience;
