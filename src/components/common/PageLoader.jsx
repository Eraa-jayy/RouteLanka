import React from 'react';
import './PageLoader.css';

const PageLoader = ({ isVisible }) => {
  return (
    <div className={`page-loader ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="loader-content">
        {/* Brand name */}
        <div className="loader-brand">
          <span className="loader-brand-text">RouteLanka</span>
        </div>

        {/* Progress bar */}
        <div className="loader-bar-track">
          <div className="loader-bar-fill" />
        </div>

        {/* Loading dots */}
        <div className="loader-dots">
          <span className="loader-dot" />
          <span className="loader-dot" />
          <span className="loader-dot" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
