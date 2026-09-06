import type { Category, Skill } from '../../../data/resume/skills';

interface SkillBarProps {
  data: Skill;
  categories?: Category[];
}

const MAX_COMPETENCY = 5;

const SkillBar = ({ data, categories = [] }: SkillBarProps) => {
  const { category, competency, title } = data;

  // A skill can sit in several categories; the first one after sorting decides
  // the colour, so the same skill always draws the same.
  const color = categories
    .filter((cat) => category.includes(cat.name))
    .map((cat) => cat.color)[0];

  const width = `${String(Math.min(100, Math.max((competency / MAX_COMPETENCY) * 100, 0)))}%`;

  return (
    <li className="skill">
      <div className="skill__label">
        <span className="skill__name">{title}</span>
        <span className="skill__rating">{competency} of {MAX_COMPETENCY}</span>
      </div>
      {/*
        The bar restates the rating the text beside it already gives, and does it
        with colour and length alone. Hiding it keeps the chart from being read
        out twice and keeps the meaning in the text.
      */}
      <div className="skill__track" aria-hidden="true">
        <span className="skill__fill" style={{ background: color, width }} />
      </div>
    </li>
  );
};

export default SkillBar;
