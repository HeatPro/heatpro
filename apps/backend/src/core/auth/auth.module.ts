import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { keycloakConfig } from './keycloak/keycloak.config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'nest-keycloak-connect';

@Module({
  imports: [
    KeycloakConnectModule.register(keycloakConfig),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}