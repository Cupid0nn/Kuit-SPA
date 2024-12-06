import { IsString, IsNumber, IsOptional,  } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  usernmame: string;   

  @IsString()
  password: string;

  @IsString()
  email: string;

  @IsString()
  @IsOptional()
  image?: string;
  
}
