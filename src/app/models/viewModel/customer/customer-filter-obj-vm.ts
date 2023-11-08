import { CustomerVm } from "./customer-vm";

export class CustomerFilterVm {
    RoleName: string;
    pageIndex?: number;
    pageSize?: number; 
    roleId?: number;
    customer:CustomerVm
}