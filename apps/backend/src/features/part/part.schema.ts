import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PartDocument = Part & Document;

@Schema({ timestamps: true })
export class Part {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true, unique: true })
  reference: string;

  @Prop({ required: true })
  dataSheetFileKey: string;
}

export const PartSchema = SchemaFactory.createForClass(Part);
