import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateClothesDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsNumber()
  stock: number;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
