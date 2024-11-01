import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Work } from './entities/work.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createWork(
    @Body() createWorkDto: CreateWorkDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    if (image) {
      createWorkDto.imagePath = image.path; 
    }
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
  @UseInterceptors(FileInterceptor('image'))
  async updateWork(
    @Param('id') id: number,
    @Body() updateWorkDto: UpdateWorkDto,
    @UploadedFile() image?: Express.Multer.File,
  ) {
    if (image) {
      updateWorkDto.imagePath = image.path; // setează calea fișierului în DTO
    }
    return this.portfolioService.update(+id, updateWorkDto);
  }

  @Delete(':id')
  async deleteWork(@Param('id') id: number): Promise<void> {
    return this.portfolioService.remove(id);
  }
}
