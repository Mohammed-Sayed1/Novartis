import { LocationSearchVM } from "./LocationSearch.vm";

// export class LocationVM extends LocationSearchVM {
export class LocationVM {
  Id: number;
  CreationDate?: Date;
  LastModificationDate?: Date;
  CityName: string;
  LocationTypeName: string;
  LocationName: string = "";
  LocationNameAr: string = "";
  LocationCode: string = "";
  LocationNumber: string = "";
  BuildingName: string = "";
  Address: string = "";
  Details: string = "";
  Longitude?: number = 0;
  Latitude?: number = 0;
  LocationTypeID: number = 0;
  CityId: number = 0;
}