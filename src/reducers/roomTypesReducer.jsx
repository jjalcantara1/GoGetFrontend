import { FETCH_ROOM_TYPES_SUCCESS, DELETE_ROOM_TYPE } from '../constants/roomConstants';

const initialState = {
  roomTypes: [],
};

const roomTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOM_TYPES_SUCCESS:
      return {
        ...state,
        roomTypes: action.payload,
      };
    case DELETE_ROOM_TYPE:
      return {
        ...state,
        roomTypes: state.roomTypes.filter((type) => type.id !== action.payload),
      };
    default:
      return state;
  }
};

export default roomTypesReducer;
