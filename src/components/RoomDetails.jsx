// RoomDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AddEditRoomModal from './AddEditRoomModal';
import { useSelector, useDispatch } from 'react-redux';
import { getRoomsByType } from '../actions/roomActions';

const RoomDetails = () => {
    const { roomTypeId } = useParams();
    const [rooms, setRooms] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editableRoom, setEditableRoom] = useState(null);
    const dispatch = useDispatch();
    const fetchedRooms = useSelector(state => state.room.rooms); // Adjust according to your state structure

    useEffect(() => {
        dispatch(getRoomsByType(roomTypeId));
        setRooms(fetchedRooms); // Update local state when Redux state changes
    }, [dispatch, roomTypeId, fetchedRooms]);

  const handleDelete = async (roomId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/rooms/${roomId}/delete/`);
      setRooms(rooms.filter(room => room.id !== roomId));
    } catch (error) {
      console.error('Error deleting room:', error);
    }
  };

  const handleAdd = () => {
    setEditableRoom(null); // Clear any previous edits
    setShowModal(true); // Show the modal for adding a room
  };

  const handleEdit = (room) => {
    setEditableRoom(room); // Set the room to be edited
    setShowModal(true); // Show the modal for editing
  };

  const saveRoom = async (roomData, roomTypeId) => {
    const method = roomData.id ? 'put' : 'post';
    const url = roomData.id
      ? `http://127.0.0.1:8000/api/rooms/${roomData.id}/update/`
      : `http://127.0.0.1:8000/api/roomtypes/${roomTypeId}/rooms/add/`;

    try {
      const response = await axios[method](url, roomData);
      if (roomData.id) {
        // Update the room in the state
        setRooms(rooms.map(room => (room.id === response.data.id ? response.data : room)));
      } else {
        // Add the new room to the state
        setRooms([...rooms, response.data]);
      }
      setShowModal(false); // Close the modal
    } catch (error) {
      console.error('Error saving room:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
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
          <AddEditRoomModal
        showModal={showModal}
        closeModal={closeModal}
        saveRoom={saveRoom}
        roomDetails={editableRoom}
        roomTypeId={roomTypeId}
      />
        </div>
      ))}
    </div>
  );
};

export default RoomDetails;
