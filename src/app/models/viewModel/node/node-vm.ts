import { LocationVM } from "../Locations/Location.vm";

export class NodeVm {

    Id?: number;
    NodeName?: string;

    NodeNameAr?: string;

    NodeCode?: string;

    NodeIp?: string;

    NodeModelId?: number;

    NodeModelName?: string;

    VendorId?: number;

    VendorName?: string;

    PartNumber?: string;

    SerialNumber?: string;

    PortsCount?: number;

    UsedPortsCount?: number;

    DownstreamBw?: number;

    UpstreamBw?: number;

    Details?: string;

    NodeTypeId?: number;

    LocationId?: number;

    ParentNodeId?: number;

    NodeTypeName?: string;

    CreationDate?: Date;

    LastModificationDate?: Date;

    CreatorId?: number;

    Location?: LocationVM
}