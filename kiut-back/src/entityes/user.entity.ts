import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as UUID } from 'uuid';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string = UUID();

  @Column({ nullable: false })
  name: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: true })
  image: string;
}
