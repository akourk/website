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
  date: string;
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
    date: '2026-09-06',
    link: 'https://akourk.github.io/finledger/',
    source: 'https://github.com/akourk/finledger',
    caseStudy: '/projects/finledger',
    technologies: ['Python', 'JavaScript', 'pytest'],
    desc:
      'Turn broker CSV exports into a portfolio dashboard you can open locally. '
      + 'It combines transactions across nine broker formats, removes duplicates, '
      + 'and tracks cost basis and tax lots, with reconciliation against broker '
      + 'tax statements. About 1,500 tests check the calculations and imports. '
      + 'The demo uses fictional data. You can also open your own exported snapshot '
      + 'in the demo, and it never leaves your browser.',
  },
  {
    title: 'This website',
    subtitle: 'The site you are reading, with its own design, build, and accessibility tests.',
    date: '2026-09-06',
    link: 'https://akourk.github.io/website/',
    source: 'https://github.com/akourk/website',
    linkLabel: 'Visit site',
    technologies: ['React', 'TypeScript', 'Vite'],
    desc:
      'A personal site hosted on GitHub Pages. Each page arrives as static HTML, '
      + 'so content and navigation work before JavaScript loads. Light and dark '
      + 'themes follow your preference. Automated checks cover accessibility, '
      + 'color contrast, and routing.',
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
      'The emissions caused by using electricity depend on where and when you use it. '
      + 'An electric car might charge more cleanly during a period of surplus solar '
      + 'generation than when fossil-fuel plants would supply the extra demand. '
      + 'WattTime uses grid data and forecasting models to help smart chargers and '
      + 'other flexible devices shift electricity use to cleaner times.',
    desc:
      'For my senior capstone at Bellevue College, I worked with WattTime on the '
      + 'data collection and visualization side of that problem. Grid operators '
      + 'publish data in different formats, so I researched reporting standards '
      + 'across the US, Canada, Australia, and Taiwan and wrote Python scripts to '
      + 'collect, normalize, and validate those reports in a shared SQL database. '
      + 'I also built a React dashboard to explore emissions trends by time and geography.',
  },
];

export default data;
