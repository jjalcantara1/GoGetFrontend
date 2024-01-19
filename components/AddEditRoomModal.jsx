// AddEditRoomModal.js
import React, { useState, useEffect } from 'react';

const AddEditRoomModal = ({ showModal, closeModal, saveRoom, roomDetails, roomTypeId }) => {
  const [formState, setFormState] = useState({
    number: '',
    is_available: true,
    is_smoking: false,
    is_pet_friendly: false,
  });

  // If editing, initialize the form state with room details
  useEffect(() => {
    if (roomDetails) {
      setFormState(roomDetails);
    }
  }, [roomDetails]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveRoom(formState, roomTypeId);
  };

  // Only render the modal if showModal is true
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label>
            Room Number:
            <input
              type="text"
              name="number"
              value={formState.number}
              onChange={handleChange}
              required
            />
          </label>
          {/* Add other form fields for room properties */}
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddEditRoomModal;
