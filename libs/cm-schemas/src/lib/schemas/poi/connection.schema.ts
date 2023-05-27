import { Prop, Schema, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IConnectionType } from '../../types';

@Schema({
  storeSubdocValidationError: false,
  strict: false,
})
export class ConnectionsSchema extends Document {
  @Prop()
  ID: number;

  @Prop()
  ConnectionTypeID: number;

  @Prop(
    raw({
      FormalName: { type: String },
      IsDiscontinued: { type: Boolean },
      IsObsolete: { type: Boolean },
      ID: { type: Number },
      Title: { type: String },
    })
  )
  ConnectionType: IConnectionType;

  @Prop(
    raw({
      IsOperational: { type: Boolean },
      IsUserSelectable: { type: Boolean },
      ID: { type: Number },
      Title: { type: String },
    })
  )
  StatusType: Record<string, any>;

  @Prop()
  StatusTypeID: number;

  @Prop(
    raw({
      Comments: { type: String },
      IsFastChargeCapable: { type: Boolean },
      ID: { type: Number },
      Title: { type: String },
    })
  )
  Level: Record<string, any>;

  @Prop()
  LevelID: number;
  @Prop()
  PowerKW: number;
  @Prop()
  CurrentTypeID: number;

  @Prop(
    raw({
      Description: { type: String },
      ID: { type: Number },
      Title: { type: String },
    })
  )
  CurrentType: Record<string, any>;

  @Prop()
  Quantity: number;
}
