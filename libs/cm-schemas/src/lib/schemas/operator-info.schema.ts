import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class OperatorInfoSchema {
  @Prop()
  WebsiteURL: string;

  @Prop()
  PhonePrimaryContact: string;

  @Prop()
  IsPrivateIndividual: boolean;

  @Prop()
  ContactEmail: string;

  @Prop()
  IsRestrictedEdit: boolean;

  @Prop()
  ID: number;

  @Prop()
  Title: string;
}
