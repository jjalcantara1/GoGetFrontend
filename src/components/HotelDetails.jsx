
// HotelDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const HotelDetails = () => {
  const [hotel, setHotel] = useState({
    name: '',
    address: '',
    description: '',
    contact_no: '',
    email: '',
    image: null // Assuming you will handle image as a file
  });
  const navigate = useNavigate();
//   const { id } = useParams(); // If you have multiple hotels

  useEffect(() => {
    // Fetch the hotel details
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/hotels/7/`); // Adjust for single hotel
        setHotel(response.data);
      } catch (error) {
        console.error('Error fetching hotel details:', error);
      }
    };
  
    fetchHotelDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (const key in hotel) {
        if (key !== 'image') {
            formData.append(key, hotel[key]);
        }
    }
    if (hotel.image instanceof File)
    {
    formData.append('image', hotel.image);
    }
    try {
        const response = await axios.put(`http://127.0.0.1:8000/api/hotels/7/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        alert('Hotel updated successfully!');
        navigate('');
    } catch (error) {
        console.error('Error updating hotel:', error);
        alert('Failed to update hotel');
    }
    };

// If you need to handle image changes
const handleImageChange = (e) => {
setHotel({ ...hotel, image: e.target.files[0] });
};

return (
<div>
<h2>Edit Hotel Details</h2>
<div className="hotel-display">
        <h3>Current Hotel Details:</h3>
        <p><strong>Name:</strong> {hotel.name}</p>
        <p><strong>Address:</strong> {hotel.address}</p>
        <p><strong>Description:</strong> {hotel.description}</p>
        <p><strong>Contact Number:</strong> {hotel.contact_no}</p>
        <p>
        <strong>Email:</strong> {hotel.email}</p>
        {hotel.image && <img src={hotel.image} alt="Hotel" style={{ maxWidth: '200px' }} />}
</div>

  {/* Edit form */}
  <form onSubmit={handleSubmit}>
    {/* Form inputs */}
    <input type="text" name="name" value={hotel.name} onChange={handleInputChange} />
    <input type="text" name="address" value={hotel.address} onChange={handleInputChange} />
    <textarea name="description" value={hotel.description} onChange={handleInputChange} />
    <input type="text" name="contact_no" value={hotel.contact_no} onChange={handleInputChange} />
    <input type="email" name="email" value={hotel.email} onChange={handleInputChange} />
    <input type="file" name="image" onChange={handleImageChange} />
    <button type="submit">Update Hotel</button>
  </form>
</div>
);
};

export default HotelDetails;