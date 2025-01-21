import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DocumentDocument = PdfDocument & Document;

@Schema({ timestamps: true })
export class PdfDocument {
  @Prop({ required: true })
  fileName: string;

  @Prop({ required: true })
  fileUrl: string;

  @Prop({ required: true })
  fileKey: string;

  @Prop()
  size: number;
}

export const DocumentSchema = SchemaFactory.createForClass(PdfDocument);
