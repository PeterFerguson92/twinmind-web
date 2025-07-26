import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/shared/common.service";

@Component({
    selector: "app-home-two",
    templateUrl: "./home-two.component.html",
    styleUrls: ["./home-two.component.scss"],
})
export class HomeTwoComponent implements OnInit {
    services: any[] = [];
    constructor(private commonService: CommonService) {}

    ngOnInit(): void {
        this.services = this.commonService.getAllServices();
    }
}
