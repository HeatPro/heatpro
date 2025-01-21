import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Intervention, InterventionDocument } from './intervention.schema';
import { UserService } from '../user/user.service';
import { ProblemService } from '../problem/problem.service';
import { HeaterService } from '../heater/heater.service';
import { PartService } from '../part/part.service';
import { CreateInterventionDto } from './create-intervention.dto';
import { InterventionType } from './intervention-type.enum';

@Injectable()
export class InterventionService {
  constructor(
    @InjectModel(Intervention.name) private readonly interventionModel: Model<InterventionDocument>,
    private readonly userService: UserService,
    private readonly problemService: ProblemService,
    private readonly heaterService: HeaterService,
    private readonly partService: PartService,
  ) { }

  async create(createInterventionDto: CreateInterventionDto): Promise<InterventionDocument> {
    // Verify user and heater exist
    await this.userService.findOne(createInterventionDto.userId);
    await this.heaterService.findOne(createInterventionDto.heaterId);

    // Create the problem
    const createdProblems = await Promise.all(
      createInterventionDto.problems.map(problemDto =>
        this.problemService.create(problemDto)
      )
    );

    // Create all parts
    const createdParts = await Promise.all(
      createInterventionDto.replacedParts.map(partDto =>
        this.partService.create(partDto)
      )
    );

    const intervention = new this.interventionModel({
      date: createInterventionDto.date,
      user: createInterventionDto.userId,
      problems: createdProblems.map(problem => problem._id),
      replacedParts: createdParts.map(part => part._id),
      heater: createInterventionDto.heaterId,
      interventionType: createInterventionDto.interventionType,
    });

    return (await intervention.save())
      .populate(['user', 'problems', 'replacedParts', 'heater']);
  }

  async findAll(): Promise<InterventionDocument[]> {
    return this.interventionModel
      .find()
      .populate(['user', 'problems', 'replacedParts', 'heater'])
      .exec();
  }

  async findOne(id: string): Promise<InterventionDocument> {
    const intervention = await this.interventionModel
      .findById(id)
      .populate(['user', 'problems', 'replacedParts', 'heater'])
      .exec();

    if (!intervention) {
      throw new NotFoundException('Intervention not found');
    }

    return intervention;
  }


  async update(id: string, updateInterventionDto: Partial<CreateInterventionDto>): Promise<InterventionDocument> {
  const intervention = await this.interventionModel.findById(id);
  if (!intervention) {
    throw new NotFoundException('Intervention not found');
  }

  // Verify references if they're being updated
  if (updateInterventionDto.userId) {
    await this.userService.findOne(updateInterventionDto.userId);
  }
  if (updateInterventionDto.heaterId) {
    await this.heaterService.findOne(updateInterventionDto.heaterId);
  }

  // Update problems if provided
  let problemIds: Types.ObjectId[] = intervention.problems;
  if (updateInterventionDto.problems) {
    const existingProblems = await this.problemService.findByIntervention(intervention);

    const updatedProblemIds = await Promise.all(
      updateInterventionDto.problems.map(async (problemDto, index) => {
        const existingProblem = existingProblems[index];
        if (existingProblem) {
          const updatedProblem = await this.problemService.findByIdAndUpdate(
            existingProblem._id.toString(),
            problemDto,
            { new: true }
          );
          return new Types.ObjectId(updatedProblem._id);
        } else {
          const newProblem = await this.problemService.create(problemDto);
          return new Types.ObjectId(newProblem._id);
        }
      })
    );
    problemIds = updatedProblemIds;
  }

  // Update parts if provided
  let partIds: Types.ObjectId[] = intervention.replacedParts;
  if (updateInterventionDto.replacedParts) {
    const existingParts = await this.partService.find({
      _id: { $in: intervention.replacedParts }
    });

    const updatedPartIds = await Promise.all(
      updateInterventionDto.replacedParts.map(async (partDto, index) => {
        const existingPart = existingParts[index];
        if (existingPart) {
          const updatedPart = await this.partService.findByIdAndUpdate(
            existingPart._id.toString(),
            partDto,
            { new: true }
          );
          return new Types.ObjectId(updatedPart._id);
        } else {
          const newPart = await this.partService.create(partDto);
          return new Types.ObjectId(newPart._id);
        }
      })
    );
    partIds = updatedPartIds;
  }

  const updateData = {
    ...(updateInterventionDto.date && { date: updateInterventionDto.date }),
    ...(updateInterventionDto.userId && { user: new Types.ObjectId(updateInterventionDto.userId) }),
    problems: problemIds,
    replacedParts: partIds,
    ...(updateInterventionDto.heaterId && { heater: new Types.ObjectId(updateInterventionDto.heaterId) }),
    ...(updateInterventionDto.interventionType && { interventionType: updateInterventionDto.interventionType }),
  };

  const updatedIntervention = await this.interventionModel
    .findByIdAndUpdate(id, updateData, { new: true })
    .populate(['user', 'problems', 'replacedParts', 'heater'])
    .exec();

  return updatedIntervention;
}

  async delete(id: string): Promise<void> {
    const result = await this.interventionModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Intervention not found');
    }
  }

  async findByHeater(heaterId: string): Promise<InterventionDocument[]> {
    return this.interventionModel
      .find({ heater: heaterId })
      .populate(['user', 'problems', 'replacedParts', 'heater'])
      .exec();
  }

  async findByUser(userId: string): Promise<InterventionDocument[]> {
    return this.interventionModel
      .find({ user: userId })
      .populate(['user', 'problems', 'replacedParts', 'heater'])
      .exec();
  }

  async findByDateRange(startDate: Date, endDate: Date): Promise<InterventionDocument[]> {
    return this.interventionModel
      .find({
        date: {
          $gte: startDate,
          $lte: endDate
        }
      })
      .populate(['user', 'problems', 'replacedParts', 'heater'])
      .exec();
  }

  async findByType(interventionType: InterventionType): Promise<InterventionDocument[]> {
    return this.interventionModel
      .find({ interventionType })
      .populate(['user', 'problems', 'replacedParts', 'heater'])
      .exec();
  }
}