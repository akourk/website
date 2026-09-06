import { useRef } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router';

import Masthead from '../components/Template/Masthead';
import SiteFooter from '../components/Template/SiteFooter';
import ScrollToTop from '../components/Template/ScrollToTop';
import { useFocusOnRouteChange } from '../components/Template/RouteFocus';

// Where the site actually lives. Used for absolute URLs in <link rel="canonical">
// and the Open Graph tags, both of which crawlers need spelled out in full.
const SITE_URL = 'https://akourk.github.io/website';
const SITE_NAME = 'Alex Kourkoumelis';

interface MainProps {
  children?: ReactNode;
  /** Drops the footer bio card, for pages that are already about Alex. */
  fullPage?: boolean;
  /** Page name. Prefixed to the site name; omit for the site's own title. */
  title?: string;
  description?: string;
}

const Main = ({
  children = null,
  fullPage = false,
  title,
  description = 'Alex Kourkoumelis, Lead Software Engineer. Frontend architecture, and the '
    + 'incremental replacement of a mainframe that cannot go down.',
}: MainProps) => {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  useFocusOnRouteChange(mainRef);

  // GitHub Pages serves every route as a directory index, so /resume redirects
  // to /resume/ and the trailing-slash form is the one that answers 200. Without
  // normalising, the prerendered canonical said /resume while the hydrated page
  // said /resume/, and React kept both: two canonicals disagreeing with each
  // other, one of them pointing at a redirect.
  const canonicalPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const canonical = `${SITE_URL}${canonicalPath}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <>
      <ScrollToTop />
      {/*
        React 19 hoists these into <head> itself, on the client and in the
        render output, so they need no library and no provider. The prerenderer
        lifts them out of the rendered string into the shell's head.
      */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />

      <a className="skip-link" href="#main">Skip to content</a>
      <div className="shell">
        <Masthead />
        {/* tabIndex -1 so the skip link can land here without adding a tab stop. */}
        <main id="main" tabIndex={-1} ref={mainRef}>
          {children}
        </main>
        <SiteFooter showBio={!fullPage} />
      </div>
    </>
  );
};

export default Main;
