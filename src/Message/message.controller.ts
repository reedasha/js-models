import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { CreateMessageDto } from './create-message.dto';
import { MessageService } from './message.service'
import { Message } from './message.interface'

@Controller('Message')
export class MessageController {
  constructor(private readonly MessageService: MessageService) {}

  @Get()
  async findAll(): Promise<Message[]> {
    return await this.MessageService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    console.log("Run Get");
    return await this.MessageService.findOne(id);
  }

  @Post()
  async create(@Body() CreateMessageDto: CreateMessageDto): Promise<Message> {
    return await this.MessageService.create(CreateMessageDto);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
      return await this.MessageService.deleteOne(id);
  }
}
