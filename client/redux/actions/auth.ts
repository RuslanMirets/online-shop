import { authSlice } from './../slices/auth';
import { postAPI } from './../../utils/FetchData';
import { AppDispatch } from '../store';
import { IUserLogin } from './../../models/user';
import { setCookie } from 'nookies';

export const login = (data: IUserLogin) => async (dispatch: AppDispatch) => {
  try {
    const response = await postAPI('auth/login', data);
    setCookie(null, 'shopToken', response.data.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    dispatch(authSlice.actions.login(response.data));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
