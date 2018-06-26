import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Message } from '../Message/message.entity'

@Entity()
export class Recepient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column('text')
  type: string[];

  @ManyToOne(type => Message, message => message.recepients)
    message : Message;

}
