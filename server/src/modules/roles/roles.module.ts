import { rolesProviders } from './roles.providers';
import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  providers: [RolesService, ...rolesProviders],
  controllers: [RolesController],
  exports: [RolesService],
})
export class RolesModule {}
