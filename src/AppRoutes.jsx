import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';

import Main from './layouts/Main'; // fallback for lazy pages
import NotFound from './pages/NotFound';
import pageRoutes from './pageRoutes';

// Created once at module scope. React.lazy identity has to be stable across
// renders or every navigation would remount the page.
const lazyPages = new Map(pageRoutes.map(({ path, load }) => [path, lazy(load)]));

// `pages` lets the prerenderer hand in eagerly imported components. renderToString
// cannot wait on a lazy import, so on the server the pages are already resolved
// and this Suspense boundary never suspends.
const AppRoutes = ({ pages = lazyPages }) => (
  <Suspense fallback={<Main />}>
    <Routes>
      {pageRoutes.map(({ path }) => {
        const Page = pages.get(path);
        return <Route key={path} path={path} element={<Page />} />;
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

AppRoutes.propTypes = {
  pages: PropTypes.instanceOf(Map),
};

export default AppRoutes;
