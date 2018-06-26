import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { TemplateModule } from './Templates/template.module'
import { Message } from './Message/message.module'
import { Recepient } from './Recepient/recepient.module'
import { EventModule } from './Event/event.module';
import { AppController } from 'app.controller';

@Module({
  imports: [
    TemplateModule, EventModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'root',
      database: 'postgres',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
