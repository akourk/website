import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { revealHashTarget } from '../../utils/hashTarget';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash && hash !== '#') {
      const target = revealHashTarget(hash);
      // The lazy route's real layout retries once its anchor is mounted.
      if (!target) return;
      target.scrollIntoView({ block: 'start' });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
