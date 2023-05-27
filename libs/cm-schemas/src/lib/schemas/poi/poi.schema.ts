import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AddressInfoSchema } from './address-info.schema';
import { OperatorInfoSchema } from './operator-info.schema';
import { StatusTypeSchema } from './status-type.schema';
import { Types } from 'mongoose';
import { UUID } from 'bson';
import { IAddressInfo, IConnectionType, IConnections, IOperatorInfo, IStatusType } from '../../types';
import { ConnectionsModel } from '../../models';

export type POIDocument = POISchema & Document;

// TO MAKE ConnectionsModel work we should uncomment this code and comment the ConnectionsModel 
// @Schema({
//   storeSubdocValidationError: false,
//   strict: false,
// })
// export class ConnectionsSchema extends Document {
//   @Prop()
//   ID: number;

//   @Prop()
//   ConnectionTypeID: number;

//   @Prop(
//     raw({
//       FormalName: { type: String },
//       IsDiscontinued: { type: Boolean },
//       IsObsolete: { type: Boolean },
//       ID: { type: Number },
//       Title: { type: String },
//     })
//   )
//   ConnectionType: IConnectionType;

//   @Prop(
//     raw({
//       IsOperational: { type: Boolean },
//       IsUserSelectable: { type: Boolean },
//       ID: { type: Number },
//       Title: { type: String },
//     })
//   )
//   StatusType: Record<string, any>;

//   @Prop()
//   StatusTypeID: number;

//   @Prop(
//     raw({
//       Comments: { type: String },
//       IsFastChargeCapable: { type: Boolean },
//       ID: { type: Number },
//       Title: { type: String },
//     })
//   )
//   Level: Record<string, any>;

//   @Prop()
//   LevelID: number;
//   @Prop()
//   PowerKW: number;
//   @Prop()
//   CurrentTypeID: number;

//   @Prop(
//     raw({
//       Description: { type: String },
//       ID: { type: Number },
//       Title: { type: String },
//     })
//   )
//   CurrentType: Record<string, any>;

//   @Prop()
//   Quantity: number;
// }

// export const ConnectionsModel = SchemaFactory.createForClass(ConnectionsSchema);

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
