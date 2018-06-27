import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { TemplateModule } from './Templates/template.module'
import { MessageModule } from './Message/message.module'
import { RecepientModule } from './Recepient/recepient.module'
import { EventModule } from './Event/event.module';
import { AppController } from 'app.controller';
const config = require('../config');

@Module({
  imports: [
    TemplateModule,
    MessageModule,
    RecepientModule,
    EventModule,
    TypeOrmModule.forRoot({
      type: config.type,
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
      entities: config.entities,
      synchronize: config.synchronize
    }),
  ]

})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

