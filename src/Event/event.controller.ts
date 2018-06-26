import { Get, Delete, Put, Param, Post, Body, Controller } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './create.event.dto';
import * as Amqp from 'amqp-ts';

var connection = new Amqp.Connection("amqp://guest:guest@localhost:5672");
var exchange = connection.declareExchange("ExchangeName");
var queue = connection.declareQueue("QueueName");

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {

    queue.bind(exchange);
    queue.activateConsumer((message) => {
        console.log("Message received: " + message.getContent());
    });
  }




  //return this.eventService.findAll();
  // @Post('/create')
  // createEvent(@Body() createEventDto: CreateEventDto){
  //   this.eventService.createEvent(createEventDto);
  // }
  // @Get()
  // findAll(): JSON {
  //
  // }
  // @Get('/remove/:id')
  // @Delete('/remove/:id')
  // removeOne(@Param('id') id){
  //   this.eventService.remove(id);
  // }
  // @Put('/update')
  // update(@Body() updateEventDto: CreateEventDto){
  //   this.eventService.createEvent(updateEventDto);
  // }
}
