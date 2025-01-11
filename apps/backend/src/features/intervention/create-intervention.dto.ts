import { IsDate, IsEnum, IsMongoId, IsNotEmpty, IsArray } from 'class-validator';
import { InterventionType } from './intervention-type.enum';
import { Type } from 'class-transformer';

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
  problemId: string;

  @IsArray()
  @IsMongoId({ each: true })
  replacedPartIds: string[];

  @IsNotEmpty()
  @IsMongoId()
  heaterId: string;

  @IsNotEmpty()
  @IsEnum(InterventionType)
  interventionType: InterventionType;
}