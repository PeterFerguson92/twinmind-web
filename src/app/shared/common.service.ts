import { Injectable } from "@angular/core";
import { RECENT_PROJECTS, SERVICES, WHY_CHOOSE_US } from "constant";

@Injectable({
    providedIn: "root",
})
export class CommonService {
    services = SERVICES

    whyChooseUsInformation = WHY_CHOOSE_US;

    recentProjects = RECENT_PROJECTS;

    constructor() {}

    getAllServices() {
        return this.services;
    }

    // ✅ Get a service by ID
    getServiceById(id: number) {
        return this.services.find((service) => service.id === id);
    }

    getWhyChooseUsInformation() {
        return this.whyChooseUsInformation;
    }

    getRecentProjects() {
        return this.recentProjects;
    }

    getRecentProjectById(id: number) {
        return this.recentProjects.find((project) => project.id === id);
    }
}
