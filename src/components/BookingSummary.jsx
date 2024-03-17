// BookingSummary.jsx
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const BookingSummary = ({ roomsDetails }) => {
    const calculateTotal = () => {
      return roomsDetails.reduce((total, room) => {
        const roomPrice = room.roomType ? parseFloat(room.roomType.price) : 0; // Convert price to a number
        return total + roomPrice;
      }, 0);
    };
  
    return (
      <>
        <h4>Booking Summary</h4>
        <ListGroup>
          {roomsDetails.map((roomDetail, index) => (
            <ListGroupItem key={index}>
              Room {index + 1}: {roomDetail.roomType ? roomDetail.roomType.name : 'Not selected'}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h5>Total Cost: ${calculateTotal().toFixed(2)}</h5> {/* Optionally format the total to two decimal places */}
      </>
    );
  };
  
  export default BookingSummary;
  
