import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

// Where the site actually lives. Used for absolute URLs in <link rel="canonical">
// and the Open Graph tags, both of which crawlers need spelled out in full.
const SITE_URL = 'https://akourk.github.io/website';

const Main = ({
  children = null,
  fullPage = false,
  title = null,
  description = 'Alex Kourkoumelis, Lead Software Engineer. Frontend architecture, and the '
    + 'incremental replacement of a mainframe that cannot go down.',
}) => {
  const { pathname } = useLocation();
  const canonical = `${SITE_URL}${pathname}`;
  const fullTitle = title ? `${title} | Alex Kourkoumelis` : 'Alex Kourkoumelis';

  return (
    <>
      <Analytics />
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
      <div id="wrapper">
        <Navigation />
        <div id="main">
          {children}
        </div>
        {fullPage ? null : <SideBar />}
      </div>
    </>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Main;
