import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Problem, ProblemDocument } from './problem.schema';
import { CreateProblemDto } from './problem.dto';
import { Intervention, InterventionDocument } from '../intervention/intervention.schema';

@Injectable()
export class ProblemService {
  constructor(
    @InjectModel(Problem.name) private readonly problemModel: Model<ProblemDocument>,
  ) { }

  async create(createProblemDto: CreateProblemDto): Promise<ProblemDocument> {
    const newProblem = new this.problemModel(createProblemDto);
    return newProblem.save();
  }

  async findAll(): Promise<ProblemDocument[]> {
    return this.problemModel.find().exec();
  }

  async findOne(id: string): Promise<ProblemDocument> {
    const problem = await this.problemModel.findById(id).exec();
    if (!problem) {
      throw new NotFoundException('Problem not found');
    }
    return problem;
  }

  async update(id: string, updateProblemDto: Partial<CreateProblemDto>): Promise<ProblemDocument> {
    const updatedProblem = await this.problemModel
      .findByIdAndUpdate(id, updateProblemDto, { new: true })
      .exec();

    if (!updatedProblem) {
      throw new NotFoundException('Problem not found');
    }

    return updatedProblem;
  }

  async delete(id: string): Promise<void> {
    const result = await this.problemModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Problem not found');
    }
  }

  async findUnresolved(): Promise<ProblemDocument[]> {
    return this.problemModel.find({ isResolved: false }).exec();
  }

  async findByIntervention(intervention: InterventionDocument): Promise<ProblemDocument[]> {
    return this.problemModel.find({
      _id: { $in: intervention.problems.map(id => new Types.ObjectId(id)) }
    }).exec();
  }

  async findByIdAndUpdate(
    id: string,
    updateProblemDto: Partial<CreateProblemDto>,
    options: { new?: boolean } = { new: true }
  ): Promise<ProblemDocument> {
    const updatedProblem = await this.problemModel
      .findByIdAndUpdate(
        id,
        {
          ...(updateProblemDto.description && { description: updateProblemDto.description }),
          ...(updateProblemDto.actions && { actions: updateProblemDto.actions }),
          ...(typeof updateProblemDto.isResolved !== 'undefined' && { isResolved: updateProblemDto.isResolved }),
        },
        { new: options.new }
      )
      .exec();

    if (!updatedProblem) {
      throw new NotFoundException(`Problem with ID ${id} not found`);
    }

    return updatedProblem;
  }
}
