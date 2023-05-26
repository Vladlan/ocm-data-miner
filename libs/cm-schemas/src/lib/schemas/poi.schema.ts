import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IAddressInfo } from '../types/address-info.type';
import { IOperatorInfo } from '../types/operator-info.type';
import { IStatusType } from '../types/status-type.type';
import { AddressInfoSchema } from './address-info.schema';
import { OperatorInfoSchema } from './operator-info.schema';
import { StatusTypeSchema } from './status-type.schema';
import { Types } from 'mongoose';
import { UUID } from 'bson';
import { ConnectionsSchema } from './connection.schema';

export type POIDocument = POISchema & Document;

type IConnections = {
  ID: number;
  ConnectionTypeID: number;
  StatusTypeID: number;
  LevelID: number;
  PowerKW: number;
  CurrentTypeID: number;
  Quantity: number;
};
export const ConnectionsModel = SchemaFactory.createForClass(ConnectionsSchema);

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
