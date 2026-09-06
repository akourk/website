// CI gate for the prerendered output.
//
// Serves dist/ the way GitHub Pages does - static files only, no SPA fallback -
// and asserts every route answers 200 with its real text, title and description
// in the HTML. A browser would hide the failure this catches: client-side
// routing makes navigation work fine once any page has loaded, so a missing
// static file only shows up on a cold request for a deep link.

import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { join, extname, normalize } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(new URL('../package.json', import.meta.url)));
const distDir = join(root, 'dist');
const BASE = '/website/';

// Every route, with text that must survive into the served HTML. The strings are
// deliberately page-specific: a shell with an empty #root would still carry the
// nav links, so matching on those would pass a broken build.
const expectations = [
  { path: '', title: 'Alex Kourkoumelis', text: ['Lead Software Engineer', 'easier to change'] },
  { path: 'about', title: 'About | Alex Kourkoumelis', text: ['About Me', 'philosophy'] },
  { path: 'resume', title: 'Resume | Alex Kourkoumelis', text: ['Selected Courses', 'Bellevue College'] },
  { path: 'projects', title: 'Projects | Alex Kourkoumelis', text: ['finledger', 'broker CSV exports'] },
  { path: 'projects/finledger', title: 'finledger case study | Alex Kourkoumelis', text: ['acquisition history', 'fictional inputs'] },
  { path: 'stats', title: 'Stats | Alex Kourkoumelis', text: ['Countries visited', 'Started Duolingo'] },
  { path: 'contact', title: 'Contact | Alex Kourkoumelis', text: ['akourk@icloud.com'] },
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.ico': 'image/x-icon',
};

const exists = async (path) => {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
};

/**
 * A static file server with GitHub Pages' semantics and nothing more: no SPA
 * fallback, directory requests resolve to index.html, and anything with no file
 * behind it gets 404.html with a 404 status.
 */
const serve = () => createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (!url.pathname.startsWith(BASE)) {
    res.writeHead(404).end('outside base path');
    return;
  }

  const relative = normalize(url.pathname.slice(BASE.length)).replace(/^(\.\.[/\\])+/, '');
  const target = join(distDir, relative);
  const candidates = url.pathname.endsWith('/') || relative === '.'
    ? [join(target, 'index.html')]
    : [target, join(target, 'index.html')];

  for (const candidate of candidates) {
    if (await exists(candidate)) {
      res.writeHead(200, { 'content-type': MIME[extname(candidate)] ?? 'application/octet-stream' });
      createReadStream(candidate).pipe(res);
      return;
    }
  }

  const notFound = join(distDir, '404.html');
  if (await exists(notFound)) {
    res.writeHead(404, { 'content-type': MIME['.html'] });
    createReadStream(notFound).pipe(res);
    return;
  }
  res.writeHead(404).end('not found');
});

const failures = [];
const check = (condition, message) => {
  if (!condition) failures.push(message);
};

const server = serve();
await new Promise((resolve) => { server.listen(0, '127.0.0.1', resolve); });
const origin = `http://127.0.0.1:${server.address().port}`;

for (const { path, title, text } of expectations) {
  const url = `${origin}${BASE}${path}`;
  const response = await fetch(url);
  const html = await response.text();
  const route = `/${path}`;

  check(response.status === 200, `${route}: expected HTTP 200, got ${response.status}`);
  check(
    html.includes(`>${title}</title>`),
    `${route}: prerendered HTML is missing <title>${title}</title>`,
  );
  check(
    /<meta[^>]+name="description"[^>]+content="[^"]+"/.test(html),
    `${route}: prerendered HTML is missing a non-empty <meta name="description">`,
  );
  check(
    !/<div id="root">\s*<\/div>/.test(html),
    `${route}: #root is empty, so nothing was prerendered`,
  );
  for (const needle of text) {
    check(html.includes(needle), `${route}: prerendered HTML is missing the text ${JSON.stringify(needle)}`);
  }
  process.stdout.write(`  ${response.status} ${route.padEnd(12)} ${html.length} bytes\n`);
}

// An unknown path must still get the real NotFound page, not a redirect hack.
const unknown = await fetch(`${origin}${BASE}no-such-page`);
const unknownHtml = await unknown.text();
check(unknown.status === 404, `/no-such-page: expected HTTP 404, got ${unknown.status}`);
check(unknownHtml.includes('Page Not Found'), '/no-such-page: 404.html does not render the NotFound page');
process.stdout.write(`  ${unknown.status} /no-such-page ${unknownHtml.length} bytes\n`);

server.close();

if (failures.length) {
  process.stderr.write(`\nPrerender check failed:\n${failures.map((f) => `  - ${f}`).join('\n')}\n`);
  process.exit(1);
}
process.stdout.write('\nPrerender check passed: every route is a static file with real content.\n');
