import axios from 'axios'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../constants/loginConstants'

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
})

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await instance.post("api/login/", { username, password }, config);
    dispatch({ type: LOGIN_SUCCESS, payload: data});
    localStorage.setItem("loginInfo", JSON.stringify(data));
  }
  catch (error){
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
