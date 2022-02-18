import { AxiosInstance } from 'axios';
import { UserDto, LoginDto } from './types';

export const UserApi = (instance: AxiosInstance) => ({
  async register(dto: UserDto) {
    const { data } = await instance.post('/auth/register', dto);
    return data;
  },
  async login(dto: LoginDto) {
    const { data } = await instance.post('/auth/login', dto);
    return data;
  },
  async logout(dto: LoginDto) {
    const { data } = await instance.post('/auth/login', dto);
    return data;
  },
  async profile() {
    const { data } = await instance.get('/users/profile');
    return data;
  },
});
