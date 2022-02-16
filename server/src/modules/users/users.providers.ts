import { USER_REPOSITORY } from './../../core/constants/index';
import { User } from './user.entity';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
