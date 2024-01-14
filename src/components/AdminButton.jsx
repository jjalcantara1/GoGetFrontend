import React from 'react';
import { Button } from 'react-bootstrap';
import "../index.css"

const AdminButton = ({ text }) => (
  <div className='ButtonStyle'> 
  <Button variant="outline-secondary" size="lg" className="m-2">
    <div className='ButtonText'>
      {text}
    </div>
  </Button>
  </div>
 
);

export default AdminButton;
