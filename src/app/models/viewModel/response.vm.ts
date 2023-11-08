import { HttpStatusCodeEnum } from "../enums/http-status-code.enum";

export class ResponseVm<T> {
  StatusCode: HttpStatusCodeEnum;
  Messages: string[];
  Data: T;
  DataCount: number;
}