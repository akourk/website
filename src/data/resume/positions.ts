/** A job in the experience section. */
export interface Position {
  company: string;
  position: string;
  link: string;
  /** Free text, e.g. "October 2022 - Present". Not parsed. */
  daterange: string;
  previousRole?: string;
  description: string;
  points: string[];
}

const positions: Position[] = [
  {
    company: 'State Farm',
    position: 'Lead Software Engineer',
    link: 'https://www.statefarm.com',
    daterange: 'November 2024 - Present',
    previousRole: 'Previously Software Engineer II, October 2022 - November 2024',
    description: 'Lead frontend architecture for customer-facing life insurance applications, working with backend engineers and designers to modernize the tools customers use to manage their policies.',
    points: [
      'Own frontend architecture for two React applications supporting 10 life insurance policy types. Together, they handled approximately 128,000 user actions in August 2026.',
      'Consolidated transaction flows from two repositories into a shared structure that grew from four flows to nine. Designed API contracts with backend engineers, including endpoints that combine data from multiple services.',
      'Migrated both applications from Create React App to Vite and from React 18 to 19. In the 30-day windows before and after the Vite release, p75 page load fell about 40% while traffic roughly doubled.',
      'Led the TypeScript and corporate design-system migration for the policy-servicing application, released in August 2026.',
      'Rebuilt the beneficiary change flow through five design iterations informed by user research, adding support for estates, trusts, and organizations. Delivered digital claims flows covering initiation and processing.',
      'Set coding and review standards, built automated quality checks, and led accessibility fixes based on company audits.',
      'Mentor six engineers through design and code reviews. Interviewed at least ten candidates and onboarded four engineers.',
    ],
  },
  {
    company: 'Microsoft',
    position: 'Engineer I, Detection and Abuse Analysis',
    link: 'https://microsoft.com',
    daterange: 'November 2019 - October 2022',
    description: 'Monitored and investigated security, spam, and abuse signals across Microsoft platforms to protect algorithmic integrity and reduce system misuse.',
    points: [
      'Analyzed false-positive and false-negative cases and delivered structured feedback that helped tune detection models used across global services.',
      'Identified recurring abuse patterns and suggested detection improvements as new threats emerged.',
      'Led team review sessions for complex or ambiguous cases, helping the group reach consistent decisions.',
      'Maintained a high case throughput in a self-directed environment and was regularly recognized as a top performer.',
      'Built and maintained the onboarding program and trained every new hire.',
    ],
  },
  {
    company: 'WattTime',
    position: 'Software Engineer, Senior Capstone Project',
    link: 'https://www.watttime.org/',
    daterange: 'September 2019 - June 2020',
    description: 'Built emissions data collection tools and a dashboard for a nonprofit researching when and where electricity produces fewer emissions.',
    points: [
      'Reviewed reporting standards from balancing authorities in the US, Canada, Australia, and Taiwan to define requirements for automated data collection.',
      'Built Python scrapers that collected emissions data at fixed intervals and uploaded it to a SQL database with a consistent schema.',
      'Cleaned, normalized, and validated incoming emissions data.',
      'Built a React dashboard for exploring emissions trends by time and geography.',
    ],
  },
  {
    company: 'Bellevue College',
    position: 'Teaching Assistant',
    link: 'https://www.bellevuecollege.edu/',
    daterange: 'January 2019 - March 2019',
    description: 'Helped upper-division computer science students work through difficult concepts in individual and group sessions.',
    points: [
      'Supported upper-division CS courses by guiding students through challenging concepts in both 1:1 and group settings.',
      'Adapted instructional strategies to individual learning styles and provided targeted remediation for struggling students.',
      'Contributed feedback that helped instructors refine curricula and improve course clarity.',
    ],
  },
  {
    company: 'Lake Hills CrossFit',
    position: 'Certified Level 1 CrossFit Trainer',
    link: 'http://www.lakehillscrossfit.com/',
    daterange: 'August 2015 - May 2020',
    description: 'Helped grow a fitness business from start-up to profitability through coaching, client onboarding, and day-to-day operations.',
    points: [
      'Designed a structured multi-step client onboarding program that increased new-client conversion to 85%.',
      'Organized community events, competitions, and fundraisers that contributed to 75% member retention and overall business growth.',
      'Played an integral role in day-to-day operations, including programming, coaching, event planning, and business decisions during a period of ~300% annual growth.',
      'Fostered an inclusive and motivating training environment, contributing to the gym’s long-term success and community reputation.',
    ],
  },
];

export default positions;
