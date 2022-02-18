export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUser extends IUserLogin {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  role: [];
}
