import { VoiceStatusEnum } from "../enums/voice-status.enum";

export class FilterVM {
    PhoneNumber: string;
    Token: string;
    ExternalToken: string;
    DN_No: string;
    AreaCode: string;
    GPONID: string;
    ONT_SERIAL_NO: string;
    RESERVATION_ID: string;
    SearchType: number;
    VoiceStatus: VoiceStatusEnum;
    OPERATOR_ID: string;
    ONT_ONU_SERIAL_NO: string;
    ONT_ONU_MODEL: string;

}