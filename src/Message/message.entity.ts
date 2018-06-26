import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  subject: string;

  @Column('text')
  content: string;

  @Column('text')
  attachment: string;

}
