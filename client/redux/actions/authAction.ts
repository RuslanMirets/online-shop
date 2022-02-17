import { Dispatch } from 'react';
import { postAPI } from '../../utils/FetchData';
import { IAuthType, AUTH } from '../types/authType';
import { IUserLogin } from '../types/userType';

export const login = (userLogin: IUserLogin) => async (dispatch: Dispatch<IAuthType>) => {
  try {
    const res = await postAPI('auth/login', userLogin);
    dispatch({
      type: AUTH,
      payload: {
        token: res.data.token,
        user: res.data.user,
      },
    });
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
