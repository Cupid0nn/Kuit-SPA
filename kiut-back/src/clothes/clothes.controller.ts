import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { Clothes } from '../entityes/clothes.entity';
import { CreateClothesDto } from '../dto´s/createclothedto';

@Controller('clothes')
export class ClothesController {
  constructor(private readonly clothesService: ClothesService) {}

  @Post()
  create(@Body() createClothesDto: CreateClothesDto): Promise<Clothes> {
    return this.clothesService.create(createClothesDto);
  }

  @Get()
  findAll(): Promise<Clothes[]> {
    return this.clothesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Clothes> {
    return this.clothesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateClothesDto: CreateClothesDto): Promise<Clothes> {
    return this.clothesService.update(id, updateClothesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.clothesService.remove(id);
  }
}
