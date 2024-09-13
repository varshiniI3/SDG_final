import React from 'react';
import './ServiceCard.css'; // Import the CSS file for styling

// Define the ServiceCard component, which takes title, description, and icon as props
const ServiceCard = ({ title, description, icon }) => (
  <div className="service-card">
    {/* Container for the service card */}
    <div className="home-service-icon">
      {/* Display the icon */}
      {icon}
    </div>
    <div className="service-content">
      {/* Container for the card content */}
      <h3>{title}</h3>
      {/* Display the title */}
      <p>{description}</p>
      {/* Display the description */}
      <a href="https://www.intel.com/" target="_blank" rel="noopener noreferrer" className="read-more">
        {/* Link to read more, opens in a new tab */}
        Read more &gt;
      </a>
    </div>
  </div>
);

export default ServiceCard; // Export the ServiceCard component
