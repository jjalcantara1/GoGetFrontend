import React from 'react';
import Header from '../components/Header'; 
import AdminTitle from '../components/AdminTitle';
import AdminButton from '../components/AdminButton'; 
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <Container fluid className="px-0 min-vh-100 d-flex flex-column">
      <Container className="my-auto">
        <AdminTitle />
        <Row className="justify-content-md-center text-center">
          <Col md="auto"><AdminButton text="HOTEL ROOMS" /></Col>
          <Link to="/roomtypes"><Col md="auto"><AdminButton text="ROOM TYPES" /></Col></Link>
          <Col md="auto"><AdminButton text="GUEST LOG" /></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AdminPage;
