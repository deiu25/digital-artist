import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioService } from './portfolio.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Work } from './entities/work.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

describe('PortfolioService', () => {
  let service: PortfolioService;
  let repo: Repository<Work>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PortfolioService,
        {
          provide: getRepositoryToken(Work),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<PortfolioService>(PortfolioService);
    repo = module.get<Repository<Work>>(getRepositoryToken(Work));
  });

  it('should create a new work', async () => {
    const createWorkDto = { title: 'New Art', description: 'Test description', clientUrl: 'http://example.com' };
    const workEntity = { id: 1, ...createWorkDto }; // Definim un obiect de tip Work

    jest.spyOn(repo, 'create').mockReturnValue(workEntity as Work);
    jest.spyOn(repo, 'save').mockResolvedValue(workEntity as Work);
    
    expect(await service.create(createWorkDto)).toEqual(workEntity);
  });

  it('should find all works', async () => {
    const worksArray = [{ title: 'Art 1' }, { title: 'Art 2' }];
    jest.spyOn(repo, 'find').mockResolvedValue(worksArray as Work[]);

    expect(await service.findAll()).toEqual(worksArray);
  });

  it('should throw NotFoundException if work not found', async () => {
    jest.spyOn(repo, 'findOne').mockResolvedValue(null);

    await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
  });
});
