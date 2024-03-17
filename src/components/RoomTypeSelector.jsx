// RoomTypeSelector.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const RoomTypeSelector = ({ guestCount, availableRoomTypes, onRoomTypeSelected }) => {
  return (
    <>
      {availableRoomTypes.map((roomType) => (
        <Card key={roomType.id} className="my-3 p-3 rounded">
          <Card.Body>
            <Card.Title>{roomType.name}</Card.Title>
            <Card.Text>Price per night: {roomType.price}</Card.Text>
            <Card.Text>Capacity: {roomType.capacity}</Card.Text>
            <Button onClick={() => onRoomTypeSelected(roomType.id)} variant="primary">
              Select
            </Button>
          </Card.Body>
        </Card>
      ))} Next Room
    </>
  );
};

export default RoomTypeSelector;
