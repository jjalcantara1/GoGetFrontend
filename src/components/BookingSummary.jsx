import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PromoRedeem from './PromoRedeem'; // Import PromoRedeem component

const BookingSummary = ({ roomsDetails, selectedNumDays }) => {
  const [initialTotalCost, setInitialTotalCost] = useState(0); // State to hold initial total cost
  const [updatedTotalCost, setUpdatedTotalCost] = useState(0); // State to hold updated total cost

  // Function to update total cost
  const updateTotalCost = (newTotalCost) => {
    setUpdatedTotalCost(newTotalCost);
  };

  // Calculate total cost
  const calculateTotal = () => {
    return roomsDetails.reduce((total, room) => {
      const roomPrice = room.roomType ? parseFloat(room.roomType.price) * selectedNumDays : 0;
      return total + roomPrice;
    }, 0);
  };

  // Initialize total cost on component mount
  useEffect(() => {
    const initialCost = calculateTotal();
    setInitialTotalCost(initialCost);
    setUpdatedTotalCost(initialCost);
  }, [roomsDetails, selectedNumDays]);

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
      <h5>Total Cost: ${initialTotalCost.toFixed(2)}</h5> {/* Display initial total cost */}
      <PromoRedeem originalTotalCost={initialTotalCost} updateTotalCost={updateTotalCost} /> {/* Pass initial total cost and update function */}
      {updatedTotalCost !== initialTotalCost && ( // Display updated total cost if it's different from the initial total cost
        <h5>New Total Cost: ${updatedTotalCost.toFixed(2)}</h5>
      )}
    </>
  );
};

export default BookingSummary;
