import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Work } from './entities/work.entity';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(Work)
    private workRepository: Repository<Work>,
  ) {}

  async create(createWorkDto: CreateWorkDto): Promise<Work> {
    const work = this.workRepository.create(createWorkDto);
    return await this.workRepository.save(work);
  }

  async findAll(): Promise<Work[]> {
    return await this.workRepository.find();
  }

  async findOne(id: number): Promise<Work> {
    try {
        return await this.workRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new NotFoundException(`Work with ID ${id} not found`);
    }
  }

  async update(id: number, updateWorkDto: UpdateWorkDto): Promise<Work> {
    await this.workRepository.update(id, updateWorkDto);
    return this.findOne(id);
  }
  

  async remove(id: number): Promise<void> {
    await this.workRepository.delete(id);
  }
}
