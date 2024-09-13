import React from 'react';
import './Footer.css';
import logo from "../../images/SDG-Logo.png";


const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-top">
        <div className="footer-logo">
          {/* <img src="pages/SDG-Logo.png" alt="SDG Solution" /> */}
          <a className="footer-container" href="/">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="footer-logo"
            />
            <span className="footer-logo-text">SDG Solutions</span>
          </a>
          
            
        </div>
        <div className="footer-info">
          <div className="footer-item">
            <i className="fas fa-phone"></i>
            <div className="footer-text">
              <h3>Phone Number</h3>
              <p>(+202) 2156-2145</p>
            </div>
          </div>
          <div className="footer-item">
            <i className="fas fa-envelope"></i>
            <div className="footer-text">
              <h3>Email Us Here</h3>
              <p>info@sdgsolutions.com</p>
            </div>
          </div>
          <div className="footer-item">
            <i className="fas fa-map-marker-alt"></i>
            <div className="footer-text">
              <h3>Office Address</h3>
              <p>251 Hilton, Berlin DE</p>
            </div>
          </div>
        </div>
      </footer>
      
      <footer className="footer-main">
        <div className="footer-column">
          <h3>About Company</h3>
          <p>At SDG Solutions, we are about technology and dedicated to providing IT solutions for businesses of all sizes.</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Meet Our Team</a></li>
            <li><a href="/news-media">News & Media</a></li>
            <li><a href="/projects">Our Projects</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>What We Do</h3>
          <ul>
            <li><a href="/cyber-security">Cyber Security</a></li>
            <li><a href="/it-management">IT Management</a></li>
            <li><a href="/qa-testing">QA & Testing</a></li>
            <li><a href="/infrastructure-plan">Infrastructure Plan</a></li>
            <li><a href="/it-consultant">Plan IT Consultant</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Popular Posts</h3>
          <div className="post">
          {/* <img
                    src="https://via.placeholder.com/50"
                    alt="Post"
                    className="footer-post-img"
                  /> */}
            <p>June 4, 2023</p>
            <p>Your Business Safe...</p>
            <a href="/your-business-safe">READ MORE ➔</a>
          </div>
          <div className="post">
          {/* <img
                    src="https://via.placeholder.com/50"
                    alt="Post"
                    className="footer-post-img"
                  /> */}
            <p>June 4, 2023</p>
            <p>Data Backup and...</p>
            <a href="/data-backup-and">READ MORE ➔</a>
          </div>
        </div>
      </footer>

      <footer className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© Copyright 2024 Tronix All Rights Reserved Dinesh</p>
        </div>
        <div className="footer-bottom-right">
          <a href="/terms-conditions">Terms & Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
