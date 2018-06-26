import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Templates } from '../Templates/template.entity'
import { Recepient } from 'Recepient/recepient.entity';

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

  @OneToMany(type => Recepient, recepients => recepients.message) // note: we will create author property in the Photo class below
  recepients: Recepient[];
}
