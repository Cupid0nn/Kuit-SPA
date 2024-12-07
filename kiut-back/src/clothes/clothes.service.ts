import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clothes } from '../entityes/clothes.entity';
import { CreateClothesDto } from '../dto´s/createclothedto';
import { ClothesRepository } from './clothes.repository';

@Injectable()
export class ClothesService {
  constructor(
    private clothesRepository: ClothesRepository,
  ) {}

  createClothes(createClothesDto: CreateClothesDto){
    return this.clothesRepository.createClothes(createClothesDto);
  }

  getClothes(){
    return this.clothesRepository.getClothes();
  }

  getOneClothes(id:string) {
    return this.clothesRepository.getOneClothes(id);
  }

   updateClothes(id: string, updateClothesDto: CreateClothesDto) {
    return this.clothesRepository.updateClothes(id, updateClothesDto);
  }

  DeleteClothes(id: string){
     this.clothesRepository.deleteClothes(id);
  }
}
