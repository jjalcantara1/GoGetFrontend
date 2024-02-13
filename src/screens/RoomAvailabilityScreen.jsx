import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { checkRoomAvailability } from '../actions/roomAvailabilityActions'; // Adjust the path as necessary
import { getAllRoomTypes } from '../actions/roomTypeActions';

Modal.setAppElement('#root');

const RoomAvailabilityScreen = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    // Calculate today and tomorrow's dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
  
    // Format dates as strings
    const todayStr = today.toISOString().split('T')[0];
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
  
    // Set selectedDates state to today's date by default
    const [selectedDates, setSelectedDates] = useState({
      start: todayStr,
      end: tomorrowStr,
    });
  
    const dispatch = useDispatch();
    const roomAvailability = useSelector((state) => state.roomAvailability);
    const { loading, error, rooms } = roomAvailability;
  
    // Load available room types for today's date when the component mounts
    useEffect(() => {
      dispatch(checkRoomAvailability(todayStr, tomorrowStr));
    }, [dispatch, todayStr, tomorrowStr]);

  const handleDateSelect = (selectInfo) => {
    const start = selectInfo.startStr.split('T')[0];
    const end = selectInfo.endStr.split('T')[0];
    
    setSelectedDates({ start, end }); // Save the selected dates
    setModalIsOpen(false); // Close the modal after date selection
    
    // Dispatch action to check room availability with selected dates
    dispatch(checkRoomAvailability(start, end));
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Select Dates</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Select Dates"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          select={handleDateSelect}
        />
      </Modal>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {rooms && rooms.length > 0 ? (
        <div>
          <h2>Available Room Types</h2>
          {selectedDates.start && selectedDates.end && (
            <p>
              Showing availability for: {selectedDates.start} to {selectedDates.end}
            </p>
          )}
          {rooms.map((roomType) => (
            <div key={roomType.id}>
              <h3>{roomType.name}</h3>
              <p>Price per night: {roomType.price}</p>
              <button>Book Room</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No rooms available for the selected dates.</p>
      )}
    </div>
  );
};

export default RoomAvailabilityScreen;
