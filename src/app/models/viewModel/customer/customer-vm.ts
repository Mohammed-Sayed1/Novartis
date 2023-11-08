import { CustomerNumberVm } from "./customer-number-vm";
import { DummyVM } from "./Dummy-vm";
import { NumberServiceVM } from "./number-services-vm";

export class CustomerVm {

    ID?: number;
    customerName?: string;
    customerNameAr?: string;
    customerCode?: string;
    accountNumber?: string;
    customerLevelName?: string;
    customerClassName?: string;
    businessUnitName?: string;
    CustomerTypeName?: string;
    businessUnitId?: number;
    allNumbersCount?: number;
    allServicesCount?: number;
    allNodesCount?: number;
    customerNumbers?: CustomerNumberVm[]
    CustomeNumbers?: CustomerNumberVm[]
    CustomerServices?: NumberServiceVM[]
    DummyVM?: DummyVM;
}