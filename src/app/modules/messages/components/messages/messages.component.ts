import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent implements OnInit {
  messagesCount: number = 5;
  messagesArray;
  constructor() {}

  ngOnInit(): void {
    this.messagesArray = Array.from(
      { length: this.messagesCount },
      (_, index) => ({
        name: "client name",
        email: "client email",
        message: "message content",
      })
    );
  }
}
