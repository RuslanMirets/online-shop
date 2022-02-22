import { authSlice } from './../slices/auth';
import { postAPI } from './../../utils/FetchData';
import { AppDispatch } from '../store';
import { IUser } from './../../models/user';
import { destroyCookie, setCookie } from 'nookies';

export const login = (data: IUser) => async (dispatch: AppDispatch) => {
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
export const register = (data: IUser) => async (dispatch: AppDispatch) => {
  try {
    const response = await postAPI('auth/register', data);
    dispatch(authSlice.actions.register(response.data));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
export const logout = () => async (dispatch: AppDispatch) => {
  try {
    destroyCookie(null, 'shopToken', null);
    dispatch(authSlice.actions.logout());
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
