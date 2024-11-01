import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('PortfolioController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });

  it('/portfolio (GET) - should return all works', () => {
    return request(app.getHttpServer())
      .get('/portfolio')
      .expect(200);
  });

  it('/portfolio (POST) - should create a new work', () => {
    return request(app.getHttpServer())
      .post('/portfolio')
      .send({
        title: 'New Project',
        description: 'Project description',
        clientUrl: 'http://example.com',
      })
      .expect(201);
  });
});
