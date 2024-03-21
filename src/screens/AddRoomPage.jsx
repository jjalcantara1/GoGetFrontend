import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addRoom } from '../actions/roomActions';

const AddRoomPage = () => {
    const { roomTypeId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [roomDetails, setRoomDetails] = useState({
        number: '',
        is_available: true,
        is_smoking: false,
        is_pet_friendly: false,
    });

    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        setRoomDetails({
            ...roomDetails,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { 
          ...roomDetails,
          room_type_id: roomTypeId // assuming roomTypeId is the correct id of the room type
        };
        
        dispatch(addRoom(payload))
          .then(() => {
            navigate(`/roomtypes/${roomTypeId}/rooms`);
          })
          .catch((error) => {
            console.error('Error adding room:', error);
          });
      };
      
      

    return (
        <div>
            <h2>Add a New Room</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Room Number:</label>
                    <input
                        type="number"
                        name="number"
                        value={roomDetails.number}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Smoking Allowed:</label>
                    <input
                        type="checkbox"
                        name="is_smoking"
                        checked={roomDetails.is_smoking}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Pet Friendly:</label>
                    <input
                        type="checkbox"
                        name="is_pet_friendly"
                        checked={roomDetails.is_pet_friendly}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Add Room</button>
            </form>
        </div>
    );
};

export default AddRoomPage;
