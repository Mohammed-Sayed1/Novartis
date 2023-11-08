import { PagingModel } from "../shared/pagingModel-vm";

// export class LocationSearchVM extends PagingModel {
export class LocationSearchVM  {
  pageIndex:number;
  pageSize:number;
    LocationName: string ="";
    LocationNameAr: string="";
    LocationCode: string="";
    LocationNumber: string="";
    BuildingName: string="";
    Address: string="";
    Details: string="";
    Longitude: number;
    Latitude: number;
    LocationTypeID?: number;
    CityId?: number;
 
  }