import { destroyCookie, setCookie } from 'nookies';
import { IUserLogin } from '../../models/IUser';
import { postAPI } from '../../utils/FetchData';
import { authSlice } from '../reducers/AuthSlice';
import { AppDispatch } from '../store';

export const login = (userLogin: IUserLogin) => async (dispatch: AppDispatch) => {
  try {
    const response = await postAPI('auth/login', userLogin);
    setCookie(null, 'shopToken', response.data.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    dispatch(authSlice.actions.login(response.data));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

export const logout = async (dispatch: AppDispatch) => {
  try {
    destroyCookie(null, 'shopToken', null);
    dispatch(authSlice.actions.logout());
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
// export const logout = async (dispatch: Dispatch<IAuthType | IAlertType>) => {
//   try {
//     destroyCookie(null, 'shopToken', null);
//     dispatch({ type: AUTH, payload: {} });
//   } catch (err: any) {
//     dispatch({ type: ALERT, payload: { errors: err.response.data.msg } });
//   }
// };

