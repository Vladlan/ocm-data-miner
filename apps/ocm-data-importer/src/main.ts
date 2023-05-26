/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { OcmDataImportService } from './app/ocm-data-import.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const ocmDataImportService = app.get(OcmDataImportService);
  ocmDataImportService.importOcmData()
  Logger.log(
    `🚀 Finished OCM data import`
  );
  await app.close();
}

bootstrap();
