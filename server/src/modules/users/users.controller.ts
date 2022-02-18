import { RolesGuard } from './../../core/guards/roles.guard';
import { JwtAuthGuard } from './../../core/guards/jwt-auth.guard';
import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from 'src/core/decorators/role-auth.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('ADMIN')
  @Get()
  getAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return this.usersService.findOneById(req.user.id);
  }
}
