import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import type { HelmetServerState } from 'react-helmet-async';

import AppRoutes from './AppRoutes';
import type { PageMap } from './AppRoutes';
import pageRoutes from './pageRoutes';
import './static/css/main.scss';

const base = import.meta.env.BASE_URL;

// Resolve every page module up front. renderToString cannot suspend, so the
// route table is handed fully-loaded components rather than React.lazy ones.
const loadPages = async (): Promise<PageMap> => new Map(
  await Promise.all(
    pageRoutes.map(async ({ path, load }) => [path, (await load()).default] as const),
  ),
);

let pagesPromise: Promise<PageMap> | null = null;

export interface RenderResult {
  /** Markup for #root. */
  html: string;
  /** The page's title, meta and link tags, ready to serialise into <head>. */
  helmet: HelmetServerState;
}

/**
 * Render one route to static HTML.
 *
 * @param path App-relative route, e.g. '/resume'. Anything that does not match
 *   a known route renders the NotFound page, which is how 404.html is produced.
 */
export const render = async (path: string): Promise<RenderResult> => {
  pagesPromise = pagesPromise ?? loadPages();
  const pages = await pagesPromise;

  const helmetContext: { helmet?: HelmetServerState } = {};
  const location = `${base}${path.replace(/^\/+/, '')}`;

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter basename={base} location={location}>
        <AppRoutes pages={pages} />
      </StaticRouter>
    </HelmetProvider>,
  );

  if (!helmetContext.helmet) {
    throw new Error(`react-helmet-async produced no head tags for ${path}`);
  }

  return { html, helmet: helmetContext.helmet };
};

// Re-exported so the prerenderer gets the route list from the same bundle it
// renders with, rather than parsing the source a second time.
export { pageRoutes as routes };

export default render;
