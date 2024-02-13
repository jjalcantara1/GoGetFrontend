import axios from 'axios';

export const checkRoomAvailability = (startDate, endDate) => async (dispatch) => {
  try {
    dispatch({ type: 'ROOM_AVAILABILITY_REQUEST' });

    // Update the URL to point to the 'available-room-types' endpoint
    const { data } = await axios.get(`http://localhost:8000/api/available-room-types/?start_date=${startDate}&end_date=${endDate}`);

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
