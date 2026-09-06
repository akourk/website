import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';

import AppRoutes from './AppRoutes';
import pageRoutes from './pageRoutes';
import './static/css/main.scss';

const base = import.meta.env.BASE_URL;

// Resolve every page module up front. renderToString cannot suspend, so the
// route table is handed fully-loaded components rather than React.lazy ones.
const loadPages = async () => new Map(
  await Promise.all(
    pageRoutes.map(async ({ path, load }) => [path, (await load()).default]),
  ),
);

let pagesPromise = null;

/**
 * Render one route to static HTML.
 *
 * @param {string} path App-relative route, e.g. '/resume'. Anything that does
 *   not match a known route renders the NotFound page, which is how 404.html
 *   is produced.
 * @returns {Promise<{html: string, helmet: object}>} Markup for #root, and the
 *   react-helmet-async context holding the page's title and meta tags.
 */
export const render = async (path) => {
  pagesPromise = pagesPromise ?? loadPages();
  const pages = await pagesPromise;

  const helmetContext = {};
  const location = `${base}${path.replace(/^\/+/, '')}`;

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter basename={base} location={location}>
        <AppRoutes pages={pages} />
      </StaticRouter>
    </HelmetProvider>,
  );

  return { html, helmet: helmetContext.helmet };
};

// Re-exported so the prerenderer gets the route list from the same bundle it
// renders with, rather than parsing the source a second time.
export { pageRoutes as routes };

export default render;
