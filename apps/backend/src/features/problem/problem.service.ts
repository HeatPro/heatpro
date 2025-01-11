import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Problem, ProblemDocument } from './problem.schema';
import { CreateProblemDto } from './problem.dto';

@Injectable()
export class ProblemService {
  constructor(
    @InjectModel(Problem.name) private readonly problemModel: Model<ProblemDocument>,
  ) {}

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
}
