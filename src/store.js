// store.js
import {combineReducers } from 'redux';
import {thunk} from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';
import { roomReducer } from './reducers/roomReducer'; 
import { loginReducer } from './reducers/loginReducer';
import { roomAvailabilityReducer } from './reducers/roomAvailabilityReducer';
import roomTypesReducer from './reducers/roomTypesReducer';

const reducer = combineReducers({
  room: roomReducer,
  login: loginReducer,
  roomAvailability: roomAvailabilityReducer,
  roomTypes: roomTypesReducer,
});

const loginInfoFromStorage = localStorage.getItem('loginInfo') ? JSON.parse(localStorage.getItem('loginInfo')) : null

const initialState = {
  login: {loginInfo: loginInfoFromStorage}
}

const middleware = [thunk]


const store = configureStore({
  reducer,
  preloadedState: initialState,
  initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store;
