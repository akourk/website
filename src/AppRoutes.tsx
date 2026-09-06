import { Suspense, lazy } from 'react';
import type { ComponentType } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './layouts/Main'; // fallback for lazy pages
import { RouteFocusProvider } from './components/Template/RouteFocus';
import NotFound from './pages/NotFound';
import pageRoutes from './pageRoutes';

/** Route path to the component that renders it. */
export type PageMap = Map<string, ComponentType>;

// Created once at module scope. React.lazy identity has to be stable across
// renders or every navigation would remount the page.
const lazyPages: PageMap = new Map(pageRoutes.map(({ path, load }) => [path, lazy(load)]));

interface AppRoutesProps {
  /**
   * Lets the prerenderer hand in eagerly imported components. renderToString
   * cannot wait on a lazy import, so on the server the pages are already
   * resolved and this Suspense boundary never suspends.
   */
  pages?: PageMap;
}

const AppRoutes = ({ pages = lazyPages }: AppRoutesProps) => (
  <RouteFocusProvider>
    <Suspense fallback={<Main />}>
      <Routes>
        {pageRoutes.map(({ path }) => {
          const Page = pages.get(path);
          return Page ? <Route key={path} path={path} element={<Page />} /> : null;
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </RouteFocusProvider>
);

export default AppRoutes;
