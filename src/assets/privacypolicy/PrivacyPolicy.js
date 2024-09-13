import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#F2F2F2', fontFamily: "'Poppins', sans-serif" }}>
      <div className="container py-5">
      <div className="col-12">
        <h1 className="text-center mb-2" style={{ color: '#343A40' }}>Privacy Policy</h1>
        <p className="text-center mb-5" style={{ color: '#6c757d' }}><strong>Effective Date:</strong> September 7, 2024</p>

        <div className="row">
          <div className="col-12">
            <h2 className="mt-4" style={{ color: '#343A40' }}>Introduction</h2>
            <p className="text-justify" style={{ color: '#495057' }}>
              Welcome to our Privacy Policy page! When you use our web services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. This is important; we hope you will take time to read it carefully.
            </p>
          </div>

          <div className="col-12">
            <h2 className="mt-5" style={{ color: '#343A40' }}>Information We Collect</h2>
            <h3 className="mt-3" style={{ color: '#495057' }}>Personal Data</h3>
            <p className="text-justify" style={{ color: '#495057' }}>
              We collect personal data that you provide to us voluntarily when you register on our site, express an interest in obtaining information about us or our products and services, or otherwise contact us.
            </p>

            <h3 className="mt-3" style={{ color: '#495057' }}>Usage Data</h3>
            <p className="text-justify" style={{ color: '#495057' }}>
              We automatically collect certain data when you visit, use, or navigate the website. This data may include device and usage information, such as your IP address, browser and device characteristics, operating system, referring URLs, device name, country, location, information about how and when you use our website, and other technical information.
            </p>
          </div>

          <div className="col-12">
            <h2 className="mt-5" style={{ color: '#343A40' }}>How We Use Your Information</h2>
            <h3 className="mt-3" style={{ color: '#495057' }}>Providing and Improving Services</h3>
            <p className="text-justify" style={{ color: '#495057' }}>
              We use your information to provide, operate, and maintain our services, as well as to improve, personalize, and expand our services.
            </p>

            <h3 className="mt-3" style={{ color: '#495057' }}>Communications</h3>
            <p className="text-justify" style={{ color: '#495057' }}>
              We may use your information to contact you regarding your use of our services or to inform you of important updates, with your consent.
            </p>
          </div>

          <div className="col-12">
            <h2 className="mt-5" style={{ color: '#343A40' }}>Sharing Your Information</h2>
            <p className="text-justify" style={{ color: '#495057' }}>
              We do not share your personal data with third parties without your consent, except in specific situations such as compliance with the law, protection of our rights, or in the course of business transfers.
            </p>
          </div>

          <div className="col-12">
            <h2 className="mt-5" style={{ color: '#343A40' }}>Your Rights</h2>
            <p className="text-justify" style={{ color: '#495057' }}>
              Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete your information. Please contact us to exercise these rights.
            </p>
          </div>

          <div className="col-12">
            <h2 className="mt-5" style={{ color: '#343A40' }}>Changes to This Policy</h2>
            <p className="text-justify" style={{ color: '#495057' }}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </div>

          <div className="col-12">
            <h2 className="mt-5" style={{ color: '#343A40' }}>Contact Us</h2>
            <p className="text-justify" style={{ color: '#495057' }}>
              If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
