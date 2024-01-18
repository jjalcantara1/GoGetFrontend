// Action Types
const GET_ROOMS_BY_TYPE = 'GET_ROOMS_BY_TYPE';
const ADD_ROOM = 'ADD_ROOM';
const EDIT_ROOM = 'EDIT_ROOM';
const DELETE_ROOM = 'DELETE_ROOM';
const initialState = {
    rooms: [],
    // any other initial state properties
  };
// Reducer
export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOMS_BY_TYPE:
      return {
        ...state,
        rooms: action.payload,
      };
    case ADD_ROOM:
      // Assuming action.payload contains the new room object
      return {
        ...state,
        rooms: [...state.rooms, action.payload],
      };
    case EDIT_ROOM:
      // Assuming action.payload contains the updated room object
      return {
        ...state,
        rooms: state.rooms.map((room) =>
          room.id === action.payload.id ? action.payload : room
        ),
      };
    case DELETE_ROOM:
      // Assuming action.payload contains the id of the room to delete
      return {
        ...state,
        rooms: state.rooms.filter((room) => room.id !== action.payload),
      };
    default:
      return state;
  }
};

// Action Creators
export const getRoomsByType = (rooms) => ({
  type: GET_ROOMS_BY_TYPE,
  payload: rooms,
});

export const addRoom = (room) => ({
  type: ADD_ROOM,
  payload: room,
});

export const editRoom = (room) => ({
  type: EDIT_ROOM,
  payload: room,
});

export const deleteRoom = (roomId) => ({
  type: DELETE_ROOM,
  payload: roomId,
});
