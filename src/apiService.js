// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/'; // Replace with your actual backend URL

export const getRoomTypes = async () => {
  try {
    const response = await axios.get(`${API_URL}roomtypes/`);
    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
  }
};

// Add more functions for other CRUD operations as needed
