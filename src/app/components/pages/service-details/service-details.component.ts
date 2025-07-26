import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { CommonService } from "src/app/shared/common.service";

@Component({
    selector: "app-service-details",
    templateUrl: "./service-details.component.html",
    styleUrls: ["./service-details.component.scss"],
})
export class ServiceDetailsComponent implements OnInit {
    service;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private commonService: CommonService
    ) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                const codeFromRoute = this.route.snapshot.paramMap.get("code");
                if (codeFromRoute) {
                    this.service = this.commonService.getServiceById(
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
