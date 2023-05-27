import { SchemaFactory } from '@nestjs/mongoose';
import { OcmImportMetaSchema } from '../schemas';

export const OcmImportMetaModel = SchemaFactory.createForClass(OcmImportMetaSchema);
