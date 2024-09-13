import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Tabs, Tab, Form, Button, Image } from 'react-bootstrap';
import './Contact.css';
import berg from '../../images/berg.jpg';
import pris from '../../images/pris.jpg';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Header from './PagesHeader.js';
import '@fortawesome/fontawesome-free/css/all.css';

function Contact() {
  return (
    
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      
      <Row className="my1-4">
        <Col className="text-center">
        </Col>
      </Row>
      <Container className="contact-section">
        <Row className="justify-content-center">
          <Col>
            <Tabs defaultActiveKey="new-york" id="office-tabs" className="mb-3 justify-content-center custom-tab1">
              <Tab eventKey="new-york" title="New York Office" >
                <Row className="justify-content-center">
                  <Col md={12}>
                    <div className="contact-info p-4">
                      <Row className="text-center">
                        <Col xs={12} md={4} className="contact-item">
                          <div className="icon-circle">
                            <FaPhoneAlt className="contact-icon" />
                          </div>
                          <div className="contact-text">
                            <h5>Phone Number</h5>
                            <p>+569 (58) 3259-3256</p>
                            <p>+569 (58) 3259-3256</p>
                          </div>
                        </Col>
                        <Col xs={12} md={4} className="contact-item">
                          <div className="icon-circle">
                            <FaEnvelope className="contact-icon" />
                          </div>
                          <div className="contact-text">
                            <h5>Email Address</h5>
                            <p>info@tronix.com</p>
                            <p>inside.24tronix.com</p>
                          </div>
                        </Col>
                        <Col xs={12} md={4} className="contact-item">
                          <div className="icon-circle">
                            <FaMapMarkerAlt className="contact-icon" />
                          </div>
                          <div className="contact-text">
                            <h5>Office Address</h5>
                            <p>25 Hilton Street, Miana</p>
                            <p>Frankfurt, DE</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="washington" title="Washington Office" >
                <Row className="justify-content-center">
                  <Col md={12}>
                    <div className="contact-info p-4">
                      <Row className="text-center">
                        <Col xs={12} md={4} className="contact-item">
                          <div className="icon-circle">
                            <FaPhoneAlt className="contact-icon" />
                          </div>
                          <div className="contact-text">
                            <h5>Phone Number</h5>
                            <p>+569 (58) 3259-3256</p>
                            <p>+569 (58) 3259-3256</p>
                          </div>
                        </Col>
                        <Col xs={12} md={4} className="contact-item">
                          <div className="icon-circle">
                            <FaEnvelope className="contact-icon" />
                          </div>
                          <div className="contact-text">
                            <h5>Email Address</h5>
                            <p>info@tronix.com</p>
                            <p>inside.24tronix.com</p>
                          </div>
                        </Col>
                        <Col xs={12} md={4} className="contact-item">
                          <div className="icon-circle">
                            <FaMapMarkerAlt className="contact-icon" />
                          </div>
                          <div className="contact-text">
                            <h5>Office Address</h5>
                            <p>25 Hilton Street, Miana</p>
                            <p>Frankfurt, DE</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      <br/>
      <Container className="contact-section bg-light p-4 rounded shadow-sm">
  <Row>
    <Col md={6} className="mb-4 mb-md-0">
      <h1 className="display-5 text-black">We'd love to hear from you.</h1>
      <h6 className="font-weight-normal text-grey">
        At our IT solution company, we are committed to providing exceptional customer service and support.
        If you are experiencing technical difficulties or need assistance with one of our services,
      </h6>
      <h4 className="text-black">Your benefits:</h4>
      <Row className="gy-2">
        <Col xs={6} sm={2} md={1}>
          <p className="text-grey"><i className="fas fa-check-circle text-success"></i> Client-oriented</p>
        </Col>
        <Col xs={6} sm={2} md={1}>
          <p className="text-grey"><i className="fas fa-check-circle text-success"></i> Competent</p>
        </Col>
        <Col xs={6} sm={2} md={1}>
          <p className="text-grey"><i className="fas fa-check-circle text-success"></i> Problem-solving</p>
        </Col>
        <Col xs={6} sm={2} md={1}>
          <p className="text-grey"><i className="fas fa-check-circle text-success"></i> Independent</p>
        </Col>
        <Col xs={6} sm={2} md={1}>
          <p className="text-grey"><i className="fas fa-check-circle text-success"></i> Results-driven</p>
        </Col>
        <Col xs={6} sm={2} md={1}>
          <p className="text-grey"><i className="fas fa-check-circle text-success"></i> Transparent</p>
        </Col>
      </Row>
    </Col>
    <Col md={6}>
            <Form>
              <Row >
                <Col xs={12} md={6}>
                  <Form.Group controlId="formName">
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Control type="email" placeholder="Email Address" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formSubject" >
  <Form.Control as="select" className="custom-select">
    <option>Basic</option>
    <option>Technical Support</option>
    <option>Sales</option>
  </Form.Control>
</Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Submit Message
              </Button>
            </Form>
          </Col>
  </Row>
</Container>

      <br/>
      <Container className="contact-section">
      <h2 className="text-left mb-4">Your contact</h2>
        <Row className="my-4">
          <Col xs={12} md={5} className="d-flex align-items-center mb-4 mb-md-0">
            <Image src={berg} className="img-fluid small-img" alt="Berg Devien" />
            <div className="ms-3">
              <h5>Berg Devien</h5>
              <p>Head of communications</p>
              <p>Email: <a href="mailto:berg@consulting.wp">berg@consulting.wp</a></p>
              <p>Skype: <a href="skype:berg.consulting">berg.consulting</a></p>
            </div>
          </Col>
          <Col xs={12} md={5}className="d-flex align-items-center">
            <Image src={pris} className="img-fluid small-img" alt="Priscilla Sorvino" />
            <div className="ms-3">
              <h5>Priscilla Sorvino</h5>
              <p>Head of communications</p>
              <p>Email: <a href="mailto:priscilla@consulting.wp">priscilla@consulting.wp</a></p>
              <p>Skype: <a href="skype:priscilla.consulting">priscilla.consulting</a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
