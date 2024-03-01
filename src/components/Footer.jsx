import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Header.css';

function Footer() {
  return (
    <footer className="footer move-up">
      <Container className="footerText">
        <Row>
          <Col className="footerText py-3">
            Copyright &copy; 2023. Goget in Angeles Pampanga, Philippines. All
            Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
