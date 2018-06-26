import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { CreateTemplateDto } from './create-template.dto';
import { UpdateTemplateDto } from './update-template.dto';
import { TemplateService } from './template.service'
import { Template } from './template.interface'

@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Get()
  async findAll(): Promise<Template[]> {
    return await this.templateService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.templateService.findOne(id);
  }

  @Post()
  async create(@Body() createTemplateDto: CreateTemplateDto): Promise<Template> {
    return await this.templateService.create(createTemplateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
      return await this.templateService.deleteOne(id);
  }

  @Put()
  async update(@Body() request: UpdateTemplateDto): Promise<Template> {
      return await this.templateService.update(request);
  }
}