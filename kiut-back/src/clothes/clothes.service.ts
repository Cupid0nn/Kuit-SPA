import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clothes } from '../entityes/clothes.entity';
import { CreateClothesDto } from '../dto´s/createclothedto';

@Injectable()
export class ClothesService {
  constructor(
    @InjectRepository(Clothes)
    private clothesRepository: Repository<Clothes>,
  ) {}

  create(createClothesDto: CreateClothesDto): Promise<Clothes> {
    const clothes = this.clothesRepository.create(createClothesDto);
    return this.clothesRepository.save(clothes);
  }

  findAll(): Promise<Clothes[]> {
    return this.clothesRepository.find();
  }

  findOne(id: number): Promise<Clothes> {
    return this.clothesRepository.findOneBy({ id });
  }

  async update(id: number, updateClothesDto: CreateClothesDto): Promise<Clothes> {
    await this.clothesRepository.update(id, updateClothesDto);
    return this.clothesRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.clothesRepository.delete(id);
  }
}
