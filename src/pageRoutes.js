import routes from './data/routes';

// The page module behind each route. `load` stays a function so the client can
// code-split on it, while the prerenderer awaits them all up front.
const loaders = {
  '/': () => import('./pages/Index'),
  '/about': () => import('./pages/About'),
  '/resume': () => import('./pages/Resume'),
  '/projects': () => import('./pages/Projects'),
  '/stats': () => import('./pages/Stats'),
  '/contact': () => import('./pages/Contact'),
};

// Adding a route to data/routes.js without a page module here is a mistake that
// would otherwise surface as a blank page, so fail loudly at import time.
const pageRoutes = routes.map(({ path }) => {
  const load = loaders[path];
  if (!load) {
    throw new Error(`No page module registered for route "${path}" in src/pageRoutes.js`);
  }
  return { path, load };
});

export default pageRoutes;
