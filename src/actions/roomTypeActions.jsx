import axios from 'axios';
import {
    FETCH_ROOM_TYPES_REQUEST,
    FETCH_ROOM_TYPES_SUCCESS,
    FETCH_ROOM_TYPES_FAIL
  } from '../constants/roomConstants';
  
export const fetchRoomTypes = () => async (dispatch) => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/roomtypes/');
    dispatch({
      type: 'FETCH_ROOM_TYPES_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    console.error('There was an error fetching the room types', error);
  }
};

export const deleteRoomType = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://127.0.0.1:8000/api/roomtypes/${id}/`);
    dispatch({
      type: 'DELETE_ROOM_TYPE',
      payload: id,
    });
  } catch (error) {
    console.error('There was an error deleting the room type', error);
  }
};

export const getAllRoomTypes = () => async (dispatch) => {
    try {
      dispatch({ type: FETCH_ROOM_TYPES_REQUEST });
  
      const { data } = await axios.get(`http://localhost:8000/api/roomtypes/`);
  
      dispatch({
        type: FETCH_ROOM_TYPES_SUCCESS,
        payload: data,
      });
  
    } catch (error) {
      dispatch({
        type: FETCH_ROOM_TYPES_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };

  export const fetchRoomTypesDetail = (id) => async (dispatch) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/roomtypes/${id}/`);
      dispatch({
        type: 'FETCH_ROOM_TYPES_SUCCESS',
        payload: response.data,
      });
      console.log(response.data);
    } catch (error) {
      console.error('There was an error fetching the room types', error);
      dispatch({
        type: 'FETCH_ROOM_TYPES_FAILURE',
        payload: error.message,
      });
    }
  };
   