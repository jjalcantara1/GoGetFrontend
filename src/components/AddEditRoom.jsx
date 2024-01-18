import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addRoom, editRoom } from '../actions/roomActions';

const AddEditRoom = ({ roomTypes, room, onSave, onCancel }) => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    number: '',
    is_available: true,
    is_smoking: false,
    is_pet_friendly: false,
    room_type: '',
  });

  // Set form state if room is provided for editing
  useEffect(() => {
    if (room) {
      setFormState({ ...room });
    }
  }, [room]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (room) {
      dispatch(editRoom(formState));
    } else {
      dispatch(addRoom(formState));
    }
    onSave(); // This function should close the modal or redirect the user
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Room number input */}
      <input
        type="text"
        name="number"
        value={formState.number}
        onChange={handleChange}
        placeholder="Room Number"
        required
      />
      {/* Room type select */}
      <select
        name="room_type"
        value={formState.room_type}
        onChange={handleChange}
        required
      >
        <option value="">Select Room Type</option>
        {roomTypes.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </select>
      {/* Other checkboxes and inputs */}
      <label>
        Available:
        <input
          type="checkbox"
          name="is_available"
          checked={formState.is_available}
          onChange={handleChange}
        />
      </label>
      {/* ... other fields ... */}
      {/* Submit button */}
      <button type="submit">{room ? 'Update' : 'Add'} Room</button>
      {/* Cancel button */}
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default AddEditRoom;
