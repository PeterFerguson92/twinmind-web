import { Component, Input } from "@angular/core";

@Component({
    selector: "app-notification-message",
    templateUrl: "./notification-message.component.html",
    styleUrl: "./notification-message.component.scss",
})
export class NotificationMessageComponent {
    @Input() showText: boolean = false;
    @Input() text!: string;
    @Input() color!: string;
}
