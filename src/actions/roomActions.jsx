
import axios from 'axios';
import { ADD_ROOM_REQUEST, ADD_ROOM_SUCCESS, ADD_ROOM_FAILURE } from '../constants/roomConstants';


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
  

  
  export const addRoom = (roomData) => async (dispatch) => {
    dispatch({ type: ADD_ROOM_REQUEST });
    try {
      console.log('Sending room creation data:', roomData);
      const response = await axios.post(`http://127.0.0.1:8000/api/rooms/`, roomData);
      console.log('Received response:', response.data);
      dispatch({
        type: ADD_ROOM_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error response:', error.response || error);
      dispatch({
        type: ADD_ROOM_FAILURE,
        payload: error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
      });
    }
  };
  
  
  


export const editRoom = (roomId, roomData) => async (dispatch) => {
  try {
      const response = await axios.put(`http://127.0.0.1:8000/api/rooms/${roomId}/`, roomData);
      dispatch({
          type: 'EDIT_ROOM',
          payload: response.data,
      });
  } catch (error) {
      console.error('Error editing room:', error);
  }
};


export const deleteRoom = (roomId) => {
  return {
      type: 'DELETE_ROOM',
      payload: roomId,
  };
};
