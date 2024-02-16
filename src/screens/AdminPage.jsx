import React from "react";
import AdminTitle from "../components/AdminTitle";
import AdminButton from "../components/AdminButton";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavLogOut from "../components/NavLogOut";

const AdminPage = () => {
  return (
    <>
      <NavLogOut />
       <Container fluid className="px-0 min-vh-100 d-flex flex-column">
        <Container className="my-auto">
        <AdminTitle />
          <Row className="justify-content-md-center text-center">
            <Link to="/hotels/1">
              <Col md="auto">
                <AdminButton text="HOTEL DETAILS" />
              </Col>
            </Link>
            <Link to="/roomtypes">
              <Col md="auto">
                <AdminButton text="ROOM TYPES" />
              </Col>
            </Link>
            <Link to=" ">
              <Col md="auto">
                <AdminButton text="GUEST LOG" />
              </Col>
            </Link>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default AdminPage;
