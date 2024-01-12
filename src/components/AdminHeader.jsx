import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="primary" variant="dark" className="justify-content-between">
    <Navbar.Brand>GoGet</Navbar.Brand>
    <Button variant="secondary">Log Out</Button>
  </Navbar>
);

export default Header;
