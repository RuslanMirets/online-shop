import { setCookie } from 'nookies';
import { Dispatch } from 'react';
import { postAPI } from '../../utils/FetchData';
import { ALERT, IAlertType } from '../types/alertType';
import { IAuthType, AUTH } from '../types/authType';
import { IUserLogin } from '../types/userType';

export const login =
  (userLogin: IUserLogin) => async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    try {
      dispatch({ type: ALERT, payload: { loading: true } });
      const res = await postAPI('auth/login', userLogin);
      setCookie(null, 'shopToken', res.data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      dispatch({
        type: AUTH,
        payload: {
          token: res.data.token,
          user: res.data.user,
        },
      });
      dispatch({ type: ALERT, payload: { success: 'Усшешный вход' } });
    } catch (error: any) {
      dispatch({ type: ALERT, payload: { errors: 'Неверный логин или пароль' } });
    }
  };
