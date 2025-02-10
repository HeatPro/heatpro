import {
  Controller,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { DocumentService } from './document.service';

@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.documentService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.documentService.delete(id);
  }
}