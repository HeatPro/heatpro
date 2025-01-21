import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InterventionController } from './intervention.controller';
import { InterventionService } from './intervention.service';
import { Intervention, InterventionSchema } from './intervention.schema';
import { UserModule } from '../user/user.module';
import { ProblemModule } from '../problem/problem.module';
import { HeaterModule } from '../heater/heater.module';
import { PartModule } from '../part/part.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Intervention.name, schema: InterventionSchema }]),
    UserModule,
    ProblemModule,
    HeaterModule,
    PartModule,
  ],
  controllers: [InterventionController],
  providers: [InterventionService],
  exports: [InterventionService],
})
export class InterventionModule {}