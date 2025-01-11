import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PartService } from './part.service';
import { CreatePartDto } from './part.dto';

@Controller('parts')
export class PartController {
  constructor(private readonly partService: PartService) {}

  @Post()
  async create(@Body() createPartDto: CreatePartDto) {
    return this.partService.create(createPartDto);
  }

  @Get()
  async findAll() {
    return this.partService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.partService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePartDto: Partial<CreatePartDto>
  ) {
    return this.partService.update(id, updatePartDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.partService.delete(id);
  }
}
