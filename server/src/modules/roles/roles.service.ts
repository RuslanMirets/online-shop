import { RoleDto } from './dto/role.dto';
import { ROLE_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { Role } from './models/roles.entity';

@Injectable()
export class RolesService {
  constructor(@Inject(ROLE_REPOSITORY) private readonly roleRepository: typeof Role) {}

  async create(dto: RoleDto): Promise<Role> {
    return await this.roleRepository.create<Role>(dto);
  }

  async findOneByValue(value: string): Promise<Role> {
    return await this.roleRepository.findOne<Role>({ where: { value } });
  }
}
