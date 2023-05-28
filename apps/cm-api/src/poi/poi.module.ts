import { Module } from '@nestjs/common';
import { POIService } from './poi.service';
import { MongooseModule } from '@nestjs/mongoose';
import { POIModel, POISchema } from '@ocm-data-miner/cm-schemas';
import { POIController } from './poi.controller';
import PoiResolver from './graphql/poi.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: POISchema.name, schema: POIModel }]),
  ],
  providers: [POIService, PoiResolver],
  controllers: [POIController],

})
export class POIModule {}
