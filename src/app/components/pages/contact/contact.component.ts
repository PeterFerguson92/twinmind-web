import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { EmailService } from "src/app/shared/email.service";

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
    infoText: string | null = "";
    errorText!: string | null;
    showInfoText!: boolean;
    showErrorText: boolean = false;
    showSpinner = false;
    contactForm = this.formBuilder.group({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "",
    });
    constructor(
        private formBuilder: FormBuilder,
        private emailService: EmailService
    ) {}

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ["", Validators.required],
            phone: ["", [Validators.required]],
            email: ["", Validators.email],
            message: ["", [Validators.required]],
            subject: ["", [Validators.required]],
        });
    }

    onSubmit() {
        const requestDetails: { [key: string]: any } = {};
        Object.keys(this.contactForm.controls).forEach((key) => {
            const formControl =
                this.contactForm.controls[
                    key as keyof typeof this.contactForm.controls
                ];
            requestDetails[key] = formControl.value;
        });
        console.log(requestDetails);
        this.sendEmail(requestDetails);
    }

    sendEmail(message: {}): void {
        this.showSpinner = true;
        this.emailService.SendEmail(message).subscribe(
            (data) => {
                this.showSpinner = false;
                this.infoText = "Request Sent Succesfully";
                this.showInfoText = true;
                this.clearNotification();
                this.clearFields();
            },
            (error) => {
                console.log(error);
                this.showSpinner = false;
                this.showErrorText = true;
                this.errorText = "Something went wrong, Please contact support";
                this.clearNotification();
                this.clearFields();
            }
        );
    }

    clearNotification() {
        setTimeout(() => {
            this.showInfoText = false;
            this.showErrorText = false;
            this.errorText = null;
            this.infoText = null;
        }, 3000);
    }

    clearFields() {
        (
            Object.keys(this.contactForm.controls) as Array<
                keyof typeof this.contactForm.controls
            >
        ).forEach((key) => {
            this.contactForm.controls[key].reset();
        });
    }

    getFormControl(fControlName: string) {
        return this.contactForm.get(fControlName);
    }

    isSubmitDisabled() {
        return !this.contactForm.valid;
    }
}
