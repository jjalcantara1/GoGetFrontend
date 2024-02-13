export const roomAvailabilityReducer = (state = { rooms: [] }, action) => {
    switch (action.type) {
      case 'ROOM_AVAILABILITY_REQUEST':
        return { loading: true, rooms: [] };
      case 'ROOM_AVAILABILITY_SUCCESS':
        return { loading: false, rooms: action.payload };
      case 'ROOM_AVAILABILITY_FAIL':
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  