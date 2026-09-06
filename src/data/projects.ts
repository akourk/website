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
  /** ISO yyyy-mm-dd, formatted for display with dayjs. */
  date: string;
  desc: string;
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
      + 'tax statements. Over a thousand tests check the calculations and imports. '
      + 'The demo uses fictional data.',
  },
  {
    title: 'This website',
    subtitle: 'The site you are reading, rebuilt from a Create React App template.',
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
];

export default data;
