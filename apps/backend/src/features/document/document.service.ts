// document.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PdfDocument, DocumentDocument } from './document.schema';
import { UTApi } from "uploadthing/server";

interface UploadResponse {
  fileUrl: string;
  fileKey: string;
  fileName: string;
  size: number;
}

@Injectable()
export class DocumentService {
  private utapi: UTApi;

  constructor(
    @InjectModel(PdfDocument.name) private readonly documentModel: Model<DocumentDocument>,
  ) {
    this.utapi = new UTApi();
  }

  async create(uploadData: UploadResponse): Promise<DocumentDocument> {
    const document = new this.documentModel({
      fileName: uploadData.fileName,
      fileUrl: uploadData.fileUrl,
      fileKey: uploadData.fileKey,
      size: uploadData.size
    });

    return document.save();
  }

   async findOne(id: string): Promise<DocumentDocument> {
    const document = await this.documentModel.findById(id).exec();
    if (!document) {
      throw new NotFoundException('Document not found');
    }

    return document;
  }

  async delete(id: string): Promise<void> {
    const document = await this.findOne(id);
    
    // Delete from UploadThing
    try {
      await this.utapi.deleteFiles(document.fileKey);
    } catch (error) {
      console.error('Error deleting file from UploadThing:', error);
    }

    // Delete from database
    await this.documentModel.findByIdAndDelete(id).exec();
  }
}