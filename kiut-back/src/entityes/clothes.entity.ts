import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as UUID } from 'uuid';

@Entity()
export class Clothes {
  @PrimaryGeneratedColumn( 'uuid' )
  id: string = UUID();

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  description: string;

  @Column()
  stock: number;

  @Column({ nullable: true })
  imageUrl: string;
}
