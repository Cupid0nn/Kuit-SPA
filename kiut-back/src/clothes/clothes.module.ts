import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClothesController } from './clothes.controller';
import { ClothesService } from './clothes.service';
import { Clothes } from '../entityes/clothes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clothes])],
  controllers: [ClothesController],
  providers: [ClothesService],
})
export class ClothesModule {}
