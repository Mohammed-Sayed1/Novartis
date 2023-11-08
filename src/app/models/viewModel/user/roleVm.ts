export class RoleViewModel {
  Id: string;
    RoleName: string;
    IsActive: boolean;
    CreatorId: string;
    CreationDate?: Date;
    ModifierId: string;
    LastModificedDate?: Date;
    CanEdit?: boolean;
}