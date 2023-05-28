import { Resolver, Query, Args, ArgsType, Field } from '@nestjs/graphql';
import { PoiGq } from '@ocm-data-miner/cm-schemas';
import { POIService } from '../poi.service';
import { PoisConnection } from './poi.response';
import { ConnectionArgs } from '../../relay';

@ArgsType()
export class getPoiArg {
  @Field(() => String)
  public id: string;
}

@Resolver(PoiGq)
export default class PoiResolver {
  constructor(private readonly poiService: POIService) {}

  @Query(() => PoisConnection, { name: 'pois' })
  public async getPois(@Args() args: ConnectionArgs) {
    const pois = await this.poiService.findAll(args);
    return pois;
  }

  @Query(() => PoiGq)
  public async getPoi(@Args() arg: getPoiArg): Promise<PoiGq> {
    const zip = await this.poiService.findById(arg.id);
    return zip;
  }
}
