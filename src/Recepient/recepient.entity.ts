import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recepient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column('text')
  type: string[];

}
