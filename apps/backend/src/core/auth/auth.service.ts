import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { LoginDto, TokenResponse } from './interfaces/login.interface';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private configService: ConfigService) {}

  async login(loginDto: LoginDto): Promise<TokenResponse> {
    try {
      const params = new URLSearchParams();
      params.append('client_id', this.configService.get('KEYCLOAK_CLIENT_ID'));
      params.append('client_secret', this.configService.get('KEYCLOAK_SECRET'));
      params.append('grant_type', 'password');
      params.append('username', loginDto.username);
      params.append('password', loginDto.password);

      const response = await axios.post(
        `${this.configService.get('KEYCLOAK_AUTH_SERVER_URL')}/realms/${this.configService.get('KEYCLOAK_REALM')}/protocol/openid-connect/token`,
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      return response.data;
    } catch (error) {
      this.logger.error(`Login failed for user ${loginDto.username}`, error.response?.data);
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}