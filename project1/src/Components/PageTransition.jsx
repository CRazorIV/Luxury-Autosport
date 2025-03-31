import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/PageTransition.css';

const PageTransition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="page-transition-wrapper">
      {children}
    </div>
  );
};

export default PageTransition;