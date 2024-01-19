// RoomDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRoomsByType, deleteRoom } from '../actions/roomActions';
import '../bootstrap.min.css'; 

const RoomDetails = () => {
    const navigate = useNavigate(); 
    const { roomTypeId } = useParams();
    const [rooms, setRooms] = useState([]);
    const dispatch = useDispatch();
    const fetchedRooms = useSelector(state => state.room.rooms);

    useEffect(() => {
        dispatch(getRoomsByType(roomTypeId));
    }, [dispatch, roomTypeId]);
    
    useEffect(() => {
        if (JSON.stringify(rooms) !== JSON.stringify(fetchedRooms)) {
            setRooms(fetchedRooms);
        }
    }, [fetchedRooms, rooms]); // Added rooms to the dependency array

    useEffect(() => {
        console.log("Rooms updated", rooms);
    }, [rooms]);

    const handleDelete = async (roomId) => {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/rooms/${roomId}/delete/`);
        dispatch(deleteRoom(roomId)); // Dispatching an action to update the Redux store
    } catch (error) {
        console.error('Error deleting room:', error);
    }
  };
  
  const handleAdd = () => {
    navigate(`/roomtypes/${roomTypeId}/addroom`);
};


  const handleEdit = (room) => {
    navigate(`/rooms/${room.id}/edit`);
  };


  return (
    <div>
        <h2>Room Details</h2>
        <button onClick={handleAdd}>Add Room</button>
        {rooms.map(room => (
            <div key={room.id}>
                <p>Room Number: {room.number}</p>
                <button onClick={() => handleEdit(room)}>Edit</button>
                <button onClick={() => handleDelete(room.id)}>Delete</button>
            </div>
        ))}
       
    </div>
);
};


export default RoomDetails;
