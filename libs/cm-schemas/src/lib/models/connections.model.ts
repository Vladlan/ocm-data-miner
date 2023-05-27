import { SchemaFactory } from '@nestjs/mongoose';
import { ConnectionsSchema } from '../schemas';

export const ConnectionsModel = SchemaFactory.createForClass(ConnectionsSchema);
