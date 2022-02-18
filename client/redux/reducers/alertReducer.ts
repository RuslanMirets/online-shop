import { IAlert, IAlertType } from './../types/alertType';
import { ALERT } from '../types/alertType';

export const alertReducer = (state: IAlert = {}, action: IAlertType): IAlert => {
  switch (action.type) {
    case ALERT:
      return action.payload;
    default:
      return state;
  }
};
