import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeaterController } from './heater.controller';
import { HeaterService } from './heater.service';
import { Heater, HeaterSchema } from './heater.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Heater.name, schema: HeaterSchema }])
  ],
  controllers: [HeaterController],
  providers: [HeaterService],
  exports: [HeaterService],
})
export class HeaterModule {}