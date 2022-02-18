import { GET_INFO } from '../types/profileType';
import { IGetInfoType } from '../types/profileType';
import { IUser } from '../types/userType';

export const userReducer = (state: IUser[] = [], action: IGetInfoType): IUser[] => {
  switch (action.type) {
    case GET_INFO:
      return [...state, action.payload];
    default:
      return state;
  }
};
