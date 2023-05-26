import { Test, TestingModule } from '@nestjs/testing';
import { POIService } from './poi.service';

describe('PoiService', () => {
  let service: POIService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [POIService],
    }).compile();

    service = module.get<POIService>(POIService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
