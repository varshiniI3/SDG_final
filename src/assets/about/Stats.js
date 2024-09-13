import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <div className="stats">
      <div className="stat-item">
        <i className="fas fa-users"></i>
        <div>200+<br />Team Members</div>
      </div>
      <div className="stat-item">
        <i className="fas fa-project-diagram"></i>
        <div>10+<br />Completed Projects</div>
      </div>
      <div className="stat-item">
        <i className="fas fa-trophy"></i>
        <div>20+<br />Winning Awards</div>
      </div>
      <div className="stat-item">
        <i className="fas fa-star"></i>
        <div>900+<br />Client Reviews</div>
      </div>
    </div>
  );
};

export default Stats;
