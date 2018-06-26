import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Templates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  subject: string; 

  @Column('text')
  body: string;

  @Column()
  attachment: string;
} 