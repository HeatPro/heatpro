import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HeaterDocument = Heater & Document;

@Schema({ timestamps: true })
export class Heater {
  @Prop({ required: true })
  model: string;

  @Prop({ required: true, unique: true })
  serialNumber: string;

  @Prop({ required: true })
  location: string;
}

export const HeaterSchema = SchemaFactory.createForClass(Heater);