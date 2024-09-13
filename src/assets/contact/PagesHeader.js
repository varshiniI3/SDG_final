//Header.js


import React from 'react';
import './PagesHeader.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
      <div className="header-info">
      <a href="#" className='text-white'>Consulting WP<span className="header-bullet"></span></a>
      <a href="#" className='text-white'>New York<span className="header-bullet"></span></a>
      <a href="#" className='text-white'>Services</a>
        </div>
        <nav className="header-nav">
          <a href="#" className="header-link">
            Services
            <div className="header-underline"></div>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
