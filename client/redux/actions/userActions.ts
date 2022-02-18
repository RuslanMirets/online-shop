import { getAPI } from './../../utils/FetchData';
import { Dispatch } from 'react';
import { IAlertType, ALERT } from '../types/alertType';
import { IGetInfoType, GET_INFO } from '../types/profileType';

export const profile = async (dispatch: Dispatch<IAlertType | IGetInfoType>) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });
    const res = await getAPI('users/profile');

    dispatch({
      type: GET_INFO,
      payload: res.data,
    });

    dispatch({ type: ALERT, payload: {} });
  } catch (error: any) {
    dispatch({ type: ALERT, payload: { errors: error.response.data.message } });
  }
};
