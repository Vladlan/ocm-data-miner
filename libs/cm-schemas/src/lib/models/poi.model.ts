import { SchemaFactory } from '@nestjs/mongoose';
import { POISchema } from '../schemas';

export const POIModel = SchemaFactory.createForClass(POISchema);
