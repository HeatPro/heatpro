import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Heater, HeaterDocument } from './heater.schema';
import { CreateHeaterDto } from './create-heater.dto';

@Injectable()
export class HeaterService {
  constructor(
    @InjectModel(Heater.name) private readonly heaterModel: Model<HeaterDocument>,
  ) {}

  async create(createHeaterDto: CreateHeaterDto): Promise<HeaterDocument> {
    const { serialNumber } = createHeaterDto;

    const existingHeater = await this.heaterModel.findOne({ serialNumber });
    if (existingHeater) {
      throw new ConflictException('Heater with this serial number already exists');
    }

    const newHeater = new this.heaterModel(createHeaterDto);
    return newHeater.save();
  }

  async findAll(): Promise<HeaterDocument[]> {
    return this.heaterModel.find().exec();
  }

  async findOne(id: string): Promise<HeaterDocument> {
    const heater = await this.heaterModel.findById(id).exec();
    if (!heater) {
      throw new NotFoundException('Heater not found');
    }
    return heater;
  }

  async update(id: string, updateHeaterDto: Partial<CreateHeaterDto>): Promise<HeaterDocument> {
    const updatedHeater = await this.heaterModel
      .findByIdAndUpdate(id, updateHeaterDto, { new: true })
      .exec();

    if (!updatedHeater) {
      throw new NotFoundException('Heater not found');
    }

    return updatedHeater;
  }

  async delete(id: string): Promise<void> {
    const result = await this.heaterModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Heater not found');
    }
  }

  async findBySerialNumber(serialNumber: string): Promise<HeaterDocument> {
    const heater = await this.heaterModel.findOne({ serialNumber }).exec();
    if (!heater) {
      throw new NotFoundException('Heater not found');
    }
    return heater;
  }
}