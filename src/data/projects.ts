/** A project card on the projects page. */
export interface Project {
  title: string;
  /** One-line introduction shown under the title. */
  subtitle: string;
  /**
   * Path under public/, resolved against the deployment base by assetUrl.
   * Optional: a project with nothing worth showing gets a text card rather
   * than a placeholder.
   */
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  /** Posters are shown uncropped, with a link to the original image. */
  imageKind?: 'poster';
  /** ISO yyyy-mm-dd, formatted for display with dayjs. */
  date?: string;
  /** Used instead of a date for ongoing projects. */
  dateLabel?: string;
  desc: string;
  /** Optional context before the account of Alex's contribution. */
  context?: string;
  technologies: string[];
  /** Absent while a project has nowhere public to link to. */
  link?: string;
  linkLabel?: string;
  /** Optional internal route with a fuller account of the engineering work. */
  caseStudy?: string;
  /** Shown as a second link beside the title when the source is public. */
  source?: string;
}

const data: Project[] = [
  {
    title: 'finledger',
    subtitle: 'A multi-broker portfolio tracker that runs entirely on your own machine.',
    image: '/images/projects/finledger.png',
    imageAlt: 'Fictional finledger portfolio showing balances, reconciliation status, and a history chart.',
    imageWidth: 1440,
    imageHeight: 1100,
    dateLabel: 'Ongoing',
    link: 'https://akourk.github.io/finledger/',
    source: 'https://github.com/akourk/finledger',
    caseStudy: '/projects/finledger',
    technologies: ['Python', 'JavaScript', 'pytest'],
    desc:
      'I built a Python pipeline that combines broker CSV exports into one ledger '
      + 'and a JavaScript dashboard that opens locally. It tracks cost basis and '
      + 'tax lots, with checks against figures you supply from broker statements. '
      + 'The public demo uses fictional data.',
  },
  {
    title: 'WattTime',
    subtitle: 'Making grid emissions data easier to collect, compare, and understand.',
    image: '/images/projects/WattTimePoster.png',
    imageAlt: 'Energy Emissions Dashboard capstone poster showing the data collection pipeline, Python server, and React dashboard.',
    imageWidth: 1698,
    imageHeight: 1271,
    imageKind: 'poster',
    date: '2020-06-01',
    link: 'https://www.watttime.org/',
    linkLabel: 'About WattTime',
    technologies: ['Python', 'React', 'SQL'],
    context:
      'Electricity emissions change by location and time of day. WattTime uses '
      + 'grid data to help devices such as smart chargers shift electricity use '
      + 'to cleaner times.',
    desc:
      'For my senior capstone at Bellevue College, I built a Python data pipeline '
      + 'and a React dashboard for WattTime. I researched reporting standards '
      + 'across the US, Canada, Australia, and Taiwan, then collected, normalized, '
      + 'and validated grid reports in a shared SQL database. The dashboard made '
      + 'it possible to explore emissions by time and geography.',
  },
  {
    title: 'This website',
    subtitle: 'The site you are reading, with its own design, build, and accessibility tests.',
    dateLabel: 'Ongoing',
    source: 'https://github.com/akourk/website',
    technologies: ['React', 'TypeScript', 'Vite'],
    desc:
      'A personal site hosted on GitHub Pages. Each page arrives as static HTML, '
      + 'so content and navigation work before JavaScript loads. Light and dark '
      + 'themes follow your preference. Automated checks cover accessibility, '
      + 'color contrast, and routing.',
  },
];

export default data;
