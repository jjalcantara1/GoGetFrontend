import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AdminButton from '../components/AdminButton';
import { Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomTypes, deleteRoomType } from '../actions/roomTypeActions';
import '../RoomType.css';

const RoomTypeList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomTypes = useSelector((state) => state.roomTypes.roomTypes); // Adjust based on your state structure

  useEffect(() => {
    dispatch(fetchRoomTypes());
  }, [dispatch]);

  const handleDeleteRoomType = async (id) => {
    if (window.confirm('Are you sure you want to delete this room type?')) {
      dispatch(deleteRoomType(id));
    }
  };

  const handleSeeRooms = (roomTypeId) => {
    navigate(`/roomtypes/${roomTypeId}/rooms`);
  };
  
  const handleEditRoomType = (id) => {
    navigate(`/roomtypes/${id}/edit`); // Navigate to the edit form
  };

      return (
      <div className="container">

        <div className="AdminTitle"> ADMIN - Room Types </div>
   
      <Link to="/roomtypes/new">
        
        <Col md="auto"><AdminButton className= 'RoomTitle' text="Add Room Type" /></Col></Link>

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
      <button className="btn btn-primary mr-2" onClick={() => handleSeeRooms(type.id)}>See Rooms</button>
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
