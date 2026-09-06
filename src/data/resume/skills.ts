// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?
// soft skills?

/**
 * How well a skill is known, 1 to 5. The meaning of each number is spelled out
 * in `levels` below and rendered above the chart on the resume page, so the
 * numbers are part of the site's content, not an internal scale.
 */
export type Competency = 1 | 2 | 3 | 4 | 5;

/**
 * The categories a skill can be filed under. Closed on purpose: the filter
 * buttons and the chart's colour assignment are both derived from this set, so
 * a typo in a skill's category would silently create a new filter button.
 */
export type SkillCategory =
  | 'Data Engineering'
  | 'Data Science'
  | 'Databases'
  | 'Java'
  | 'Javascript'
  | 'Languages'
  | 'Project Management'
  | 'Python'
  | 'Security'
  | 'Tools'
  | 'Web Development';

/** One rung of the competency scale, as described to the reader. */
export interface Level {
  level: Competency;
  title: string;
  description: string;
}

/** A skill and its bar in the resume chart. */
export interface Skill {
  title: string;
  competency: Competency;
  /** At least one category. The first one after sorting picks the bar colour. */
  category: SkillCategory[];
}

/** A category with the colour its bars are drawn in. */
export interface Category {
  name: SkillCategory;
  color: string;
}

const levels: Level[] = [
  {
    level: 1,
    title: 'Very Limited Exposure',
    description: 'This is just a baseline - I have only used the technology in a very limited capacity.',
  },
  {
    level: 2,
    title: 'Limited Exposure',
    description: 'I have used it before, either briefly or in a limited capacity, but am somewhat familiar.',
  },
  {
    level: 3,
    title: 'Significant Exposure',
    description: 'I have used it either academically or for a non-trivial project, but may not be familiar with more advanced features.',
  },
  {
    level: 4,
    title: 'Proficiency',
    description: 'I have used it almost daily for at least 6 months, either academically or for work/personal projects.',
  },
  {
    level: 5,
    title: 'Mastery',
    description: 'I am reserving this level for skills I have honed to near perfection; hopefully more to come soon!',
  },
];

const declaredSkills: Skill[] = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Redux',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'SQL',
    competency: 2,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'ElasticSearch',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Data Mining',
    competency: 1,
    category: ['Data Science'],
  },
  {
    title: 'Flask',
    competency: 1,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'NumPy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Pandas',
    competency: 2,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'C',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'C#',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Machine learning',
    competency: 1,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Spring Framework',
    competency: 3,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Microservices Architecture',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'CI/CD',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Security/Threat Analysis',
    competency: 3,
    category: ['Security', 'Tools'],
  },
  {
    title: 'Docker/Kubernetes',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'REST APIs',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Agile/Scrum',
    competency: 4,
    category: ['Tools', 'Project Management'],
  },
];

// Each skill's categories are sorted so the first one, which decides the bar's
// colour, does not depend on the order they happen to be written in above.
const skills: Skill[] = declaredSkills.map((skill) => ({
  ...skill,
  category: [...skill.category].sort(),
}));

// One colour per category, in the same order the sorted categories come out in.
// Nothing is written on these bars, so what matters is that each is visible
// against the track it sits on, in both themes: WCAG 1.4.11's 3:1 for non-text.
// That is a narrower band than it sounds, since the track is near-white in one
// theme and near-black in the other. Each keeps the hue it started with and
// takes the lightness that maximises the worse of the two ratios, which lands
// them all around 3.8:1 either way. src/test/Contrast.test.ts checks it.
const colors: string[] = [
  '#7372b8',
  '#097fc2',
  '#6c7c84',
  '#6570d9',
  '#db4242',
  '#be5877',
  '#1e7dca',
  '#c95451',
  '#d34949',
  '#5b68ff',
  '#2f8a43',
];

const categories: Category[] = [
  ...new Set(skills.reduce<SkillCategory[]>((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { levels, categories, skills };
