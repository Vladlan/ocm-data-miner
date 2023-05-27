import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
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
    const since2 = '2023-05-26T15:55:49.454Z';
    const key = this.configService.get(OCM_API_KEY);
    const url = this.configService.get(OCM_API_URL);
    const finalUrl = OCM_DATA_SOURCE_URL(url, key, since2)
    console.log(`finalUrl: `, finalUrl);
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

  async importOcmData(): Promise<any> {
    const lastImportStartTimestamp = new Date().toISOString();
    const lastInsertData = await this.ocmImportMetaModel.findOne({
      where: { type: TYPE_LAST_IMPORT_START_TIMESTAMP },
    });
    const since =
      lastInsertData?.lastImportStartTimestamp || lastImportStartTimestamp;
    const ocmData = await firstValueFrom(this.getOcmData(since));
    console.log('ocmData: ', ocmData);

    const poi = await this.poiModel.create(ocmData, {
      validateBeforeSave: false,
    });
    console.log('poi: ', poi);

    if (lastInsertData) {
      const res1 = await this.ocmImportMetaModel.updateOne(
        { type: TYPE_LAST_IMPORT_START_TIMESTAMP },
        {
          lastImportStartTimestamp,
        }
      );
      console.log('res1: ', res1);
      return res1;
    }
    const res2 = await this.ocmImportMetaModel.create({
      type: TYPE_LAST_IMPORT_START_TIMESTAMP,
      lastImportStartTimestamp,
    });
    console.log('res2: ', res2);
    return res2;
  }
}
