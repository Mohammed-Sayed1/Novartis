import { SearchKeysEnum } from "../../enums/search-keys.enum";

export class SearchFilterVM {
    SearchKey: SearchKeysEnum;
    SearchValue: string;
    pageSize: number;
    pageIndex: number;
    total: number;
    states: string;
}
