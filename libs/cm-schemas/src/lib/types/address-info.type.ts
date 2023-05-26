import { ICountry } from "./country.type";

export interface IAddressInfo {
  ID: number;
  Title: string;
  AddressLine1: string;
  Town: string;
  StateOrProvince: string;
  Postcode: string;
  CountryID: number;
  Country: ICountry;
  Latitude: number;
  Longitude: number;
  DistanceUnit: number;
}
