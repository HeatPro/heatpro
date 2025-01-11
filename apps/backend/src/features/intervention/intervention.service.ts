import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
  ) {}

  async create(createInterventionDto: CreateInterventionDto): Promise<InterventionDocument> {
    // Verify all references exist
    await this.userService.findOne(createInterventionDto.userId);
    await this.problemService.findOne(createInterventionDto.problemId);
    await this.heaterService.findOne(createInterventionDto.heaterId);
    
    if (createInterventionDto.replacedPartIds.length > 0) {
      await Promise.all(
        createInterventionDto.replacedPartIds.map(partId => 
          this.partService.findOne(partId)
        )
      );
    }

    const intervention = new this.interventionModel({
      date: createInterventionDto.date,
      user: createInterventionDto.userId,
      problem: createInterventionDto.problemId,
      replacedParts: createInterventionDto.replacedPartIds,
      heater: createInterventionDto.heaterId,
      interventionType: createInterventionDto.interventionType,
    });

    return (await intervention.save())
      .populate(['user', 'problem', 'replacedParts', 'heater']);
  }

  async findAll(): Promise<InterventionDocument[]> {
    return this.interventionModel
      .find()
      .populate(['user', 'problem', 'replacedParts', 'heater'])
      .exec();
  }

  async findOne(id: string): Promise<InterventionDocument> {
    const intervention = await this.interventionModel
      .findById(id)
      .populate(['user', 'problem', 'replacedParts', 'heater'])
      .exec();

    if (!intervention) {
      throw new NotFoundException('Intervention not found');
    }

    return intervention;
  }

  async update(id: string, updateInterventionDto: Partial<CreateInterventionDto>): Promise<InterventionDocument> {
    // Verify references if they're being updated
    if (updateInterventionDto.userId) {
      await this.userService.findOne(updateInterventionDto.userId);
    }
    if (updateInterventionDto.problemId) {
      await this.problemService.findOne(updateInterventionDto.problemId);
    }
    if (updateInterventionDto.heaterId) {
      await this.heaterService.findOne(updateInterventionDto.heaterId);
    }
    if (updateInterventionDto.replacedPartIds) {
      await Promise.all(
        updateInterventionDto.replacedPartIds.map(partId => 
          this.partService.findOne(partId)
        )
      );
    }

    const updateData = {
      ...(updateInterventionDto.date && { date: updateInterventionDto.date }),
      ...(updateInterventionDto.userId && { user: updateInterventionDto.userId }),
      ...(updateInterventionDto.problemId && { problem: updateInterventionDto.problemId }),
      ...(updateInterventionDto.replacedPartIds && { replacedParts: updateInterventionDto.replacedPartIds }),
      ...(updateInterventionDto.heaterId && { heater: updateInterventionDto.heaterId }),
      ...(updateInterventionDto.interventionType && { interventionType: updateInterventionDto.interventionType }),
    };

    const updatedIntervention = await this.interventionModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .populate(['user', 'problem', 'replacedParts', 'heater'])
      .exec();

    if (!updatedIntervention) {
      throw new NotFoundException('Intervention not found');
    }

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
      .populate(['user', 'problem', 'replacedParts', 'heater'])
      .exec();
  }

  async findByUser(userId: string): Promise<InterventionDocument[]> {
    return this.interventionModel
      .find({ user: userId })
      .populate(['user', 'problem', 'replacedParts', 'heater'])
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
      .populate(['user', 'problem', 'replacedParts', 'heater'])
      .exec();
  }

  async findByType(interventionType: InterventionType): Promise<InterventionDocument[]> {
    return this.interventionModel
      .find({ interventionType })
      .populate(['user', 'problem', 'replacedParts', 'heater'])
      .exec();
  }
}