import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { checkRoomAvailability } from '../actions/roomAvailabilityActions';
import { Card } from 'react-bootstrap'; // Import Card from react-bootstrap

Modal.setAppElement('#root');

const RoomAvailabilityScreen = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState({
    start: new Date().toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0],
  });
  const [guestCount, setGuestCount] = useState(1);

  const dispatch = useDispatch();
  const roomAvailability = useSelector((state) => state.roomAvailability);
  const { loading, error, rooms } = roomAvailability;

  // Fetch room availability on component mount and when guestCount changes
  useEffect(() => {
    dispatch(checkRoomAvailability(selectedDates.start, selectedDates.end, guestCount));
  }, [dispatch, selectedDates, guestCount]);

  // Function to handle date selection on the calendar
  const handleDateSelect = (selectInfo) => {
    setSelectedDates({
      start: selectInfo.startStr.split('T')[0],
      end: selectInfo.endStr.split('T')[0],
    });
    setModalIsOpen(false);
  };

  // Function to handle change in guest count
  const handleGuestCountChange = (e) => {
    setGuestCount(e.target.value);
  };

  // Filter rooms to show those that can fit at least the specified number of guests
  const filteredRooms = rooms.filter(room => room.capacity >= guestCount);

  // Render the room types in a card layout
  const renderRoomTypeCards = (roomTypes) => {
    return roomTypes.map((roomType) => (
      <Card key={roomType.id} className="my-3 p-3 rounded">
        <Card.Body>
          <Card.Title as="div">
            <strong>{roomType.name}</strong>
          </Card.Title>
          <Card.Text as="div">
            Price per night: {roomType.price}
          </Card.Text>
          <Card.Text as="div">
            Capacity: {roomType.capacity}
          </Card.Text>
          <button className="btn btn-primary">Book Room</button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Select Dates</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          select={handleDateSelect}
        />
      </Modal>
      <div className="my-3">
        <label>Number of guests: </label>
        <input type="number" value={guestCount} onChange={handleGuestCountChange} min={1} />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        <h2>Available Room Types</h2>
        {selectedDates.start && selectedDates.end && (
          <p>Showing availability for: {selectedDates.start} to {selectedDates.end}</p>
        )}
        {filteredRooms.length > 0 ? renderRoomTypeCards(filteredRooms) : <p>No rooms available for the selected dates and number of guests.</p>}
      </div>
    </div>
  );
};

export default RoomAvailabilityScreen;
