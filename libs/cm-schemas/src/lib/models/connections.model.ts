import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IConnectionType, ICurrentType, ILevel, IStatusType } from '../types';
import { CurrentTypeSchema } from '../schemas/poi/current-type.schema';
import { LevelSchema } from '../schemas/poi/level.schema';
import { StatusTypeSchema } from '../schemas/poi/status-type.schema';
import { ConnectionTypeSchema } from '../schemas/poi/connection-type.schema';

@Schema({
  storeSubdocValidationError: false,
  strict: false,
})
class ConnectionsSchema1 extends Document {
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

export const ConnectionsModel =
  SchemaFactory.createForClass(ConnectionsSchema1);
