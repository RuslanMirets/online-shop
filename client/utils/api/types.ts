export type LoginDto = {
  email?: string;
  password?: string;
};

export type UserDto = {
  name?: string;
  email?: string;
  password?: string;
};


export type ResponseUser = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};