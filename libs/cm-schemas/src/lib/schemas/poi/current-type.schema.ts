import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class CurrentTypeSchema {
  @Prop()
  Description: string;

  @Prop()
  ID: number;

  @Prop()
  Title: string;
}
