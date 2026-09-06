/**
 * The skills section of the resume.
 *
 * This was a chart. Every skill carried a competency from 1 to 5 that Alex had
 * assigned himself, and the page printed the scale so a reader knew what each
 * number was supposed to mean. A self-awarded score is not evidence of
 * anything, and it starts the one argument that cannot be won in an interview:
 * the reader either disagrees with the number or asks what the missing point
 * would take. Grouping makes the same claim without handing anyone a number to
 * dispute.
 *
 * Two things follow from dropping the scale, and both are deliberate.
 *
 * The first is that "Also used" now carries the hedge the low ratings used to.
 * Flask was rated 1, "very limited exposure", and briefly sat beside Java and
 * Python here, which read as a promotion it had not earned. It belongs at the
 * bottom with the rest of the things worth mentioning and not worth leading on.
 *
 * The second is that a group name is the only signal left, so a name that
 * undersells is as wrong as one that oversells. Security and threat analysis
 * was three years of employment at Microsoft, not something picked up in
 * passing, so it sits in a working group rather than under "Also used".
 */

/** A named group of skills. One row of the list on the resume page. */
export interface SkillGroup {
  name: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    name: 'Engineering leadership',
    items: [
      'Frontend architecture',
      'API contract design',
      'engineering standards',
      'design systems',
      'modernization planning',
      'accessibility',
      'automated testing',
      'AI-assisted engineering',
      'design and code review',
      'mentoring',
      'interviewing and onboarding',
    ],
  },
  {
    name: 'Frontend',
    items: [
      'TypeScript',
      'JavaScript',
      'React',
      'Redux',
      'Next.js',
      'HTML and CSS',
      'Vite',
      'Vitest',
      'Testing Library',
    ],
  },
  {
    name: 'Backend, data, and analysis',
    items: [
      'Java',
      'Spring',
      'Python',
      'Node.js',
      'REST APIs',
      'SQL',
      'pytest',
      'NumPy',
      'Pandas',
      'Jupyter',
      'security and threat analysis',
    ],
  },
  {
    name: 'Infrastructure and delivery',
    items: [
      'AWS',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Git',
      'Bash',
      'Microservices',
      'Agile and Scrum',
    ],
  },
  {
    name: 'Also used',
    items: [
      'C',
      'C++',
      'C#',
      'R',
      'Flask',
      'machine learning',
    ],
  },
];

export default skillGroups;
