import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public, Roles } from 'nest-keycloak-connect';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('protectedHello')
  getHello() {
    return this.authService.getHelloAuth();
  }

  @Public()
  @Get('public')
  getPublic() {
    return { message: 'This is a public endpoint' };
  }

  @Get('protected')
  getProtected() {
    return { message: 'This is a protected endpoint - only accessible with valid token' };
  }
}