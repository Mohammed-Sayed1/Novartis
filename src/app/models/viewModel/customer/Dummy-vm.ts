import { NodeVm } from "../node/node-vm";
import { CustomerPathVm } from "./customer-path-vm";
import { CustomerPathDataVM } from "./CustomerPathDataVM";

export class DummyVM {

      ID :number
      PhysicalHealthCheck:string;
      LogicalHealthcheck :string;
      ConnectivityDetails:string;
      ActiveOutage :string;
      ActiveMDT :string;
      Alepostatus :string;
      ONTPowerLevel :string;
      FaultHistory :string;
      WiFiHomeNetworkScore :string;
      InternetExperience :string;
      TR143SpeedTestResults :string;
      Last5CDRDLUL :string;
      ConnectivityView :string;
      ServiceNumber :string;
      MDTHistory :string;
      RepeatCount :string;
    ImageIcon: string;
    CustomerId: number;
    CustomerPath: CustomerPathDataVM[];
    //  List<CustomerPathDataVM> CustomerPath 
   
}