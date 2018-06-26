import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TemplateModule } from './Templates/template.module'
import { AppController } from 'app.controller';

@Module({
  imports: [
    TemplateModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}