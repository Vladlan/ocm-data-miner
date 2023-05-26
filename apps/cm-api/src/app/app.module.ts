import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGO_URL } from '../constants';
import Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';
import { POIModule } from '../poi/poi.module';

@Module({
  imports: [
    POIModule,
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
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
