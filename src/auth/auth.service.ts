import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  singUp() {
    return 'Singup';
  }

  signIn() {
    return 'Singin';
  }
}
