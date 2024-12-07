import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClothesController } from './clothes.controller';
import { ClothesService } from './clothes.service';
import { Clothes } from '../entityes/clothes.entity';
import { ClothesRepository } from './clothes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Clothes])],
  controllers: [ClothesController],
  providers: [ClothesService, ClothesRepository],
})
export class ClothesModule {}
