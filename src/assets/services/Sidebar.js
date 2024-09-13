import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                {/* Contact Section */}
                <div className="contact-section">
                    <h2>How can we help you?</h2>
                    <p>Contact us at the Consulting WP office nearest to you or submit a business inquiry online.</p>
                    <button className="contact-button">Contacts</button>
                </div>

                {/* Brochure Section */}
                <div className="brochure-section">
                    <h2>Brochure</h2>
                    <p>Existence it certainly explained how improving household pretended.</p>
                    <div className="download-links">
                        <a href="www.google.com" className="download-link">Download Service</a>
                        <a href="www.google.com" className="download-link">Download Features</a>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="benefits-section">
                    <h2>Benefits With Our Service</h2>
                    {/* Benefit 1 */}
                    <div className="benefit">
                        <img src="https://thumbs.dreamstime.com/b/versatile-idea-icon-312567265.jpg" alt="Flexible Solutions" />
                        <div>
                            <h3>Flexible Solutions</h3>
                            <p>Completely grow multimedia based content before global scenarios.</p>
                        </div>
                    </div>
                    {/* Benefit 2 */}
                    <div className="benefit">
                        <img src="https://w7.pngwing.com/pngs/797/993/png-transparent-graphy-24-7-service-customer-service-twenty-four-miscellaneous-text-service.png" alt="24/7 Unlimited Support" />
                        <div>
                            <h3>24/7 Unlimited Support</h3>
                            <p>Completely grow multimedia based content before global scenarios.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
