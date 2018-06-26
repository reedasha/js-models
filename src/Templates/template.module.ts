import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { Templates } from './template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Templates])],
  providers: [TemplateService],
  controllers: [TemplateController],
})
export class TemplateModule {}