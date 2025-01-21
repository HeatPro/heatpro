import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProblemService } from './problem.service';
import { CreateProblemDto } from './problem.dto';

@Controller('problems')
export class ProblemController {
  constructor(private readonly problemService: ProblemService) {}

  @Post()
  async create(@Body() createProblemDto: CreateProblemDto) {
    return this.problemService.create(createProblemDto);
  }

  @Get()
  async findAll() {
    return this.problemService.findAll();
  }

  @Get('unresolved')
  async findUnresolved() {
    return this.problemService.findUnresolved();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.problemService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProblemDto: Partial<CreateProblemDto>
  ) {
    return this.problemService.update(id, updateProblemDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.problemService.delete(id);
  }
}