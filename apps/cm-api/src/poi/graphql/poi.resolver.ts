import { Resolver, Query, Args, ArgsType, Field } from '@nestjs/graphql';
import { POIService } from '../poi.service';
import { PoiGq } from '@ocm-data-miner/cm-schemas';

@ArgsType()
export class getPoiArg {
  @Field(() => String)
  public id: string;
}

@Resolver(PoiGq)
export default class PoiResolver {
  constructor(private readonly poiService: POIService) {}
  // @Query(() => [PoiGq])
  // public async getPois(): Promise<Poi[]> {
  //   const pois = await this.poiService.findAllPois();
  //   return pois;
  // }

  // @Query(() => PoisConnection, { name: 'pois' })
  // pois(@Args() args: ConnectionArgs) {
  //   return this.poiService.findAllPoisRelay(args);
  // }

  @Query(() => PoiGq)
  public async getPoi(@Args() arg: getPoiArg): Promise<PoiGq> {
    const zip = await this.poiService.findById(arg.id);
    return zip;
  }
}
