import { IsString, IsNotEmpty } from 'class-validator';

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
}
