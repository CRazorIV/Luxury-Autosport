import { useState, useEffect } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add loading class to body to prevent scrolling
    document.body.classList.add('loading');
    
    // Hide loader after content loads
    const timer = setTimeout(() => {
      setLoading(false);
      // Remove loading class to re-enable scrolling
      document.body.classList.remove('loading');
    }, 1000);

    return () => {
      clearTimeout(timer);
      // Ensure we remove the class if component unmounts
      document.body.classList.remove('loading');
    };
  }, []);

  return (
    <div className={`loader-container ${!loading ? 'fade-out' : ''}`}>
      <div className="loader"></div>
      <div className="loader-text">LOADING</div>
    </div>
  );
};

export default Loader;