import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  OcmImportMetaDocument,
  OcmImportMetaSchema,
  POIDocument,
  POISchema,
  TYPE_LAST_IMPORT_START_TIMESTAMP,
} from '@ocm-data-miner/cm-schemas';
import { Model } from 'mongoose';
import { map, firstValueFrom } from 'rxjs';
import { OCM_API_KEY, OCM_API_URL, OCM_DATA_SOURCE_URL } from '../constants';
import { ConfigService } from '@nestjs/config';
import { getOneWeekAgo } from '../utils';

const POI_REQUIRED_KEYS = [
  'OperatorInfo',
  'StatusType',
  'AddressInfo',
  'Connections',
];

@Injectable()
export class OcmDataImportService {
  constructor(
    @InjectModel(OcmImportMetaSchema.name)
    private ocmImportMetaModel: Model<OcmImportMetaDocument>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @InjectModel(POISchema.name) private poiModel: Model<POIDocument>
  ) {}

  getOcmData(since: string): any {
    const key = this.configService.get(OCM_API_KEY);
    const url = this.configService.get(OCM_API_URL);
    const finalUrl = OCM_DATA_SOURCE_URL(url, key, since);
    return this.httpService.get(finalUrl).pipe(
      map((res) => {
        return res.data.map((poi) => {
          const newPoi = {};
          POI_REQUIRED_KEYS.forEach((key) => {
            newPoi[key] = poi[key];
          });
          return newPoi;
        });
      })
    );
  }

  async importOcmData() {
    const importStartTimestamp = new Date().toISOString();
    const oneWeekAgo = getOneWeekAgo();
    const lastInsertData = await this.ocmImportMetaModel.findOne({
      where: { type: TYPE_LAST_IMPORT_START_TIMESTAMP },
    });

    const since =
      lastInsertData?.lastImportStartTimestamp || oneWeekAgo;
    const ocmData = await firstValueFrom(this.getOcmData(since));
    const pois = await this.poiModel.create(ocmData, {
      validateBeforeSave: false,
    });
    if (pois && pois.length) {
      Logger.log(`Successfully inserted ${pois.length} POIs`);
    }
    return await this.ocmImportMetaModel.updateOne(
      { type: TYPE_LAST_IMPORT_START_TIMESTAMP },
      {
        lastImportStartTimestamp: importStartTimestamp,
      },
      { upsert: true }
    );
  }
}
