import React from 'react'; // Import React
import ServiceCard from './ServiceCard'; // Import ServiceCard component
import Sidebar from './Sidebar'; // Import Sidebar component
import './ServicesGrid.css'; // Import CSS file for ServicesGrid component
import Header from '../contact/PagesHeader'; // Import Header component
import Footer from './Footer'; // Import Footer component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faCode, faCloud, faBullhorn, faMobileAlt, faChartLine, faShieldAlt, faCreditCard, faServer, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import specific icons from FontAwesome

// Array of services with title, description, and icon for each service
const services = [
  {
    title: "Web Solutions",
    description: "E-commerce solutions (websites, Amazon, Flipkart listings), custom development (web and software)",
    icon:  <FontAwesomeIcon icon={faCode} /> // Icon for Web Solutions
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for efficient and reliable business operations.",
    icon: <FontAwesomeIcon icon={faCloud} /> // Icon for Cloud Solutions
  },
  {
    title: "Marketing Solutions",
    description: "SEO, marketing, branding, online marketing, WhatsApp marketing.",
    icon: <FontAwesomeIcon icon={faBullhorn} /> // Icon for Marketing Solutions
  },
  {
    title: "App Development",
    description: "Robust and user-friendly mobile applications from concept to deployment.",
    icon: <FontAwesomeIcon icon={faMobileAlt} /> // Icon for App Development
  },
  {
    title: "Analytics and Reporting",
    description: "Detailed analytics and reporting to help you make data-driven decisions.",
    icon: <FontAwesomeIcon icon={faChartLine} /> // Icon for Analytics and Reporting
  },
  {
    title: "Security Services",
    description: "Ensuring digital assets are protected against potential threats.",
    icon: <FontAwesomeIcon icon={faShieldAlt} /> // Icon for Security Services
  },
  {
    title: "Payment Gateways",
    description: "Secure and reliable payment gateway integration.",
    icon: <FontAwesomeIcon icon={faCreditCard} /> // Icon for Payment Gateways
  },
  {
    title: "Hosting Services",
    description: "Reliable hosting to ensure your website is always up and running.",
    icon: <FontAwesomeIcon icon={faServer} /> // Icon for Hosting Services
  },
  {
    title: "Email Services",
    description: "Professional email services to enhance business communication.",
    icon: <FontAwesomeIcon icon={faEnvelope} /> // Icon for Email Services
  }
];

// Functional component for ServicesGrid
const ServicesGrid = () => (
  <>
    {/* Render Header component */}
    <div className="services-page"> {/* Container for the services page */}
      <div className="content"> {/* Main content area */}
        <div className="services-list"> {/* Grid container for the list of services */}
          {services.map((service, index) => ( // Iterate over services array and render a ServiceCard for each service
            <ServiceCard
              key={index} // Unique key for each service card
              title={service.title} // Title of the service
              description={service.description} // Description of the service
              icon={service.icon} // Icon of the service
            />
          ))}
        </div>
        <Sidebar /> {/* Render Sidebar component */}
      </div>
    </div>
    <Footer /> {/*Render Footer component*/}
  </>
);

export default ServicesGrid; // Export ServicesGrid component
