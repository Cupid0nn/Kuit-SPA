import { IsString, IsNumber, IsOptional, MinLength, MaxLength, Min, Max } from 'class-validator';

export class CreateClothesDto {
  @IsString()
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
  @MaxLength(100, { message: 'El nombre no debe exceder los 100 caracteres.' })
  name!: string;

  @IsString()
  @IsOptional()
  @MaxLength(500, { message: 'La descripción no debe exceder los 500 caracteres.' })
  description?: string;

  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'El precio debe ser un número válido con hasta 2 decimales.' })
  @Min(0, { message: 'El precio no puede ser menor que 0.' })
  @Max(10000, { message: 'El precio no puede ser mayor a 10,000.' })
  price!: number;
}
