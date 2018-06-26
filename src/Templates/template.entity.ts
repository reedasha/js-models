import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Message } from '../Message/message.entity'

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

  @OneToMany(type => Message, message => message.template) // note: we will create author property in the Photo class below
  messages: Message[];
} 