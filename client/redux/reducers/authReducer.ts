import { IAuth, IAuthType, AUTH } from '../types/authType';

export const authReducer = (state: IAuth = {}, action: IAuthType): IAuth => {
  switch (action.type) {
    case AUTH:
      return action.payload;
    default:
      return state;
  }
};