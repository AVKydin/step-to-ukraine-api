import { Controller, Post } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp() {
    return this.authService.singUp();
  }

  @Post('signin')
  signIn() {
    return this.authService.signIn();
  }
}
