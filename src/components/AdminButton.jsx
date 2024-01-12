import React from 'react';
import { Button } from 'react-bootstrap';

const AdminButton = ({ text }) => (
  <Button variant="outline-primary" size="lg" className="m-2">
    {text}
  </Button>
);

export default AdminButton;
