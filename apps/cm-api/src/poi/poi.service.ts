import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { POIDocument, POISchema } from '@ocm-data-miner/cm-schemas';
import { from } from 'uuid-mongodb';
import { mockData } from './mock-data';
import { connectionFromArraySlice } from 'graphql-relay';
import { ConnectionArgs, getPagingParameters } from '@ocm-data-miner/relay';

@Injectable()
export class POIService {
  constructor(
    @InjectModel(POISchema.name) private poiModel: Model<POIDocument>
  ) {}

  async findById(id: string): Promise<POIDocument> {
    const poi = await this.poiModel.findById(from(id));
    return poi;
  }

  async findAll(args: ConnectionArgs) {
    const { limit, offset } = getPagingParameters(args);
    const [results, count] = await Promise.all([
      this.poiModel.find({}, null, {
        limit,
        skip: offset,
      }),
      this.poiModel.countDocuments(),
    ]);
    return connectionFromArraySlice(results, args, {
      arrayLength: count,
      sliceStart: offset || 0,
    });
  }

  async create(): Promise<POIDocument[]> {
    const poi = await this.poiModel.create(mockData, {
      validateBeforeSave: false,
    });
    return poi;
  }
}
