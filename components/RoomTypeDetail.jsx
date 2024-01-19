// // RoomTypeDetail.js

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const RoomTypeDetail = () => {
//   const [roomType, setRoomType] = useState(null);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRoomTypeDetail = async () => {
//       try {
//         const response = await axios.get(`/api/roomtypes/${id}/`);
//         setRoomType(response.data);
//       } catch (error) {
//         console.error('There was an error fetching the room type details', error);
//       }
//     };

//     fetchRoomTypeDetail();
//   }, [id]);

//   const handleEdit = () => {
//     navigate(`/edit-room-type/${id}`); // Replace with your actual path to the edit form
//   };

//   if (!roomType) return <div>Loading...</div>;

//   return (
//     <div className="room-type-detail">
//       <h2>{roomType.name}</h2>
//       <p>Description: {roomType.description}</p>
//       <p>Price: {roomType.price}</p>
//       <p>Capacity: {roomType.capacity}</p>
//       <p>Features: {roomType.features}</p>
//       <p>Total Rooms: {roomType.total_rooms}</p>
//       {/* Add more fields as needed */}
//       <button onClick={handleEdit}>Edit Room Type</button>
//     </div>
//   );
// };

// export default RoomTypeDetail;
