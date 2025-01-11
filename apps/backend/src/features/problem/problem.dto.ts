import { IsString, IsNotEmpty, IsBoolean, IsArray } from 'class-validator';

export class CreateProblemDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  actions: string[];

  @IsBoolean()
  isResolved: boolean;
}