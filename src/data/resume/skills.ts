/**
 * The skills section of the resume.
 *
 * This was a chart. Every skill carried a competency from 1 to 5 that Alex had
 * assigned himself, and the page printed the scale above it so a reader knew
 * what each number was supposed to mean. The trouble with a self-awarded score
 * is that it is not evidence of anything, and it starts the one argument that
 * cannot be won in an interview: the reader either disagrees with the number or
 * asks what the missing point would take. Grouping makes the same claim without
 * handing anyone a number to dispute.
 *
 * Nothing here is new. Every entry below was already on the page under the old
 * chart, so removing the scale did not quietly promote anything. What the chart
 * rated 1 or 2 sits under "Also used", which is where it honestly belongs once
 * there is no scale left to say so.
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
      'modernization planning',
      'accessibility',
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
      'HTML and CSS',
    ],
  },
  {
    name: 'Backend and data',
    items: [
      'Java',
      'Spring',
      'Python',
      'Node.js',
      'REST APIs',
      'SQL',
      'Flask',
      'NumPy',
      'Pandas',
      'Jupyter',
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
      'ElasticSearch',
      'data mining',
      'machine learning',
      'security and threat analysis',
    ],
  },
];

export default skillGroups;
