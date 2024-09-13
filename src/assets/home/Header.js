import React from "react";
import "./Header.css"; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS (includes Popper.js)
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "../../images/SDG-Logo.png"; // Adjust the path according to your project structure

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="top-bar">
        <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
          <span className="top-bar-info">Mon-Fri: 8:00 AM - 6:30 PM</span>
          <div className="notification-bar">
            <span>
              Get 50% off on SDG Solutions theme. Limited time offer! Purchase now
            </span>
          </div>
          <div className="top-links-container">
            <a href="/services" className="top-link">All Services</a>
            <a href="/careers" className="top-link">Careers</a>
            <a href="/news" className="top-link">News</a>
            <a href="mailto:media@tronix.com" className="top-link">media@sdgsolutions.com</a>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
              className="navbar-logo"
            />
            <span className="navbar-brand-text">SDG Solutions</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              {/* New Dropdown for Pages */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/privacypolicy">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/mobileprivacy">
                      Mobile Privacy
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/termsandconditions">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/joinwithus">
                      join with us
                    </a>
                  </li>
                </ul>
              </li>
              {/* End of Pages Dropdown */}
            </ul>
            {/* Quick Call and Get Started Buttons */}
            <div className="d-flex align-items-center quick-call-container">
              <div className="quick-call">
                <span className="call-icon"><i className="fas fa-phone"></i></span> {/* FontAwesome icon */}
                <div className="call-details">
                  <span>Quick Call</span>
                  <span>(904) 12-366-25</span>
                </div>
              </div>
              <a href="/get-started" className="btn btn-get-started">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
