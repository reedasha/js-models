import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageService } from './message.service'

import { MessageController } from './message.controller';
import { Message } from './message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [MessageService],
  controllers: [MessageController],
})
export class MessageModule {}
