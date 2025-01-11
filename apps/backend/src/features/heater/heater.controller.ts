import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { HeaterService } from './heater.service';
import { CreateHeaterDto } from './create-heater.dto';

@Controller('heaters')
export class HeaterController {
  constructor(private readonly heaterService: HeaterService) {}

  @Post()
  async create(@Body() createHeaterDto: CreateHeaterDto) {
    return this.heaterService.create(createHeaterDto);
  }

  @Get()
  async findAll() {
    return this.heaterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.heaterService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateHeaterDto: Partial<CreateHeaterDto>
  ) {
    return this.heaterService.update(id, updateHeaterDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.heaterService.delete(id);
  }

  @Get('serial/:serialNumber')
  async findBySerialNumber(@Param('serialNumber') serialNumber: string) {
    return this.heaterService.findBySerialNumber(serialNumber);
  }
}