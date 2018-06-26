import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { RecepientService } from './recepient.service'

// import { RecepientController } from './recepient.controller';
import { Recepient } from './recepient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recepient])],
  // providers: [RecepientService],
  // controllers: [RecepientController],
})
export class RecepientModule {}
