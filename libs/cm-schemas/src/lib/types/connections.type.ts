import { IConnectionType } from './connection-type.type';
import { ICurrentType } from './current-type.type';
import { ILevel } from './level.type';
import { IStatusType } from './status-type.type';

export interface IConnections {
  ID: number;
  ConnectionTypeID: number;
  ConnectionType: IConnectionType;
  StatusTypeID: number;
  StatusType: IStatusType;
  LevelID: number;
  Level: ILevel;
  PowerKW: number;
  CurrentTypeID: number;
  CurrentType: ICurrentType;
  Quantity: number;
}
