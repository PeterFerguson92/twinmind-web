import { Component, OnInit } from "@angular/core";
import { CommonService } from "src/app/shared/common.service";

@Component({
    selector: "app-services",
    templateUrl: "./services.component.html",
    styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
    constructor(private commonService: CommonService) {}
    services = [];
    
    ngOnInit() {
        this.services = this.commonService.getAllServices();
    }
}
