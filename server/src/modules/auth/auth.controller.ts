import { LocalAuthGuard } from './../../core/guards/local-auth.guard';
import { DoesUserExist } from './../../core/guards/doesUserExist.guard';
import { AuthService } from './auth.service';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserDto } from '../users/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(DoesUserExist)
  @Post('register')
  async register(@Body() dto: UserDto) {
    return await this.authService.register(dto);
  }
}
