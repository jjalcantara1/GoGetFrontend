// store.js
import {combineReducers } from 'redux';
import {thunk} from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';
import { roomReducer } from './reducers/roomReducer'; // Ensure this path is correct


const reducer = combineReducers({
  room: roomReducer,
  // other reducers will go here if you have any
});

const initialState = {}

const middleware = [thunk]


const store = configureStore({
  reducer,
  initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

export default store;
