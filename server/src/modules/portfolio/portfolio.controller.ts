import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Work } from './entities/work.entity';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post()
  async createWork(@Body() createWorkDto: CreateWorkDto): Promise<Work> {
    return this.portfolioService.create(createWorkDto);
  }

  @Get()
  async getAllWorks(): Promise<Work[]> {
    return this.portfolioService.findAll();
  }

  @Get(':id')
  async getWorkById(@Param('id') id: number): Promise<Work> {
    return this.portfolioService.findOne(id);
  }

  @Patch(':id')
  async updateWork(@Param('id') id: number, @Body() updateWorkDto: UpdateWorkDto): Promise<Work> {
    return this.portfolioService.update(id, updateWorkDto);
  }

  @Delete(':id')
  async deleteWork(@Param('id') id: number): Promise<void> {
    return this.portfolioService.remove(id);
  }
}
