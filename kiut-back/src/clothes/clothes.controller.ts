import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { Clothes } from '../entityes/clothes.entity';
import { CreateClothesDto} from 'src/dto´s/createclothedto';

@Controller('clothes')
export class ClothesController {
  constructor(private readonly clothesService: ClothesService) {}

  @Post()
  createClothes(@Body() createClothesDto: CreateClothesDto) {
    return this.clothesService.createClothes(createClothesDto);
  }

  @Get()
  getClothes() {
    return this.clothesService.getClothes();
  }

  @Get(':id')
  getOneClothes(@Param('id') id: string) {
    return this.clothesService.getOneClothes(id);
  }

  @Put(':id')
  updateClothes(@Param('id') id: string, @Body() updateClothesDto: CreateClothesDto) {
    return this.clothesService.updateClothes(id, updateClothesDto);
  }

  @Delete(':id')
  DeleteClothes(@Param('id') id: string) {
    return this.clothesService.DeleteClothes(id);
  }
}
