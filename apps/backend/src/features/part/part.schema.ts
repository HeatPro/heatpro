import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { PartType } from './part-type.enum';

export type PartDocument = Part & Document<Types.ObjectId> & {
  _id: Types.ObjectId;
};

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

  @Prop({ required: true })
  type: PartType;
}

export const PartSchema = SchemaFactory.createForClass(Part);
