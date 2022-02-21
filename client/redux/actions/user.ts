import { userSlice } from './../slices/user';
import { getAPI } from './../../utils/FetchData';
import { AppDispatch } from '../store';

export const getAllUsers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await getAPI('users');
    dispatch(userSlice.actions.getAllUsers(response.data));
  } catch (error) {
    console.log(error);
  }
};
