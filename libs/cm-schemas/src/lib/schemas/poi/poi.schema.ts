import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AddressInfoSchema } from './address-info.schema';
import { OperatorInfoSchema } from './operator-info.schema';
import { StatusTypeSchema } from './status-type.schema';
import { Types } from 'mongoose';
import { UUID } from 'bson';
import {
  IAddressInfo,
  IConnectionType,
  IConnections,
  ICurrentType,
  ILevel,
  IOperatorInfo,
  IStatusType,
} from '../../types';
import { type } from 'os';
import { CurrentTypeSchema } from './current-type.schema';
import { LevelSchema } from './level.schema';
// import { ConnectionsModel } from '../../models';
import { ConnectionTypeSchema } from './connection-type.schema';

export type POIDocument = POISchema & Document;

// TO MAKE ConnectionsModel work we should uncomment this code and comment the ConnectionsModel
@Schema({
  storeSubdocValidationError: false,
  strict: false,
})
export class ConnectionsSchema extends Document {
  @Prop()
  ID: number;

  @Prop()
  ConnectionTypeID: number;

  @Prop({
    type: ConnectionTypeSchema,
    _id: false,
  })
  ConnectionType: IConnectionType;

  @Prop({
    type: StatusTypeSchema,
    _id: false,
  })
  StatusType: IStatusType;

  @Prop()
  StatusTypeID: number;

  @Prop({ type: LevelSchema, _id: false })
  Level: ILevel;

  @Prop()
  LevelID: number;
  @Prop()
  PowerKW: number;
  @Prop()
  CurrentTypeID: number;

  @Prop({ type: CurrentTypeSchema, _id: false })
  CurrentType: ICurrentType;

  @Prop()
  Quantity: number;
}

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
