// store.js
import {combineReducers } from 'redux';
import {thunk} from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';
import { roomReducer } from './reducers/roomReducer'; // Ensure this path is correct
import { loginReducer } from './reducers/loginReducer';

const reducer = combineReducers({
  room: roomReducer,
  login: loginReducer,
  // other reducers will go here if you have any
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
