// Every route the site has, in navigation order. This is the single source of
// truth for the header links, the hamburger menu, the <Route> table and the list
// of pages the prerenderer writes to static HTML.
//
// It deliberately imports nothing. Pages import the layout, which imports the
// navigation, which imports this file, so a page reference here would close an
// import cycle. The page modules are attached in src/pageRoutes.js instead.
const routes = [
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
    label: 'Stats',
    path: '/stats',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
