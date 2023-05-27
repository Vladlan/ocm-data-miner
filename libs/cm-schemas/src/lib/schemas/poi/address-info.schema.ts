import { Prop, Schema } from '@nestjs/mongoose';
import { ICountry } from '../../types/country.type';
import { CountrySchema } from './country.schema';

@Schema()
export class AddressInfoSchema {
  @Prop()
  ID: number;

  @Prop()
  Title: string;

  @Prop()
  AddressLine1: string;

  @Prop()
  Town: string;

  @Prop()
  StateOrProvince: string;

  @Prop()
  Postcode: string;

  @Prop()
  CountryID: number;

  @Prop({ type: CountrySchema })
  Country: ICountry;

  @Prop()
  Latitude: number;

  @Prop()
  Longitude: number;

  @Prop()
  DistanceUnit: number;
}
