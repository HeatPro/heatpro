import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './core/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './features/user/user.module';
import { HeaterModule } from './features/heater/heater.module';
import { PartModule } from './features/part/part.module';
import { ProblemModule } from './features/problem/problem.module';
import { InterventionModule } from './features/intervention/intervention.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    HeaterModule,
    PartModule,
    ProblemModule,
    InterventionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}