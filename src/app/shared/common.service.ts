import { Injectable } from "@angular/core";
import { RECENT_PROJECTS } from "constant";
import { FEEDBACK_LIST } from "src/constant-files/feedback-constant";
import { SERVICES } from "src/constant-files/services-constant";
import { WHY_CHOOSE_US } from "src/constant-files/whychoose-costant";

@Injectable({
    providedIn: "root",
})
export class CommonService {
    services = SERVICES;

    whyChooseUsInformation = WHY_CHOOSE_US;

    recentProjects = RECENT_PROJECTS;

    feedbackList = FEEDBACK_LIST;

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

    getFeedbackList() {
        return this.feedbackList;
    }
}
