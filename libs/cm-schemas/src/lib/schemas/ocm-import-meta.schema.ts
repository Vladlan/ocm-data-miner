import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { UUID } from 'bson';
import { TYPE_LAST_IMPORT_START_TIMESTAMP } from '../constants/schemas.const';

export type OcmImportMetaDocument = OcmImportMetaSchema & Document;

@Schema({
  storeSubdocValidationError: false,
  collection: 'OCM_IMPORT_META',
  strict: false,
})
export class OcmImportMetaSchema {
  @Prop({ type: Types.ObjectId, default: () => new UUID().toBinary() })
  _id: string;

  @Prop({ unique: true, default: TYPE_LAST_IMPORT_START_TIMESTAMP })
  public type: string;

  @Prop()
  public lastImportStartTimestamp: string;
}

