import { IsString, IsEmail, IsOptional, MinLength, MaxLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
  @MaxLength(50, { message: 'El nombre no debe exceder los 50 caracteres.' })
  name!: string;

  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
  @MaxLength(20, { message: 'La contraseña no debe exceder los 20 caracteres.' })
  @Matches(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/, {
    message:
      'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.',
  })
  password!: string;

  @IsString()
  @IsEmail({}, { message: 'Debe proporcionar un email válido.' })
  email!: string;

  @IsString()
  @IsOptional()
  @Matches(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i, {
    message: 'La imagen debe ser una URL válida que apunte a un archivo de imagen.',
  })
  image?: string;
}
