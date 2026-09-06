import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

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

/**
 * React 19 hoists <title>, <meta>, <link>, <style> and <script> rendered
 * anywhere in the tree, and in a server render it emits them as a prefix, ahead
 * of the component's own markup. Splitting that prefix off is what lets the
 * prerenderer put them in the shell's <head> where a crawler will read them.
 */
const HOISTED = /^\s*<(title|meta|link|style|script)\b[^>]*(?:\/>|>[\s\S]*?<\/\1>)/;

const splitHoistedHead = (rendered: string) => {
  const head: string[] = [];
  let rest = rendered;

  for (let match = HOISTED.exec(rest); match; match = HOISTED.exec(rest)) {
    head.push(match[0].trim());
    rest = rest.slice(match[0].length);
  }

  return { head: head.join('\n    '), html: rest };
};

export interface RenderResult {
  /** Markup for #root, with the hoisted metadata removed. */
  html: string;
  /** The page's title, meta and link tags, ready to place in <head>. */
  head: string;
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

  const location = `${base}${path.replace(/^\/+/, '')}`;

  const rendered = renderToString(
    <StaticRouter basename={base} location={location}>
      <AppRoutes pages={pages} />
    </StaticRouter>,
  );

  const { head, html } = splitHoistedHead(rendered);

  if (!head.includes('<title')) {
    throw new Error(`No <title> was hoisted out of the render for ${path}`);
  }

  return { html, head };
};

// Re-exported so the prerenderer gets the route list from the same bundle it
// renders with, rather than parsing the source a second time.
export { pageRoutes as routes };

export default render;
