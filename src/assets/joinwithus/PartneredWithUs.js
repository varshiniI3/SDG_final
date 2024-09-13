import React from 'react';
import './PartneredWithUs.css';
import googleLogo from '../../images/google-logo.png';
import microsoftLogo from '../../images/microsoft-logo.png';
import awsLogo from '../../images/aws-logo.png';
import ciscoLogo from '../../images/cisco-logo.png';
import intelLogo from '../../images/intel-logo.png';
import migrationImage from '../../images/migration-image.jpg'; // Add the migration image

const PartneredWithUs = () => {
  return (
    <div className="partnered-with-us">
      <h1>We are partnered with</h1>
      
      <div className="partners">
        <div className="partner">
          <div className="partner-inner">
            <img src={awsLogo} alt="AWS Cloud Security" className="partner-logo" />
            <p>Security is built into your AWS cloud environment as standard, with highly qualified security analysts on hand for threat detection and mitigation, if needed.</p>
            <a href="https://aws.amazon.com/security/" target="_blank" rel="noopener noreferrer" className="read-more">Read more &gt;</a>
          </div>
        </div>

        <div className="partner">
          <div className="partner-inner">
            <img src={googleLogo} alt="Google Workspace" className="partner-logo" />
            <p>Migrate mail, file and archive data to Google Workspace from over 20 modern and legacy source platforms.</p>
            <a href="https://workspace.google.com/" target="_blank" rel="noopener noreferrer" className="read-more">Read more &gt;</a>
          </div>
        </div>

        <div className="partner">
          <div className="partner-inner">
            <img src={microsoftLogo} alt="Microsoft 365" className="partner-logo" />
            <p>Migrate mail, file and archive data to Microsoft 365 from over 20 modern and legacy source platforms.</p>
            <a href="https://www.microsoft.com/microsoft-365" target="_blank" rel="noopener noreferrer" className="read-more">Read more &gt;</a>
          </div>
        </div>

        <div className="partner">
          <div className="partner-inner">
            <img src={ciscoLogo} alt="Cisco" className="partner-logo" />
            <p>We are a Gold Level Cisco Partner with Cisco UCS and MDS solutions underpinning our Public and Private cloud offerings.</p>
            <a href="https://www.cisco.com/" target="_blank" rel="noopener noreferrer" className="read-more">Read more &gt;</a>
          </div>
        </div>
        
        <div className="partner">
          <div className="partner-inner">
            <img src={intelLogo} alt="Intel" className="partner-logo" />
            <p>As a Titanium partner of Intel, we ensure our customers have access to the latest CPU technologies for their solutions.</p>
            <a href="https://www.intel.com/" target="_blank" rel="noopener noreferrer" className="read-more">Read more &gt;</a>
          </div>
        </div>
      </div>

      {/* New Migration Section */}
      <div className="migration-section">
        <div className="migration-content">
          <div className="migration-text">
            <h2>Migrate to Google Workspace. Fast, seamless and secure data migrations</h2>
            <p>Easily migrate mail, file, and archive data to Google Workspace from over 20 modern and legacy source platforms. Trusted by brands such as Netflix and Booking.com.</p>
            <button>Request a demo</button>
          </div>
          <div className="migration-image">
            <img src={migrationImage} alt="Migration" />
          </div>
        </div>
      </div>

      {/* Added text above the boxes */}
      <div className="additional-migration-text">
        <p>Migrate your Gmails, contacts, calendars, and files to Google Workspace</p>
      </div>

      {/* New Boxes Under Migration Section */}
      <div className="migration-options">
        <div className="option">
          <h3>Migrate to Google Workspace from Microsoft 365</h3>
          <p>Migrate Microsoft 365 to Google Workspace migrations run smoothly and without delays.</p>
        </div>
        <div className="option">
          <h3>Consolidate your data in Google Workspace</h3>
          <p>Merge mail, file, and archive data to Google Workspace from over 20 supported source systems.</p>
        </div>
        <div className="option">
          <h3>Tenant to tenant Google Workspace migrations</h3>
          <p>Migrate between Google tenants into one destination following mergers and acquisitions.</p>
        </div>
      </div>
    </div>
  );
};

export default PartneredWithUs;
