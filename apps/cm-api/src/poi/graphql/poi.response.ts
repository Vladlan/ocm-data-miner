import { Field, ObjectType } from '@nestjs/graphql';
import { PoiGq } from '@ocm-data-miner/cm-schemas';
import { ConnectionCursor, Edge } from 'graphql-relay';
import { CreateConnectionType } from '@ocm-data-miner/relay';

@ObjectType()
export class PoisConnection extends CreateConnectionType<PoiGq>(PoiGq) {}


@ObjectType(`PoiResponseEdge`, { isAbstract: true })
export class PoiResponseEdge implements Edge<PoiGq> {
  @Field(() => String, { nullable: true })
  public cursor!: ConnectionCursor;

  @Field(() => PoiGq, { nullable: true })
  public node!: PoiGq;
}
