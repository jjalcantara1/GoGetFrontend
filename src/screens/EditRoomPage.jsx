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
        room_type_id: null, // Initialize room_type_id state
    });

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/rooms/${roomId}/`);
                console.log('Fetched room data:', response.data);
      
                // Directly use room_type_id if it's present in the response
                if (typeof response.data.room_type_id === 'number') {
                    setRoomDetails({
                        ...response.data,
                        room_type_id: response.data.room_type_id,
                    });
                } else {
                    console.error('Room type ID is missing in the fetched data');
                }
            } catch (error) {
                console.error('Error fetching room data:', error);
            }
        };
    
        fetchRoomData();
    }, [roomId]);
    

    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        setRoomDetails(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!roomDetails.room_type_id) {
            console.error('Room type ID is undefined, not submitting');
            return;
        }

        const payload = {
            ...roomDetails,
            room_type_id: roomDetails.room_type_id
        };

        console.log('Sending room update data:', payload);

        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/rooms/${roomId}/`, payload);
            console.log('Received response:', response.data);
            navigate(`/roomtypes/${payload.room_type_id}/rooms`);
        } catch (error) {
            console.error('Error editing room:', error.response ? error.response.data : error.message);
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
