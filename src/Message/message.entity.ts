import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Templates } from '../Templates/template.entity'

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

  @ManyToOne(type => Templates, template => template.messages)
    template : Templates;
}
