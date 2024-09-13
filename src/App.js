// src/App.js
import React from 'react';
import Home from './assets/home/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './assets/home/Footer';
import Header from './assets/home/Header';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Contact from './assets/contact/Contact';
import ServicesGrid from './assets/services/ServicesGrid';
import About from './assets/about/About';
import JoinWithUs from './assets/joinwithus/JoinWithUs'
import MobilePrivacy from './assets/mobileprivacy/MobilePrivacy'; 
import PrivacyPolicy from './assets/privacypolicy/PrivacyPolicy';
import TermsAndConditions from './assets/termsandconditions/TermsAndConditions';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesGrid />} />
          <Route path="/about" element={<About />} />
          <Route path="/joinwithus" element={<JoinWithUs />} />
          <Route path="/mobileprivacy" element={<MobilePrivacy />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
{/*           
          Redirect from old paths to the correct ones
          <Route path="/legal-pages/*" element={<Navigate to="/privacypolicy" replace />} /> */}

          {/* Fallback route for undefined paths */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
