// Renders every route to its own static HTML file.
//
// GitHub Pages serves files, not an app. Without this step /website/resume is a
// path with no file behind it, so it 404s, and the only HTML ever served is an
// empty <div id="root">. After this step each route is a real index.html with
// the page's text and its <title>/<meta> already in the markup, which is what
// deep links, crawlers and link previews need.

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const distDir = join(root, 'dist');
const ssrEntry = join(root, 'dist-ssr', 'entry-server.js');

const { render, routes } = await import(pathToFileURL(ssrEntry).href);

// The client build's index.html is the shell: it carries the hashed script and
// stylesheet tags. Read it once, before any route overwrites it.
const template = await readFile(join(distDir, 'index.html'), 'utf8');

const outputPathFor = (route) => (route === '/'
  ? join(distDir, 'index.html')
  : join(distDir, route.replace(/^\/+/, ''), 'index.html'));

const renderInto = (html, head) => {
  if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
    throw new Error('index.html is missing the <!--app-html--> or <!--app-head--> marker');
  }
  return template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html);
};

const headTagsFrom = (helmet) => [
  helmet.title.toString(),
  helmet.meta.toString(),
  helmet.link.toString(),
].filter(Boolean).join('\n    ');

const write = async (file, contents) => {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, contents, 'utf8');
};

const pages = [
  ...routes.map((route) => ({ route: route.path, file: outputPathFor(route.path) })),
  // GitHub Pages serves 404.html for any path with no file behind it, so the
  // unknown-route case gets the real NotFound page instead of a redirect hack.
  { route: '/__not-found__', file: join(distDir, '404.html') },
];

for (const { route, file } of pages) {
  const { html, helmet } = await render(route);
  const head = headTagsFrom(helmet);

  // The shell already has a <title>; drop it so helmet's is the only one.
  const shell = renderInto(html, head).replace('<title>Alex Kourkoumelis</title>\n    ', '');

  await write(file, shell);
  process.stdout.write(`prerendered ${route.padEnd(16)} -> ${file.replace(`${root}/`, '')}\n`);
}
