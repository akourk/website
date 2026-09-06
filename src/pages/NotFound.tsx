import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { useFocusOnRouteChange } from '../components/Template/RouteFocus';

const PageNotFound = () => {
  const mainRef = useRef<HTMLElement>(null);
  useFocusOnRouteChange(mainRef);

  return (
    <main className="not-found" id="main" tabIndex={-1} ref={mainRef}>
      <Helmet title="404 Not Found">
        <meta name="description" content="The content you are looking for cannot be found." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 data-testid="heading">Page Not Found</h1>
      <p>Return <Link to="/">home</Link>.</p>
    </main>
  );
};

export default PageNotFound;
