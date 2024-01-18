// actions/roomActions.js
import axios from 'axios';

export const getRoomsByType = (roomTypeId) => async (dispatch) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/roomtypes/${roomTypeId}/rooms/`);
      dispatch({
        type: 'GET_ROOMS_BY_TYPE',
        payload: response.data,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };
  
  // Add more actions for add, edit, delete
  