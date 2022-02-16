import { USER_REPOSITORY } from './../../core/constants/index';
import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) {}

  async create(dto: UserDto): Promise<User> {
    return await this.userRepository.create<User>(dto);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email }, include: { all: true } });
  }

  async findOneById(id: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }

  async findAll() {
    return await this.userRepository.findAll({ include: { all: true } });
  }
}
