import { Controller, Post, Body, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './interfaces/login.interface';
import { Public } from 'nest-keycloak-connect';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    this.logger.debug(`Login attempt for user: ${loginDto.username}`);
    return this.authService.login(loginDto);
  }
}