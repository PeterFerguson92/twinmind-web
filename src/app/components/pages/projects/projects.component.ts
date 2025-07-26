import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { CommonService } from "src/app/shared/common.service";

@Component({
    selector: "app-projects",
    templateUrl: "./projects.component.html",
    styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
    projects;

    constructor(private commonService: CommonService) {
        this.projects = this.commonService.getRecentProjects();
    }
    ngOnInit() {}
}
