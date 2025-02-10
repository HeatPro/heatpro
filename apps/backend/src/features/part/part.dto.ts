import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { PartType } from './part-type.enum';

export class CreatePartDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  reference: string;

  @IsNotEmpty()
  @IsString()
  dataSheetFileKey: string;

  @IsNotEmpty()
  @IsEnum(PartType)
  type: PartType;
}
