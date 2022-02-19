import { IUserLogin } from '../../models/IUser';
import { postAPI } from '../../utils/FetchData';
import { authSlice } from '../reducers/AuthSlice';
import { AppDispatch } from '../store';

export const login = (userLogin: IUserLogin) => async (dispatch: AppDispatch) => {
  try {
    const response = await postAPI('auth/login', userLogin);
    dispatch(authSlice.actions.login(response.data));
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
