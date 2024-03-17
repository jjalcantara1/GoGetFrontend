import axios from 'axios';

// actions/roomAvailabilityActions.js

export const checkRoomAvailability = (start_date, end_date, guestCount = '1') => async (dispatch) => {
  try {
    dispatch({ type: 'ROOM_AVAILABILITY_REQUEST' });

    const url = `http://localhost:8000/api/available-room-types/?start_date=${encodeURIComponent(start_date)}&end_date=${encodeURIComponent(end_date)}&guest_count=${encodeURIComponent(guestCount)}`;
    const { data } = await axios.get(url);
    dispatch({
      type: 'ROOM_AVAILABILITY_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'ROOM_AVAILABILITY_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

