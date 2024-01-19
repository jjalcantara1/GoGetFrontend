import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditRoomPage = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();
    const [roomDetails, setRoomDetails] = useState({
        number: '',
        is_available: true,
        is_smoking: false,
        is_pet_friendly: false,
        room_type_id: null, // Added room_type_id to the state
    });

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/rooms/${roomId}/`);
                setRoomDetails({
                    ...response.data,
                    room_type_id: response.data.room_type, // Assuming 'room_type' is the field in the response
                });
            } catch (error) {
                console.error('Error fetching room data:', error);
            }
        };

        fetchRoomData();
    }, [roomId]);

    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        setRoomDetails({
            ...roomDetails,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/rooms/${roomId}/`, roomDetails);
            if (roomDetails.room_type_id) {
                navigate(`/roomtypes/${roomDetails.room_type_id}/rooms`);
            } else {
                console.error('Room type ID is undefined');
            }
        } catch (error) {
            console.error('Error editing room:', error);
        }
    };

    return (
        <div>
            <h2>Edit Room</h2>
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
                <button type="submit">Update Room</button>
            </form>
        </div>
    );
};

export default EditRoomPage;
