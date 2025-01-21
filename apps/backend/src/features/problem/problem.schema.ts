import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';


export type ProblemDocument = Problem & Document<Types.ObjectId> & {
  _id: Types.ObjectId;
};

@Schema({ timestamps: true })
export class Problem {
  @Prop({ required: true })
  description: string;

  @Prop({ type: [String], required: true })
  actions: string[];

  @Prop({ default: false })
  isResolved: boolean;
}

export const ProblemSchema = SchemaFactory.createForClass(Problem);