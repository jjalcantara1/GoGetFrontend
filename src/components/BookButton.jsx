import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BookButton = ({ bookingDetails }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    // Here you can store the booking details in a state management store or pass them to the /order route if needed
    // For example, if you're using Redux or Context API, dispatch the booking details to the store

    navigate('/order', { state: { bookingDetails } }); // Passing bookingDetails via state (optional)
  };

  return (
    <Button variant="primary" onClick={handleBooking}>
      Proceed to Booking
    </Button>
  );
};

export default BookButton;
