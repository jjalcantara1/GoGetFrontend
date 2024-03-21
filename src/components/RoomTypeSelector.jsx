// RoomTypeSelector.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const RoomTypeSelector = ({ roomTypes, onRoomTypeSelected }) => {
  if (!roomTypes) {
    return <div>Loading...</div>; // Or some other placeholder content
  }

  return (
    <>
      {roomTypes.map((roomType) => (
        <div key={roomType.id} className="room-type-card">
          <h5>{roomType.name}</h5>
          <p>Price per night: {roomType.price}</p>
          <p>Capacity: {roomType.capacity}</p>
          {/* Standard room */}
          <Button variant="primary" onClick={() => onRoomTypeSelected(roomType, 'standard')}>Select Standard</Button>
          {/* Pet-friendly room */}
          {roomType.is_pet_friendly && (
            <Button variant="success" onClick={() => onRoomTypeSelected(roomType, 'petFriendly')}>Pet Friendly</Button>
          )}
          {/* Smoking room */}
          {roomType.is_smoking && (
            <Button variant="warning" onClick={() => onRoomTypeSelected(roomType, 'smoking')}>Smoking Room</Button>
          )}
          {/* Both options */}
          {roomType.is_pet_friendly && roomType.is_smoking && (
            <Button variant="info" onClick={() => onRoomTypeSelected(roomType, 'both')}>Both</Button>
          )}
        </div>
      ))}
    </>
  );
};


export default RoomTypeSelector;
