// RoomTypeList.js

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AdminButton from '../components/AdminButton';
import { Col} from 'react-bootstrap';

const RoomTypeList = () => {
  const [roomTypes, setRoomTypes] = useState([]); // Corrected variable name
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/roomtypes/');
        setRoomTypes(response.data);
      } catch (error) {
        console.error('There was an error fetching the room types', error);
      }
    };

    fetchRoomTypes();
  }, []);

  const handleEditRoomType = (id) => {
    navigate(`/roomtypes/${id}/edit`); // Navigate to the edit form
  };

  const handleDeleteRoomType = async (id) => {
    // Confirm before delete
    if (window.confirm('Are you sure you want to delete this room type?')) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/roomtypes/c/`);
        // Remove the room type from the state
        setRoomTypes(roomTypes.filter((type) => type.id !== id));
      } catch (error) {
      console.error('There was an error deleting the room type', error);
      }
      }
      };
      
      return (
      <div className="container">
      <Header />
      <h2 className="text-center my-4">ADMIN - Room Types</h2>

      <Link to="/roomtypes/new"><Col md="auto"><AdminButton text="Add Room Type" /></Col></Link>

      <div className="card-deck">
      {roomTypes.length === 0 && <p>No room types found.</p>}
      {roomTypes.map((type) => (
      <div key={type.id} className="card">
      <img src={type.image} className="card-img-top" alt={type.name} />
      <div className="card-body">
      <h5 className="card-title">{type.name}</h5>
      <p className="card-text">{type.description}</p>
      <p className="card-text">Price: {type.price}</p>
      <p className="card-text">Capacity: {type.capacity}</p>
      <p className="card-text">Features: {type.features}</p>
      <p className="card-text">Total Rooms: {type.total_rooms}</p>
      <div className="card-footer">
      <button className="btn btn-primary mr-2" onClick={() => handleEditRoomType(type.id)}>Edit</button>
      <button className="btn btn-danger" onClick={() => handleDeleteRoomType(type.id)}>Delete</button>
      </div>
      </div>
      </div>
      ))}
      </div>
      </div>
      );
      };
      
      export default RoomTypeList;
