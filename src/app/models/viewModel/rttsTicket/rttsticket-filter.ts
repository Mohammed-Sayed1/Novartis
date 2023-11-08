import { UserVm } from "../user.vm";

export class RTTSTicketFilter {
    ticketnumber: string;
    node: string;
    status: string;
    TicketType: string;
    pageSize: number;
    pageIndex: number;
    user: UserVm
}
