import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class CountrySchema {
  @Prop()
  ISOCode: string;

  @Prop()
  ContinentCode: string;

  @Prop()
  ID: number;

  @Prop()
  Title: string;
}
