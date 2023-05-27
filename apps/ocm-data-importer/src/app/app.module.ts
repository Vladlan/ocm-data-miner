import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { OcmDataImportService } from './ocm-data-import.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import Joi from 'joi';
import { MONGO_URL } from '../constants';
import { POISchema, POIModel, OcmImportMetaSchema, OcmImportMetaModel } from '@ocm-data-miner/cm-schemas';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        [MONGO_URL]: Joi.string().required(),
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get(MONGO_URL),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: POISchema.name, schema: POIModel },
      { name: OcmImportMetaSchema.name, schema: OcmImportMetaModel },
    ]),
  ],
  providers: [OcmDataImportService, ConfigService],
})
export class AppModule {}
