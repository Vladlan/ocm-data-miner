import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { POIService } from './poi.service';
import { POIDocument } from '@ocm-data-miner/cm-schemas';

@Controller('poi')
export class POIController {
  constructor(private readonly poiService: POIService) {}

  @Get('/create')
  async createPoi(): Promise<POIDocument[]> {
    return await this.poiService.create();
  }
 
  @Get(':id')
  async getPoiById(@Param('id') id: string): Promise<POIDocument> {
    return await this.poiService.findById(id);
  }
}
