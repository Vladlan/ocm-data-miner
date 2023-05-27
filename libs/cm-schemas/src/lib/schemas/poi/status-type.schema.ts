import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class StatusTypeSchema {
  @Prop()
  IsOperational: boolean;

  @Prop()
  IsUserSelectable: boolean;

  @Prop()
  ID: number;

  @Prop()
  Title: string;
}
