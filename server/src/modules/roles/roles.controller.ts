import { RoleDto } from './dto/role.dto';
import { RolesService } from './roles.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  create(@Body() dto: RoleDto) {
    return this.rolesService.create(dto);
  }

  @Get('/:value')
  findOneByValue(@Param('value') value: string) {
    return this.rolesService.findOneByValue(value);
  }
}
