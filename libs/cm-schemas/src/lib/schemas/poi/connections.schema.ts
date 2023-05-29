import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IConnectionType,
  ICurrentType,
  ILevel,
  IStatusType,
} from '../../types';
import { ConnectionTypeSchema } from './connection-type.schema';
import { StatusTypeSchema } from './status-type.schema';
import { LevelSchema } from './level.schema';
import { CurrentTypeSchema } from './current-type.schema';

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
