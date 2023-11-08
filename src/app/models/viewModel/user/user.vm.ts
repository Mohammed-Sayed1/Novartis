export class UserViewModel {
    Id: string;
    FirstName: string;
    LastName: string;
    UserName: string;
    Email: string;
    Password: string;
    ConfirmPassword: string;
    PhoneNumber: string;
    GenderID: number;
    Gender: string;
    Address: string;
    CityID: number;
    CityName: string;
    RegionID: number;
    Region: string;
    CountryID: number;
    Country: string;
    BirthDate?: Date;
    IsActive: boolean;
    CreatorId?: number;
    CreationDate?: Date;
    ModifierId?: number;
    LastModifiedDate?: Date;
  Role: string;
  RoleId: string;
}