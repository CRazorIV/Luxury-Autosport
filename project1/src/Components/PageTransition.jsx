import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [content, setContent] = useState(children);

  // Handle location changes for navigation transitions
  useEffect(() => {
    // Skip the first render (initial page load)
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    if (location.pathname !== displayLocation.pathname) {
      // Start fade out when location changes
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation, isInitialLoad]);

  // Handle animation end event
  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      // When fade out completes, update content and start fade in
      setContent(children);
      setDisplayLocation(location);
      setTransitionStage("fadeIn");
    }
  };

  return (
    <div 
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {transitionStage === "fadeIn" ? children : content}
    </div>
  );
};

export default PageTransition;