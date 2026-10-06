import type { ComponentType } from 'react';

import routes from './data/routes';

/** A route paired with the module that renders it. */
export interface PageRoute {
  path: string;
  load: () => Promise<{ default: ComponentType }>;
}

// The page module behind each route. `load` stays a function so the client can
// code-split on it, while the prerenderer awaits them all up front.
const loaders: Record<string, PageRoute['load']> = {
  '/': () => import('./pages/Index'),
  '/resume': () => import('./pages/Resume'),
  '/projects': () => import('./pages/Projects'),
  '/projects/finledger': () => import('./pages/Finledger'),
  '/contact': () => import('./pages/Contact'),
};

// Adding a route to data/routes.ts without a page module here is a mistake that
// would otherwise surface as a blank page, so fail loudly at import time.
const pageRoutes: PageRoute[] = routes.map(({ path }) => {
  const load = loaders[path];
  if (!load) {
    throw new Error(`No page module registered for route "${path}" in src/pageRoutes.ts`);
  }
  return { path, load };
});

export default pageRoutes;
