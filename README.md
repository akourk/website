# akourk.github.io/website

[![Node.js CI](https://github.com/akourk/website/actions/workflows/node.js.yml/badge.svg)](https://github.com/akourk/website/actions/workflows/node.js.yml)
[![Accessibility](https://github.com/akourk/website/actions/workflows/accessibility.yml/badge.svg)](https://github.com/akourk/website/actions/workflows/accessibility.yml)

My personal site: [akourk.github.io/website](https://akourk.github.io/website/).
React and TypeScript, prerendered to static HTML at build time and served by
GitHub Pages.

## How it works

Every route is written to its own HTML file at build time, so a request for
`/website/resume` is a file that exists rather than a path the server knows
nothing about. That fixes deep links, refreshes and bookmarks, and it means
crawlers and link previews get the page's real text, title and description
without running any JavaScript.

The build runs in three steps:

1. `vite build` produces the client bundle and the HTML shell.
2. `vite build --ssr` produces a server bundle exporting a `render(path)`.
3. `scripts/prerender.js` renders every route in `src/data/routes.ts` and
   writes `dist/<route>/index.html`, injecting the markup and the
   react-helmet-async head tags into the shell.

Unknown routes render the NotFound page into `dist/404.html`, which GitHub
Pages serves with a 404 status. No redirect hack. The client hydrates the
prerendered markup, after which navigation is client-side as usual.

`scripts/check-prerender.js` serves `dist/` the way GitHub Pages does, static
files with no SPA fallback, and fails the build if any route is missing,
returns a non-200, has an empty `#root`, or has lost its title, description or
expected text. Browser testing hides exactly this class of bug, because
client-side routing works fine once any page has loaded.

## Accessibility

Audited against WCAG 2.2 AA, and gated so it stays that way:

- `src/test/Accessibility.test.tsx` runs axe-core against the prerendered
  markup of every route and fails on any violation rated serious or critical.
- `src/test/Contrast.test.ts` computes the contrast ratios of both themes'
  palettes in `src/static/css/_tokens.scss`, and checks that every colour in
  the skills chart stays visible against its track in each. axe cannot check
  contrast in jsdom, which has no layout engine, so this is done arithmetically
  instead.

Both run in CI on every push, and `npm run test:a11y` runs them locally.

## Light and dark

The site follows the system preference, and the switch in the masthead overrides
it and persists the choice. A small inline script in `index.html` applies a
saved theme before the first paint, because as a module it would run a frame
late and a reader who chose dark would see the light page flash first.

Both themes are one variable swap in `src/static/css/_tokens.scss`, and
`src/test/Contrast.test.ts` checks the ratios for both.

## Running it

Node 22.12 or newer; `.nvmrc` pins the major.

```bash
nvm install
npm install
npm start
```

The dev server runs at `http://localhost:5173/website/`. It uses the same base
path as production on purpose, so a base-path mistake shows up locally instead
of only after deploying.

| Script | What it does |
| --- | --- |
| `npm start` | Vite dev server |
| `npm run build` | Client build, SSR build, then prerender every route |
| `npm run check:prerender` | Serve `dist/` statically and assert every route |
| `npm test` | Vitest, including the axe and contrast suites |
| `npm run test:a11y` | Just the accessibility suites |
| `npm run lint` | ESLint, typescript-eslint with type-aware rules |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run preview` | Serve the built site |

## Editing content

Content lives in `src/data/`, separately from the components that render it:

| File | What it holds |
| --- | --- |
| `routes.ts` | Every route. Drives the nav, the router and the prerenderer |
| `about.md` | The about page, rendered as markdown |
| `projects.ts` | Project cards |
| `contact.ts` | Contact links and their icons |
| `resume/positions.ts` | Jobs |
| `resume/degrees.ts` | Degrees |
| `resume/courses.ts` | Selected courses |
| `resume/skills.ts` | Skills, competency levels and category colours |
| `stats/personal.tsx` | Rows of the stats table |

Adding a route means adding it to `routes.ts` and registering its page module
in `src/pageRoutes.ts`; a route with no page module throws at import time
rather than rendering blank.

## Deploying

Pushing to `main` triggers `.github/workflows/github-pages.yml`, which builds
and publishes `dist/` to the `gh-pages` branch. The site is served from the
`/website/` subdirectory, which is set once as `base` in `vite.config.ts` and
read by the router as `import.meta.env.BASE_URL`.

There are no environment variables to set.

## Built with

Vite, React 18, React Router 6, TypeScript, Sass, Vitest and axe-core.
Type is [Newsreader](https://fonts.google.com/specimen/Newsreader) and
[Inter](https://fonts.google.com/specimen/Inter).

## Credit

Originally built from [mldangelo/personal-site](https://github.com/mldangelo/personal-site),
which was itself based on [Future Imperfect](https://html5up.net/future-imperfect)
by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](https://html5up.net). The
build, the stylesheet and the layout have since been replaced, but the site
started there. MIT licensed, and `LICENSE` keeps the original copyright.
