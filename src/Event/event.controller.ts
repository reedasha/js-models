import { Get, Delete, Put, Param, Post, Body, Controller } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './create.event.dto';


@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('/create')
  createEvent(@Body() createEventDto: CreateEventDto){
    this.eventService.createEvent(createEventDto);
  }
  @Get()
  findAll(): JSON {
    return this.eventService.findAll();
  }
  @Get('/remove/:id')
  @Delete('/remove/:id')
  removeOne(@Param('id') id){
    this.eventService.remove(id);
  }
  @Put('/update')
  update(@Body() updateEventDto: CreateEventDto){
    this.eventService.createEvent(updateEventDto);
  }
}
