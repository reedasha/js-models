import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    let rabbitMqConnection = amqp.createConnection({ host: 'localhost' });
    rabbitMqConnection.on('ready')
   return this.appService.root();
}

}