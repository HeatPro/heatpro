import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { InterventionService } from './intervention.service';
import { InterventionType } from './intervention-type.enum';
import { CreateInterventionDto } from './create-intervention.dto';

@Controller('interventions')
export class InterventionController {
  constructor(private readonly interventionService: InterventionService) {}

  @Post()
  async create(@Body() createInterventionDto: CreateInterventionDto) {
    return this.interventionService.create(createInterventionDto);
  }

  @Get()
  async findAll() {
    return this.interventionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.interventionService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInterventionDto: Partial<CreateInterventionDto>
  ) {
    return this.interventionService.update(id, updateInterventionDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.interventionService.delete(id);
  }

  @Get('heater/:heaterId')
  async findByHeater(@Param('heaterId') heaterId: string) {
    return this.interventionService.findByHeater(heaterId);
  }

  @Get('user/:userId')
  async findByUser(@Param('userId') userId: string) {
    return this.interventionService.findByUser(userId);
  }

  @Get('type/:type')
  async findByType(@Param('type') type: InterventionType) {
    return this.interventionService.findByType(type);
  }

  @Get('date-range')
  async findByDateRange(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string
  ) {
    return this.interventionService.findByDateRange(
      new Date(startDate),
      new Date(endDate)
    );
  }
}
