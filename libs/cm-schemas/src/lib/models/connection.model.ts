import { SchemaFactory } from '@nestjs/mongoose';
import { ConnectionsSchema } from '../schemas';

export const ConnectionModel = SchemaFactory.createForClass(ConnectionsSchema);
