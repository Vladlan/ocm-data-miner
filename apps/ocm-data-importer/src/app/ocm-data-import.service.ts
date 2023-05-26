import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class OcmDataImportService {
  importOcmData() {
    Logger.log('importOcmData')
  }
}
