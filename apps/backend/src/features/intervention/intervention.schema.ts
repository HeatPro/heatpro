import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../user/user.schema';
import { Problem } from '../problem/problem.schema';
import { Part } from '../part/part.schema';
import { Heater } from '../heater/heater.schema';
import { InterventionType } from './intervention-type.enum';

export type InterventionDocument = Intervention & Document;

@Schema({ timestamps: true })
export class Intervention {
  @Prop({ required: true, type: Date })
  date: Date;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Problem', required: true })
  problem: Problem;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Part' }] })
  replacedParts: Part[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Heater', required: true })
  heater: Heater;

  @Prop({ required: true, enum: InterventionType })
  interventionType: InterventionType;
}

export const InterventionSchema = SchemaFactory.createForClass(Intervention);
