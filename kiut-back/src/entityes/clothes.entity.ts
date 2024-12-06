import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clothes {
  @PrimaryGeneratedColumn()
  id: number;

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
