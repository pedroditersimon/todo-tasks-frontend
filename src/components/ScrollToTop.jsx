import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    //console.log('Scrolling to top for path:', pathname);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0 });
    }, 500);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
