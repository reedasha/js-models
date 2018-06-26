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
<<<<<<< HEAD
      username: 'Mukhamed',
      password: 'Muhamed210698',
      database: 'Muhamed',
=======
      username: 'root',
      password: 'root',
      database: 'test',
>>>>>>> 5b765aeb26cc4ad6e4ba2303e222cab7096c683d
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
