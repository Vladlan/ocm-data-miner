import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CountryGq {
  @Field()
  ISOCode: string;

  @Field()
  ContinentCode: string;

  @Field()
  ID: number;

  @Field()
  Title: string;
}

@ObjectType()
export class OperatorInfoGq {
  @Field()
  WebsiteURL: string;

  @Field()
  PhonePrimaryContact: string;

  @Field()
  IsPrivateIndividual: boolean;

  @Field()
  ContactEmail: string;

  @Field()
  IsRestrictedEdit: boolean;

  @Field(() => Int)
  ID: number;

  @Field()
  Title: string;
}

@ObjectType()
export class StatusTypeGq {
  @Field()
  IsOperational: boolean;

  @Field()
  IsUserSelectable: boolean;

  @Field(() => Int)
  ID: number;

  @Field()
  Title: string;
}

@ObjectType()
export class AddressInfoGq {
  @Field(() => Int)
  ID: number;

  @Field()
  Title: string;

  @Field()
  AddressLine1: string;

  @Field()
  Town: string;

  @Field()
  StateOrProvince: string;

  @Field()
  Postcode: string;

  @Field(() => Int)
  CountryID: number;

  @Field(() => CountryGq)
  Country: CountryGq;

  @Field()
  Latitude: number;

  @Field()
  Longitude: number;

  @Field(() => Int)
  DistanceUnit: number;
}

@ObjectType()
export class ConnectionTypeGq {
  @Field()
  FormalName: string;

  @Field()
  IsDiscontinued: boolean;

  @Field()
  IsObsolete: boolean;

  @Field(() => Int)
  ID: number;

  @Field()
  Title: string;
}

@ObjectType()
export class LevelGq {
  @Field()
  Comments: string;

  @Field()
  IsFastChargeCapable: boolean;

  @Field()
  ID: number;

  @Field()
  Title: string;
}

@ObjectType()
export class CurrentTypeGq {
  @Field()
  Description: string;

  @Field()
  ID: number;

  @Field()
  Title: string;
}

@ObjectType()
export class ConnectionsGq {
  @Field(() => Int)
  ID: number;

  @Field(() => Int)
  ConnectionTypeID: number;

  @Field(() => ConnectionTypeGq)
  ConnectionType: ConnectionTypeGq;

  @Field(() => StatusTypeGq)
  StatusType: StatusTypeGq;

  @Field(() => Int)
  StatusTypeID: number;

  @Field(() => LevelGq)
  Level: LevelGq;

  @Field(() => Int)
  LevelID: number;

  @Field()
  PowerKW: number;

  @Field(() => Int)
  CurrentTypeID: number;

  @Field(() => CurrentTypeGq)
  CurrentType: CurrentTypeGq;

  @Field()
  Quantity: number;
}

@ObjectType()
export class PoiGq {
  @Field(() => ID)
  _id: string;

  @Field(() => OperatorInfoGq)
  OperatorInfo: OperatorInfoGq;

  @Field(() => StatusTypeGq)
  StatusType: StatusTypeGq;

  @Field(() => AddressInfoGq)
  AddressInfo: AddressInfoGq;

  @Field(() => [ConnectionsGq])
  Connections: ConnectionsGq[];
}
