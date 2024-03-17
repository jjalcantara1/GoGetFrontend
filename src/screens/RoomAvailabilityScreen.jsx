import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { checkRoomAvailability } from '../actions/roomAvailabilityActions';
import { Container, Button, Row, Col, Form, Card } from 'react-bootstrap';
import RoomTypeSelector from '../components/RoomTypeSelector';
import BookingSummary from '../components/BookingSummary';

Modal.setAppElement('#root');

const RoomAvailabilityScreen = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState({
    start: new Date().toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0],
  });
  const [roomsDetails, setRoomsDetails] = useState([{ guests: 1, roomType: null }]);
  const dispatch = useDispatch();

  const { loading, error, rooms } = useSelector((state) => state.roomAvailability);

  useEffect(() => {
    dispatch(checkRoomAvailability(selectedDates.start, selectedDates.end));
  }, [dispatch, selectedDates]);

  const handleDateSelect = (selectInfo) => {
    setSelectedDates({
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    });
    setModalIsOpen(false);
  };

  const handleGuestCountChange = (index, delta) => {
    const updatedRoomsDetails = roomsDetails.map((detail, idx) =>
      idx === index ? { ...detail, guests: Math.min(Math.max(1, detail.guests + delta), 5) } : detail // Enforce max guests of 5
    );
    setRoomsDetails(updatedRoomsDetails);
  };

  const addRoom = () => {
    setRoomsDetails([...roomsDetails, { guests: 1, roomType: null }]);
  };

  const removeRoom = (index) => {
    const filteredRooms = roomsDetails.filter((_, idx) => idx !== index);
    setRoomsDetails(filteredRooms);
  };

  const onRoomTypeSelected = (roomTypeId, index) => {
    const newRoomsDetails = [...roomsDetails];
    const roomType = rooms.find(room => room.id === roomTypeId);
    newRoomsDetails[index].roomType = roomType;
    setRoomsDetails(newRoomsDetails);
  };

  return (
    <Container>
      <Button variant="primary" onClick={() => setModalIsOpen(true)}>Select Dates</Button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          select={handleDateSelect}
        />
      </Modal>

      {roomsDetails.map((roomDetail, index) => (
        <Row key={index} className="my-3">
          <Col xs={12}>
            <Form.Label>Room {index + 1} - Guests:</Form.Label>
            <div>
              <Button variant="outline-secondary" onClick={() => handleGuestCountChange(index, -1)} disabled={roomDetail.guests <= 1}>-</Button>
              <span> {roomDetail.guests} </span>
              <Button variant="outline-secondary" onClick={() => handleGuestCountChange(index, +1)}>+</Button>
            </div>
            {roomsDetails.length > 1 && (
              <Button variant="danger" onClick={() => removeRoom(index)}>Remove Room</Button>
            )}
          </Col>
        </Row>
      ))}
      <Button variant="primary" onClick={addRoom}>Add Another Room</Button>
      
      {selectedDates.start && selectedDates.end && roomsDetails.map((roomDetail, index) => (
        <RoomTypeSelector
          key={index}
          guestCount={roomDetail.guests}
          availableRoomTypes={rooms.filter(room => room.capacity >= roomDetail.guests)} // Filter rooms by capacity
          onRoomTypeSelected={(roomTypeId) => onRoomTypeSelected(roomTypeId, index)}
        />
      ))}
      
      <BookingSummary roomsDetails={roomsDetails} />
    </Container>
  );
};

export default RoomAvailabilityScreen;
