import { Module } from '@nestjs/common';

import { OcmDataImportService } from './ocm-data-import.service';

@Module({
  imports: [],
  providers: [OcmDataImportService],
})
export class AppModule {}
