/** A project card on the projects page. */
export interface Project {
  title: string;
  /** One-line framing shown under the title in the source data. */
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
  /** Absent while a project has nowhere public to link to. */
  link?: string;
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
    desc:
      'Raw broker CSV exports go in, a self-contained HTML dashboard comes out. '
      + 'It handles cost basis and tax lots with FIFO and reconciles the result '
      + 'against the broker-reported 1099s, so the numbers can be checked rather '
      + 'than trusted. Nine broker parsers detect their own format and deduplicate '
      + 'across overlapping exports. Roughly 220 tests, none of which touch the '
      + 'network, and a pre-commit hook that blocks accidental commits of personal '
      + 'data. Python, no server, no database. The linked demo is fictional sample '
      + 'data.',
  },
  {
    title: 'This website',
    subtitle: 'The site you are reading, rebuilt from a Create React App template.',
    date: '2026-09-06',
    link: 'https://akourk.github.io/website/',
    source: 'https://github.com/akourk/website',
    desc:
      'React 19 and TypeScript in strict mode, built with Vite and React Router 8. '
      + 'Every route prerenders to static HTML, so each page arrives with its own '
      + 'title, description, and real content before any JavaScript runs, and an '
      + 'unknown URL returns the 404 page rather than a blank one. Dark mode follows '
      + 'the system preference with a switch to override it. It was audited against '
      + 'WCAG 2.2 AA, and axe runs in CI alongside contrast and routing tests so the '
      + 'result does not quietly regress.',
  },
];

export default data;
