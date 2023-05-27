import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { OcmDataImportService } from './app/ocm-data-import.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const ocmDataImportService = app.get(OcmDataImportService);
  await ocmDataImportService.importOcmData()
  Logger.log(
    `🚀 Finished OCM data import`
  );
  await app.close();
}

bootstrap();
