import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { CommonService } from "src/app/shared/common.service";

@Component({
    selector: "app-project-details",
    templateUrl: "./project-details.component.html",
    styleUrls: ["./project-details.component.scss"],
})
export class ProjectDetailsComponent implements OnInit {
    project;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private commonService: CommonService
    ) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                const codeFromRoute = this.route.snapshot.paramMap.get("code");
                if (codeFromRoute) {
                    this.project = this.commonService.getRecentProjectById(
                        parseInt(codeFromRoute, 10)
                    );
                } else {
                    console.warn("No code found in route parameters.");
                }
            }
        });
    }

    ngOnInit() {}
}
