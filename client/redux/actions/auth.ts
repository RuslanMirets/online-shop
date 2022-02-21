import { authSlice } from './../slices/auth';
import { postAPI } from './../../utils/FetchData';
import { AppDispatch } from '../store';
import { IUserLogin } from './../../models/user';

export const login = (data: IUserLogin) => async (dispatch: AppDispatch) => {
  try {
    const response = await postAPI('auth/login', data);
    dispatch(authSlice.actions.login(response.data));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
