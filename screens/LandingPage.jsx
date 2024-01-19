import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // If you're using React Router for navigation

const LandingPage = () => {
  const navigate = useNavigate(); // For redirecting to the admin page

  const goToAdmin = () => {
    navigate('/admin'); // Redirect to the Admin component that we created earlier
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">GoGet</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#rooms">ROOMS</Nav.Link>
              <Nav.Link href="#faqs">FAQS</Nav.Link>
              <Nav.Link href="#contact">CONTACT US</Nav.Link>
            </Nav>
           
            <Nav>
              <Button variant="primary">Book Now</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="hero-section">
        {/* Background image and content goes here */}
      </Container>
      {/* Other page content */}
      <footer className="footer">
        {/* Footer content goes here */}
      </footer>
    </>
  );
};

export default LandingPage;
