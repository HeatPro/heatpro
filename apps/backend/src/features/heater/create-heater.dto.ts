import { IsString, IsNotEmpty } from 'class-validator';

export class CreateHeaterDto {
  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  serialNumber: string;

  @IsNotEmpty()
  @IsString()
  location: string;
}