import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/shared/common.service";

@Component({
    selector: "app-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
    services: any[] = [];
    whyChooseUsInformation: any;

    constructor(private commonService: CommonService) {}

    ngOnInit(): void {
        this.services = this.commonService.getAllServices();
        this.whyChooseUsInformation =
            this.commonService.getWhyChooseUsInformation();
    }
}
