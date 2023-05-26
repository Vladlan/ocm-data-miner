import { IAddressInfo } from "./address-info.type";
import { IConnection } from "./connection.type";
import { IOperatorInfo } from "./operator-info.type";
import { IStatusType } from "./status-type.type";

export interface IChargingStation extends Document {
  OperatorInfo: IOperatorInfo;
  StatusType: IStatusType;
  AddressInfo: IAddressInfo;
  Connections: IConnection[];
}
