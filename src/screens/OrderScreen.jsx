import React, { useState } from 'react';
import axios from 'axios';

function OrderScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [bookingId, setBookingId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/book/order', {
        name: name,
        email: email,
        contact_no: contactNumber,
        booking_id: bookingId // Use consistent field name
      });
      console.log(response.data); // Log response for debugging
      // Handle success response
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />
  
        <label htmlFor="contact">Contact Number:</label><br />
        <input type="tel" id="contact" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} pattern="[0-9]{10}" required /><br /><br />
  
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />

        <label htmlFor="bookingId">Booking ID:</label><br />
        <input
          type="text"
          id="bookingId"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          required
        /><br /><br />
        
        <input type="submit" value="Submit" />

       
  
      </form>
    </div>
  );
}

export default OrderScreen;
