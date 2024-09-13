import React from 'react';
import AboutUs from './AboutUs';
import Footer from './Footer'; // Import Footer
import Header from '../contact/PagesHeader';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './About.css';
import Stats from './Stats';
import Team from './Team';
import WorkProcess from './WorkProcess';

import TimeLine from './TimeLine'


function About() {
  return (
    <div className="About">
      
      <main>
        <AboutUs />
        <Stats/> 
        
        <TimeLine/>
        
        <WorkProcess/>
        <Team/>
        <Footer /> {/* Include Footer */}

      </main>
    </div>
  );
}

export default About;