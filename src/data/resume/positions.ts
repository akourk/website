/** A job in the experience section. */
export interface Position {
  company: string;
  position: string;
  link: string;
  /** Free text, e.g. "October 2022 - Present". Not parsed. */
  daterange: string;
  description: string;
  points: string[];
}

const positions: Position[] = [
  {
    company: 'State Farm',
    position: 'Lead Software Engineer',
    link: 'https://www.statefarm.com',
    daterange: 'October 2022 - Present',
    description: 'Lead frontend architecture and cross-team delivery for customer-facing policy servicing at a Fortune 50 insurer, and work on the incremental replacement of the mainframe underneath it.',
    points: [
      'Own the frontend architecture for 11 customer-facing policy servicing flows in React, TypeScript, and Redux, spanning policy overview, beneficiary changes, disbursements, payments, and claims. Together they serve around 128,000 user actions a month.',
      'Shipped support for 10 life insurance policy types across those flows one product line at a time rather than as a single cutover.',
      'Designed the REST API contract surface for both applications with the backend team, roughly 30 distinct gateway paths, about half of which aggregate multiple backend services behind one endpoint.',
      'Wrote the engineering standards for every frontend repository: lint rules, folder and file conventions, component structure, review requirements, and CI/CD pipelines.',
      'Made the architectural decision to consolidate transaction flows into a single loosely coupled repository, taking the codebase from four flows across two repositories to nine in one. The consolidation touched 54 files in a single change.',
      'Led a sustained modernization of the frontend platform: Vite, Docker, major React upgrades, class to functional component conversion, and a rebuilt CI/CD pipeline.',
      'Built out a 5-stage, 40-job delivery pipeline covering formatting, linting, type safety, testing, and accessibility, running 5,430 test cases at 97.14% coverage.',
      'Led the accessibility initiative bringing customer-facing flows to WCAG conformance, moving checks left into a pre-commit hook and the build pipeline rather than a pre-launch audit.',
      'Rebuilt the beneficiary change flow across five design iterations driven by user research, extending it to handle estates, multiple trust types, children class, UTMA/UGMA, and organizational beneficiaries.',
      'Delivered the digital claims experience end to end, covering both claim initiation and claim processing.',
      'Mentor and run design and code reviews for 6 engineers. Interviewed 10+ candidates and onboarded 4, with a fifth starting.',
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
      'Built and maintained comprehensive onboarding programming and responsible for training all new hires.',
    ],
  },
  {
    company: 'WattTime',
    position: 'Software Engineer, Senior Capstone Project',
    link: 'https://www.watttime.org/',
    daterange: 'September 2019 - June 2020',
    description: 'Built automated carbon emissions data acquisition tools to form a global database to assist in time-based and geography-based “curving” of emissions to reduce carbon footprint.',
    points: [
      'Reviewed reporting standards from 20+ global balancing authorities to define requirements for automated data collection.',
      'Built custom Python scrapers that gathered emissions data in fixed intervals and uploaded into a centralized SQL database with a consistent schema.',
      'Cleaned, normalized, and validated incoming data to ensure research-grade accuracy and reliability.',
      'Built a React-based data-visualization dashboard enabling users to explore emissions trends by time and geography and see their real-world carbon impact.',
    ],
  },
  {
    company: 'Bellevue College',
    position: 'Teaching Assistant',
    link: 'https://www.bellevuecollege.edu/',
    daterange: 'January 2019 - March 2019',
    description: 'Motivated and enthusiastic Teaching Assistant for high-level CS courses, providing careful attention to students struggling with difficult concepts.',
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
    description: 'Successfully aided in growing a small fitness business from start-up to profitability through innovating business strategies, fostering a welcoming community, and providing top level coaching.',
    points: [
      'Designed a structured multi-step client onboarding program that increased new-client conversion to 85%.',
      'Organized community events, competitions, and fundraisers that contributed to 75% member retention and overall business growth.',
      'Played an integral role in day-to-day operations, including programming, coaching, event planning, and business decisions during a period of ~300% annual growth.',
      'Fostered an inclusive and motivating training environment, contributing to the gym’s long-term success and community reputation.',
    ],
  },
];

export default positions;
