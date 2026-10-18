/** A job in the experience section. */
export interface Position {
  company: string;
  position: string;
  link: string;
  /** Free text, e.g. "October 2022 – Present". Not parsed. */
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
    daterange: 'November 2024 – Present',
    previousRole: 'Previously Software Engineer II, October 2022 – November 2024',
    description: 'Lead frontend development for customer-facing life insurance applications covering policy servicing and digital claims across 10 policy types. The applications handle roughly 128,000 user actions per month.',
    points: [
      'Led frontend delivery of an in-house beneficiary change experience to replace an off-site vendor flow that required caseworkers to re-enter customer submissions. Shipped simpler changes first to reduce manual handling, then expanded support to estates, trusts, and organizations until the team could retire the vendor contract. Refined the flow through five design iterations informed by user research.',
      'Migrated both applications from Create React App to Vite and from React 18 to 19. Observed about 40% lower p75 page load in the 30 days after the Vite release compared with the preceding 30 days.',
      'Mentor six engineers through design and code reviews. Interviewed at least ten candidates and onboarded four engineers.',
      'Consolidated four transaction flows from two repositories into one shared structure, which has since grown to nine flows.',
      'Led the TypeScript and corporate design-system migration for the policy-servicing application, released in August 2026.',
      'Built automated checks for types, unit and contract tests, and design-system compatibility. Led accessibility fixes from company audits and added earlier checks in pre-commit hooks and the build pipeline.',
      'Helped plan AI rollout across State Farm Engineering and Technology, starting with GitHub Copilot and expanding to ChatGPT, Codex, Claude, and MCP servers. Co-developed AGENTS.md project guidance and reusable agent skills, and trained engineers to apply them and establish guardrails for AI-assisted development. Supported adoption through documentation and presentations.',
      'Designed API contracts with backend engineers, including endpoints that combine data from multiple services.',
    ],
  },
  {
    company: 'Microsoft',
    position: 'Engineer I, Detection and Abuse Analysis',
    link: 'https://microsoft.com',
    daterange: 'November 2019 – October 2022',
    description: 'Investigated security, spam, and abuse signals across Microsoft platforms and shared findings with the teams improving detection.',
    points: [
      'Analyzed false positives, missed detections, and emerging abuse patterns. Shared findings with architects to help refine detection algorithms.',
      'Led team reviews of difficult or ambiguous cases to help the group make consistent decisions.',
      'Built and maintained the onboarding program and trained every new hire.',
    ],
  },
  {
    company: 'WattTime',
    position: 'Software Engineer, Senior Capstone Project',
    link: 'https://www.watttime.org/',
    daterange: 'September 2019 – June 2020',
    description: 'Built emissions data collection tools and a dashboard for a nonprofit researching when and where electricity produces fewer emissions.',
    points: [
      'Reviewed reporting standards from balancing authorities in the US, Canada, Australia, and Taiwan to define requirements for automated data collection.',
      'Built Python scrapers to collect emissions data at regular intervals, normalize and validate it, and store it in a shared SQL database.',
      'Built a React dashboard for exploring emissions trends by time and geography.',
    ],
  },
  {
    company: 'Bellevue College',
    position: 'Teaching Assistant',
    link: 'https://www.bellevuecollege.edu/',
    daterange: 'January 2019 – March 2019',
    description: 'Supported students and instructors in upper-division computer science courses.',
    points: [
      'Worked with students one-on-one and in groups, adjusting explanations to how each student learned.',
      'Shared feedback with instructors to help clarify course material.',
    ],
  },
  {
    company: 'Lake Hills CrossFit',
    position: 'Certified Level 1 CrossFit Trainer',
    link: 'http://www.lakehillscrossfit.com/',
    daterange: 'August 2015 – May 2020',
    description: 'Helped grow a fitness business from start-up to profitability through coaching, client onboarding, and day-to-day operations.',
    points: [
      'Designed a client onboarding program with an 85% new-client contract rate.',
      'Organized competitions, fundraisers, and community events that contributed to 75% client retention.',
      'Coached classes, planned training programs, and helped make day-to-day business decisions as the gym grew.',
    ],
  },
];

export default positions;
