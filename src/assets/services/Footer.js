import React from 'react';
import './Footer.css'; // Import the CSS file for styling

// Define the Footer component
const Footer = () => {
  return (
    <footer className="footer"> 
      {/* Main footer container */}
      <div className="footer-overlay">
        {/* Dark overlay inside the footer */}
        <div className="footer-content">
          {/* Container for footer content */}
          <p className="footer-contact">Contact Us</p>
          {/* Contact text */}
          <h1 className="footer-heading">
            Need Any Kind Of IT Solution For <span>Your Business?</span>
          </h1>
          {/* Main heading with highlighted text */}
          <button className="footer-button">Get In Touch</button>
          {/* Button to contact */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Export the Footer component
