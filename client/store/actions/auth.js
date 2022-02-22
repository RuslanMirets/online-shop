import axios from 'axios';
import { authSlice } from '../slices/auth';

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/login', userData);
    dispatch(authSlice.actions.login(response.data));
  } catch (error) {
    console.log(error.response.data.message);
  }
};
