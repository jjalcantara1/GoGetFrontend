import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import { fetchAvailableRooms } from '../utils/apiService'; // You need to create this API fetch utility

const RoomAvailabilityScreen = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [availableRooms, setAvailableRooms] = useState([]);

  const handleDateSelect = (selectInfo) => {
    // FullCalendar provides start and end dates in selectInfo object
    let start = selectInfo.startStr;
    let end = selectInfo.endStr;

    setStartDate(start);
    setEndDate(end);

    // Fetch available rooms from your API
    fetchAvailableRooms(start, end).then((rooms) => {
      setAvailableRooms(rooms);
    });
  };

  const handleRoomBook = (room) => {
    // Redirect to booking page with selected room and dates
    // This is a placeholder, implement as per your application's routing
    console.log(`Book room: ${room.id} from ${startDate} to ${endDate}`);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
      />
      <div>
        {availableRooms.map((room) => (
          <div key={room.id}>
            <h3>{room.name}</h3>
            <p>Price per night: {room.price}</p>
            <button onClick={() => handleRoomBook(room)}>Book Room</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomAvailabilityScreen;
