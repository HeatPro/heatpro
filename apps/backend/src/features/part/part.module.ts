import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PartController } from './part.controller';
import { PartService } from './part.service';
import { Part, PartSchema } from './part.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Part.name, schema: PartSchema }])
  ],
  controllers: [PartController],
  providers: [PartService],
  exports: [PartService],
})
export class PartModule {}
