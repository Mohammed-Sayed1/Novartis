
export class LookupVM {
  Id: number;
  Name: string;
}


export class PermissionPagesAndActions {
  lActions: LookupVM[]=[];
  lPages: LookupVM[]=[];
  lPageActions: PageActions[]=[];
}


export class PermissionVM {
  ActionId: number;
  PageId: number;
}


export class PageActions {
  ActionID: number;
  PageId: number;
  isChecked: boolean;
}


export class RolePermission {
  RoleId: number;
  Permissions: string[];
}
