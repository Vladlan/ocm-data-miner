import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class ConnectionTypeSchema {
  @Prop()
  FormalName: string;

  @Prop()
  IsDiscontinued: boolean;

  @Prop()
  IsObsolete: boolean;

  @Prop()
  ID: number;

  @Prop()
  Title: string;
}
