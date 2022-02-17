import axios from 'axios';
import { LoginDto, UserDto } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

export const UserApi = {
  async register(dto: UserDto) {
    const data = await instance.post('/auth/register', dto);
    return data;
  },
  async login(dto: LoginDto) {
    const data = await instance.post('/auth/login', dto);
    return data;
  },
};
