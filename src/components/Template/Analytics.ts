import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const { PROD, VITE_GA_TRACKING_ID } = import.meta.env;

if (PROD && VITE_GA_TRACKING_ID) {
  ReactGA.initialize(VITE_GA_TRACKING_ID);
}

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (PROD && VITE_GA_TRACKING_ID) {
      ReactGA.set({
        page: pathname,
      });
      ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return null;
};

export default Analytics;
