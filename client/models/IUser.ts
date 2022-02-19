import { IRole } from './IRole';

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  role: IRole[];
}

export interface IUserLogin {
  email: string;
  password: string;
}