import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class LevelSchema {
  @Prop()
  Comments: string;

  @Prop()
  IsFastChargeCapable: boolean;

  @Prop()
  ID: number;

  @Prop()
  Title: string;
}
