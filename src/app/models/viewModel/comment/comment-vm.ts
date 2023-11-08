import { Time } from "@angular/common";

export class CommentVM {
    id: number;
    ticket_id: number;
    user_id: string;
    user_name: string;
    comment: string;
    created_date: Date;
    comment_time: Time;
    formated_date: string;
}