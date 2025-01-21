import { IsDate, IsEnum, IsMongoId, IsNotEmpty, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { InterventionType } from './intervention-type.enum';
import { Type } from 'class-transformer';
import { CreateProblemDto } from '../problem/problem.dto';
import { CreatePartDto } from '../part/part.dto';

export class CreateInterventionDto {
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  @IsMongoId()
  userId: string;

  @IsNotEmpty()
  @IsMongoId()
  heaterId: string;

  @ValidateNested()
  @Type(() => CreateProblemDto)
  @IsNotEmpty()
  problems: CreateProblemDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePartDto)
  replacedParts: CreatePartDto[];

  @IsNotEmpty()
  @IsEnum(InterventionType)
  interventionType: InterventionType;
}