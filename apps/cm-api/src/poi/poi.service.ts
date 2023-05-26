import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { POIDocument, POISchema } from '@ocm-data-miner/cm-schemas';
import { from } from 'uuid-mongodb';
import { mockData } from './mock-data';

@Injectable()
export class POIService {
  constructor(
    @InjectModel(POISchema.name) private poiModel: Model<POIDocument>
  ) {}

  async findById(id: string): Promise<POISchema> {
    const poi = await this.poiModel.findById(from(id));
    return poi;
  }

  async create(): Promise<any> {
    const poi = await this.poiModel.create(mockData, {
      validateBeforeSave: false,
    });
    return poi;
  }
}
