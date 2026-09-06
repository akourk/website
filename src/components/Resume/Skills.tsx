import type { SkillGroup } from '../../data/resume/skills';

interface SkillsProps {
  data?: SkillGroup[];
}

// A definition list rather than a chart: the group is the term and the skills
// in it are the description. There is nothing to filter and nothing to rank, so
// there is no state here either.
const Skills = ({ data = [] }: SkillsProps) => (
  <section className="section" aria-labelledby="skills-title">
    <div className="section-anchor" id="skills" />
    <h2 className="section__title" id="skills-title">Skills</h2>
    <dl className="skill-groups">
      {data.map((group) => (
        <div className="skill-group" key={group.name}>
          <dt className="skill-group__name">{group.name}</dt>
          <dd className="skill-group__items">{group.items.join(', ')}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Skills;
