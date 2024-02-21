import React from 'react';
import './GuestLog.css';
import Table from 'react-bootstrap/Table';

function GuestLog() {
  return (
    <div>
    <div className='roomTitle'>Guest Log</div>
    <Table striped bordered hover className="custom-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Room Number</th>
          <th>Room Type</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text"   /></td>
          <td><input type="text"   /></td>
          <td><input type="text"   /></td>
          <td><input type="text"   /></td>
          <td><input type="text"   /></td>
          <td><input type="text"   /></td>
          
        </tr>
      </tbody>
    </Table>

  
  </div>
  )
}

export default GuestLog