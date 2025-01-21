import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { InterventionType } from './intervention-type.enum';

export type InterventionDocument = Intervention & Document;

@Schema({ timestamps: true })
export class Intervention {
  @Prop({ required: true, type: Date })
  date: Date;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Problem' }], required: true })
  problems: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Part' }] })
  replacedParts: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: 'Heater', required: true })
  heater: Types.ObjectId;

  @Prop({ required: true, enum: InterventionType })
  interventionType: InterventionType;
}

export const InterventionSchema = SchemaFactory.createForClass(Intervention);
