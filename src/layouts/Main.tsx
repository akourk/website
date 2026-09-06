import { useRef } from 'react';
import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';

import Masthead from '../components/Template/Masthead';
import SiteFooter from '../components/Template/SiteFooter';
import ScrollToTop from '../components/Template/ScrollToTop';
import { useFocusOnRouteChange } from '../components/Template/RouteFocus';

// Where the site actually lives. Used for absolute URLs in <link rel="canonical">
// and the Open Graph tags, both of which crawlers need spelled out in full.
const SITE_URL = 'https://akourk.github.io/website';

interface MainProps {
  children?: ReactNode;
  /** Drops the footer bio card, for pages that are already about Alex. */
  fullPage?: boolean;
  /** Page name. Fed through the title template; omit for the site's own title. */
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

  const canonical = `${SITE_URL}${pathname}`;
  const fullTitle = title ? `${title} | Alex Kourkoumelis` : 'Alex Kourkoumelis';

  return (
    <>
      <ScrollToTop />
      <Helmet titleTemplate="%s | Alex Kourkoumelis" defaultTitle="Alex Kourkoumelis">
        {title && <title>{title}</title>}
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Alex Kourkoumelis" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary" />
      </Helmet>
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
