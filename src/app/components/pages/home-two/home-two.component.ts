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
    feedbackList: any[] = [];

    customOptions = {
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    };

    constructor(private commonService: CommonService) {}

    ngOnInit(): void {
        this.recentProjects = this.commonService.getRecentProjects();
        this.feedbackList = this.commonService.getFeedbackList();
    }
}
