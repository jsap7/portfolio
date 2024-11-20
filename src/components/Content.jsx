import React from 'react';
import '../styles/Content.css';

const Content = ({ activeSection }) => {
  const renderTiles = () => {
    switch(activeSection) {
      case 'home':
        return (
          <>
            <div className="tile medium">Welcome</div>
            <div className="tile small">Quick Info</div>
            <div className="tile small">Stats</div>
            <div className="tile small">Skills</div>
            <div className="tile small">Recent Work</div>
            <div className="tile medium">Featured Project</div>
            <div className="tile small">Contact</div>
          </>
        );
      // We'll add other cases later
      default:
        return null;
    }
  };

  return (
    <div className="content-container" style={{ overflow: 'hidden' }}>
      <div className="tile-grid" style={{ overflow: 'hidden' }}>
        {renderTiles()}
      </div>
    </div>
  );
};

export default Content;