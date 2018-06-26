import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Templates } from './template.entity';

@Injectable()
export class TemplateService {
    constructor(
        @InjectRepository(Templates)
        private readonly TemplateRepository: Repository<Templates>,
        ) {}

  async create(Template: Templates): Promise<Templates> {
    await this.TemplateRepository.save(Template);
    return Template;
  }

  async findAll(): Promise<Templates[]> {
    return await this.TemplateRepository.find();
  }

  async findOne(int: number): Promise<Templates> {
    return await this.TemplateRepository.findOne({id: int});
  }

  async deleteOne(int: number): Promise<Templates> {
    try {
        const toDelete = this.TemplateRepository.findOne({id: int});
        await this.TemplateRepository.delete({id: int});
        return toDelete;
    } catch (e) {
        console.log(e);
    }
  }

  async update(Template: Templates): Promise<Templates> {
    try {
        await this.TemplateRepository.save(Template)
        console.log(Template)
        return Template;
    } catch (e) {
        console.log(e)
    }
    }
}