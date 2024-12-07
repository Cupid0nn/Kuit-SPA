import {
    Injectable,
    NotFoundException,
    BadRequestException,
    InternalServerErrorException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { Clothes } from 'src/entityes/clothes.entity';
  import { CreateClothesDto } from 'src/dto´s/createclothedto';
  
  @Injectable()
  export class ClothesRepository {
    constructor(
      @InjectRepository(Clothes)
      private readonly clothesRepository: Repository<Clothes>,
    ) {}
  
    private handleDatabaseError(error: any, customMessage: string): never {
      console.error(customMessage, error.message || error);
      throw new InternalServerErrorException(customMessage);
    }
  
    async createClothes(createClothesDto: CreateClothesDto): Promise<Partial<Clothes>> {
      try {
        const clothes = this.clothesRepository.create(createClothesDto);
        return await this.clothesRepository.save(clothes);
      } catch (error) {
        this.handleDatabaseError(error, 'Ocurrió un error al crear el anuncio de ropa.');
      }
    }
  
    async getClothes(): Promise<Partial<Clothes>[]> {
      try {
        return await this.clothesRepository.find();
      } catch (error) {
        this.handleDatabaseError(error, 'Ocurrió un error al obtener los anuncios de ropa.');
      }
    }
  
    async getOneClothes(id: string): Promise<Partial<Clothes>> {
      try {
        const clothes = await this.clothesRepository.findOneBy({ id });
        if (!clothes) {
          throw new NotFoundException(`Anuncio de ropa con ID ${id} no encontrado.`);
        }
        return clothes;
      } catch (error) {
        if (error instanceof NotFoundException) {
          throw error;
        }
        this.handleDatabaseError(error, 'Ocurrió un error al obtener el anuncio de ropa.');
      }
    }
  
    async updateClothes(
      id: string,
      updateClothesDto: CreateClothesDto,
    ): Promise<Partial<Clothes>> {
      try {
        const clothes = await this.clothesRepository.findOneBy({ id });
        if (!clothes) {
          throw new NotFoundException(`Anuncio de ropa con ID ${id} no encontrado.`);
        }
        Object.assign(clothes, updateClothesDto);
        return await this.clothesRepository.save(clothes);
      } catch (error) {
        if (error instanceof NotFoundException) {
          throw error;
        }
        this.handleDatabaseError(error, 'Ocurrió un error al actualizar el anuncio de ropa.');
      }
    }
  
    async deleteClothes(id: string): Promise<{ message: string }> {
      try {
        const clothes = await this.clothesRepository.findOneBy({ id });
        if (!clothes) {
          throw new NotFoundException(`Anuncio de ropa con ID ${id} no encontrado.`);
        }
        await this.clothesRepository.remove(clothes);
        return { message: 'Anuncio de ropa eliminado exitosamente.' };
      } catch (error) {
        if (error instanceof NotFoundException) {
          throw error;
        }
        this.handleDatabaseError(error, 'Ocurrió un error al eliminar el anuncio de ropa.');
      }
    }
  }
  