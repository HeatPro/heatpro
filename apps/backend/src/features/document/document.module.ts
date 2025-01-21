import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { PdfDocument, DocumentSchema } from './document.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PdfDocument.name, schema: DocumentSchema }])
  ],
  controllers: [DocumentController],
  providers: [DocumentService],
  exports: [DocumentService],
})
export class DocumentModule {}