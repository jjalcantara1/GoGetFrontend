import {
    FETCH_ROOM_TYPES_REQUEST,
    FETCH_ROOM_TYPES_SUCCESS,
    FETCH_ROOM_TYPES_FAIL,
    DELETE_ROOM_TYPE
  } from '../constants/roomConstants';
  
  const initialState = {
    loading: false,
    roomTypes: [],
    error: null
  };
  
  const roomTypesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ROOM_TYPES_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_ROOM_TYPES_SUCCESS:
        return {
          ...state,
          loading: false,
          roomTypes: action.payload
        };
      case FETCH_ROOM_TYPES_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case DELETE_ROOM_TYPE:
        return {
          ...state,
          roomTypes: state.roomTypes.filter((type) => type.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default roomTypesReducer;
  