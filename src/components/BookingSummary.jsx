// BookingSummary.jsx
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const BookingSummary = ({ roomsDetails, selectedNumDays }) => {
  const calculateTotal = () => {
    return roomsDetails.reduce((total, room) => {
      const roomPrice = room.roomType ? parseFloat(room.roomType.price) * selectedNumDays : 0;
      return total + roomPrice;
    }, 0);
  };

  // Helper function to display the preference as a string
  const preferenceLabel = (preference) => {
    switch (preference) {
      case 'standard':
        return '';
      case 'petFriendly':
        return ' (Pet Friendly)';
      case 'smoking':
        return ' (Smoking Room)';
      case 'both':
        return ' (Pet Friendly & Smoking Room)';
      default:
        return '';
    }
  };

  return (
    <>
      <h4>Booking Summary</h4>
      <ListGroup>
        {roomsDetails.map((roomDetail, index) => (
          <ListGroupItem key={index}>
            Room {index + 1}: {roomDetail.roomType ? `${roomDetail.roomType.name} for ${selectedNumDays} day(s)${preferenceLabel(roomDetail.preference)}` : 'Not selected'}
          </ListGroupItem>
        ))}
      </ListGroup>
      <h5>Total Cost: ${calculateTotal().toFixed(2)}</h5>
    </>
  );
};

export default BookingSummary;
