import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/shared/common.service";

@Component({
    selector: "app-home-two",
    templateUrl: "./home-two.component.html",
    styleUrls: ["./home-two.component.scss"],
})
export class HomeTwoComponent implements OnInit {
    services: any[] = [];
    whyChooseUsInformation: any;
    recentProjects: any[] = [];

    constructor(private commonService: CommonService) {}

    ngOnInit(): void {
        this.recentProjects = this.commonService.getRecentProjects();
    }
}
