import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Part, PartDocument } from './part.schema';
import { CreatePartDto } from './part.dto';

@Injectable()
export class PartService {
  constructor(
    @InjectModel(Part.name) private readonly partModel: Model<PartDocument>,
  ) {}

  async create(createPartDto: CreatePartDto): Promise<PartDocument> {
    const { reference } = createPartDto;

    const existingPart = await this.partModel.findOne({ reference });
    if (existingPart) {
      throw new ConflictException('Part with this reference already exists');
    }

    const newPart = new this.partModel(createPartDto);
    return newPart.save();
  }

  async findAll(): Promise<PartDocument[]> {
    return this.partModel.find().exec();
  }

  async findOne(id: string): Promise<PartDocument> {
    const part = await this.partModel.findById(id).exec();
    if (!part) {
      throw new NotFoundException('Part not found');
    }
    return part;
  }

  async update(id: string, updatePartDto: Partial<CreatePartDto>): Promise<PartDocument> {
    const updatedPart = await this.partModel
      .findByIdAndUpdate(id, updatePartDto, { new: true })
      .exec();

    if (!updatedPart) {
      throw new NotFoundException('Part not found');
    }

    return updatedPart;
  }

  async delete(id: string): Promise<void> {
    const result = await this.partModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Part not found');
    }
  }
}