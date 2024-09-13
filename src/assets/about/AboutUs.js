import React from 'react';
import './AboutUs.css';


// Import the images
import image1 from '../../images/image1.jpg';



import { FaCheckCircle } from 'react-icons/fa';  // Import tick mark icon from react-icons

const AboutUs = () => {
  return (
    <div className="about-us" >
      <div className="intro-section" >
      <div className="intro-container" style={{ width: '80%' }}>
        <div className="intro-images">
          <img src={image1} alt="Team meeting" />
          
        </div>
        <div className="intro-text">
          <p className="welcome-text" style={{ color: 'green', fontWeight: 'bold' }}>• WELCOME TO OUR COMPANY</p>
          <h1>Connecting People And Build Technology</h1>
          <p className="experience-text" style={{ color: 'green', fontWeight: 'bold' }}>Years of Experience</p>
          <p className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul className="tick-list">
            <li><FaCheckCircle className="tick-icon" /> All in one IT solution company</li>
            <li><FaCheckCircle className="tick-icon" /> Amazing expert teams</li>
            <li><FaCheckCircle className="tick-icon" /> Quality solutions for business</li>
            <li><FaCheckCircle className="tick-icon" /> 24/7 quick supports</li>
          </ul>
          <button className="cta-button">Read More About Us</button>
        </div>
      </div>
      </div>

   

 

      
    </div>
  );
};

export default AboutUs;