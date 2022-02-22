import axios from "axios";
import { userSlice } from "../slices/user";

export const getUsers = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/users');
  dispatch(userSlice.actions.getUsers(response.data));
};