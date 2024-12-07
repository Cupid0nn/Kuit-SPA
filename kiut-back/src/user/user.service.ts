import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entityes/user.entity';
import { CreateUserDto } from 'src/dto´s/createuserdto';
import {UserRepository} from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
  ) {}

  createUser(createUserDto: CreateUserDto): Promise<Partial<User>> {
    return this.userRepository.createUser(createUserDto);
  }

   getUsers(){
     return this.userRepository.getUsers();
   }

   deleteUser(id: string){
     return this.userRepository.deleteUser(id);
   }

   updateUser(id: string, updateUserDto: CreateUserDto){
     return this.userRepository.updateUser(id, updateUserDto);
   }

   getUserById(id: string){
     return this.userRepository.getUserById(id);
   }

  }
  
