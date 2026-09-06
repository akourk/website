// Every route the site has, in navigation order. This is the single source of
// truth for the header links, the hamburger menu, the <Route> table and the list
// of pages the prerenderer writes to static HTML.
//
// It deliberately imports nothing. Pages import the layout, which imports the
// navigation, which imports this file, so a page reference here would close an
// import cycle. The page modules are attached in src/pageRoutes.ts instead.

/** A path the router and prerenderer know about. */
export interface Route {
  /** Link text in the header and hamburger menu. */
  label: string;
  /** Router path, always rooted. Combined with the deployment base at render time. */
  path: string;
  /** The site title link, rendered as the <h1> rather than a nav item. */
  index?: boolean;
  /** Detail pages remain reachable without crowding the site navigation. */
  navigation?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Alex Kourkoumelis',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'finledger case study',
    path: '/projects/finledger',
    navigation: false,
  },
  {
    label: 'Stats',
    path: '/stats',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export const navigationRoutes = routes.filter((route) => route.navigation !== false);

export default routes;
