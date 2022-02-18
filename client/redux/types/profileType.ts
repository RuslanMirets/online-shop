import { IUser } from './userType';

export const GET_INFO = 'GET_INFO';

export interface IGetInfoType {
  type: typeof GET_INFO;
  payload: IUser;
}
