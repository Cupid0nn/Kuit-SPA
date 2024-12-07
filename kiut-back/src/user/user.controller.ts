import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entityes/user.entity';
import { CreateUserDto } from 'src/dto´s/createuserdto';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  getUsers() {
    return this.UserService.getUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.UserService.createUser(createUserDto);
  }

  @Delete(':id')
  DeleteUser(id: string) {
    return this.UserService.deleteUser(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.UserService.updateUser(id, updateUserDto);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.UserService.getUserById(id);
  }
}
