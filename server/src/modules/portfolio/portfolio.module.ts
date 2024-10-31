import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Work } from './entities/work.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Work])],
  providers: [PortfolioService],
  controllers: [PortfolioController],
})
export class PortfolioModule {}
