import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AddEditRoomType = () => {
  const initialFormState = {
    name: '',
    description: '',
    price: '',
    capacity: '',
    features: '',
    total_rooms: '',
    image: null,
  };
  const [formState, setFormState] = useState(initialFormState);
  const { id } = useParams(); // ID from URL for editing
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // We're in edit mode. Fetch the room type details to fill the form.
      axios.get(`http://127.0.0.1:8000/api/roomtypes/${id}/`)
        .then(response => {
          setFormState({ ...response.data, image: null }); // Reset image on edit
        })
        .catch(error => console.error('Fetching room type failed', error));
    }
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormState(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (const key in formState) {
      if (key !== 'image') {
        formData.append(key, formState[key]);
      }
    }
    if (formState.image instanceof File)
{
formData.append('image', formState.image);
}

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
};
    const method = id ? axios.put : axios.post;
    const url = id
    ? `http://127.0.0.1:8000/api/roomtypes/${id}/`
    : 'http://127.0.0.1:8000/api/roomtypes/';

    method(url, formData, config)
    .then(response => {
        alert('Room Type saved successfully!');
        navigate('/roomtypes'); // Redirect to the room types list
    })
    .catch(error => console.error('Saving room type failed', error));
    };

  return (
    <div>
      <h1>{id ? 'Edit' : 'Add'} Room Type</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formState.name} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formState.description} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formState.price} onChange={handleChange} required />
        </label>
        <label>
          Capacity:
          <input type="number" name="capacity" value={formState.capacity} onChange={handleChange} required />
        </label>
        <label>
          Features:
          <input type="text" name="features" value={formState.features} onChange={handleChange} required />
        </label>
        <label>
          Total Rooms:
          <input type="number" name="total_rooms" value={formState.total_rooms} onChange={handleChange} required />
        </label>
        <label>
            Image:
            <input type="file" name="image" onChange={handleImageChange} />
            {typeof formState.image === 'string' && (
            <img src={formState.image} alt="Room

            Type" style={{ maxWidth: '200px' }} />
            )}
            </label>
        <button type="submit">{id ? 'Update' : 'Create'} Room Type</button>
        </form>
        </div>
        );
        };
        
export default AddEditRoomType;
