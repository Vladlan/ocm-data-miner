import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AddressInfoSchema } from './address-info.schema';
import { OperatorInfoSchema } from './operator-info.schema';
import { StatusTypeSchema } from './status-type.schema';
import { Types } from 'mongoose';
import { UUID } from 'bson';
import {
  IAddressInfo,
  IConnections,
  IOperatorInfo,
  IStatusType,
} from '../../types';
import { ConnectionsModel } from '../../models';

export type POIDocument = POISchema & Document;

@Schema({
  storeSubdocValidationError: false,
  collection: 'POI',
  strict: false,
})
export class POISchema {
  @Prop({ type: Types.ObjectId, default: () => new UUID().toBinary() })
  _id: string;

  @Prop({ type: OperatorInfoSchema, _id: false })
  OperatorInfo: IOperatorInfo;

  @Prop({ type: StatusTypeSchema, _id: false })
  StatusType: IStatusType;

  @Prop({ type: AddressInfoSchema, _id: false })
  AddressInfo: IAddressInfo;

  @Prop({ type: [ConnectionsModel], default: [], _id: false })
  Connections: IConnections[];
}
