import { ROLE_REPOSITORY } from './../../core/constants/index';
import { Role } from './models/roles.entity';

export const rolesProviders = [
  {
    provide: ROLE_REPOSITORY,
    useValue: Role,
  },
];
