import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-faq",
    templateUrl: "./faq.component.html",
    styleUrls: ["./faq.component.scss"],
})
export class FaqComponent implements OnInit {
    faqs = [
        {
            question: "What services do you offer?",
            answer: "We specialize in designing and developing custom websites and mobile applications for iOS and Android. From idea validation to deployment and maintenance, we handle the full product lifecycle.",
        },
        {
            question: "What industries do you work with?",
            answer: "We've worked across sectors like e-commerce, healthcare, education, logistics, and SaaS. If it’s digital, we can build it.",
        },
        {
            question: "What technologies do you use?",
            answer: "We use modern stacks like React, Next.js, Node.js, Flutter, and Swift. For backend, we work with AWS, Firebase, and other scalable cloud platforms.",
        },
        {
            question: "Can you build cross-platform apps?",
            answer: "Absolutely. We use frameworks like Flutter and React Native to build apps that work seamlessly on both iOS and Android.",
        },
        {
            question: "How does your development process work?",
            answer: "We start with discovery and strategy, move to UI/UX design, then development, testing, and deployment. We also offer post-launch support and updates.",
        },
        {
            question: "How long does a typical project take?",
            answer: "Websites usually take 4–8 weeks, while mobile apps can take 8–16+ weeks depending on complexity.",
        },
        {
            question: "Will I be involved throughout the process?",
            answer: "Yes! We believe in collaboration and provide regular updates, demos, and communication via Slack or email.",
        },
        {
            question: "Do I own the source code after the project is complete?",
            answer: "Yes. You’ll have full ownership of the final product, including source code and intellectual property.",
        },
        {
            question: "Do you offer ongoing maintenance and support?",
            answer: "Yes. We offer monthly support plans that cover updates, bug fixes, performance monitoring, and feature additions.",
        },
    ];

    constructor() {}

    ngOnInit() {}
}
