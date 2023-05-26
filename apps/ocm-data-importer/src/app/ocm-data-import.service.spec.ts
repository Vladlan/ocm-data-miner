import { Test } from '@nestjs/testing';

import { OcmDataImportService } from './ocm-data-import.service';

describe('OcmDataImportService', () => {
  let service: OcmDataImportService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [OcmDataImportService],
    }).compile();

    service = app.get<OcmDataImportService>(OcmDataImportService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service).toBeTruthy();
    });
  });
});
