import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-home-two",
    templateUrl: "./home-two.component.html",
    styleUrls: ["./home-two.component.scss"],
})
export class HomeTwoComponent implements OnInit {
    services = [
        {
            id: 1,
            title: "Web Development",
            icon: "flaticon-programming-code",
            short: "Custom, responsive websites tailored to your brand.",
            long: "We develop scalable websites using modern technologies, optimized for performance, usability, and SEO—whether it’s a landing page, CMS, or custom web app.",
            faqs: [
                {
                    question:
                        "What technologies do you use for web development?",
                    answer: "We use modern stacks like Angular, React, Vue, Node.js, and Laravel, tailored to your project’s needs.",
                },
                {
                    question: "Do you build custom or template-based websites?",
                    answer: "We build fully custom websites, but can also work with themes if needed for time or budget.",
                },
                {
                    question: "Will my website be mobile-friendly?",
                    answer: "Yes, all our websites are fully responsive and optimized for all devices and screen sizes.",
                },
            ],
        },
        {
            id: 2,
            title: "Product Engineering",
            icon: "flaticon-plugin",
            short: "Build and scale digital products from idea to launch.",
            long: "We help you design, build, and refine software products with end-to-end engineering—from MVPs to large-scale platforms.",
            faqs: [
                {
                    question: "What does product engineering include?",
                    answer: "It covers everything from product strategy and UI/UX design to full-stack development and deployment.",
                },
                {
                    question: "Can you help with MVP development?",
                    answer: "Absolutely. We specialize in MVPs to help startups validate their ideas quickly and affordably.",
                },
                {
                    question: "Do you support scaling after launch?",
                    answer: "Yes, we offer post-launch support and help scale your product as user demand grows.",
                },
            ],
        },
        {
            id: 3,
            title: "Data Analytics",
            icon: "flaticon-analysis",
            short: "Make smarter decisions with actionable data insights.",
            long: "We collect, analyze, and visualize your data to uncover trends, improve processes, and support informed business strategies.",
            faqs: [
                {
                    question: "What kind of data can you analyze?",
                    answer: "We work with customer data, sales data, user behavior, app metrics, and more.",
                },
                {
                    question: "Do you provide dashboards?",
                    answer: "Yes, we create custom dashboards using tools like Power BI, Tableau, or web-based solutions.",
                },
                {
                    question: "Is my data secure with you?",
                    answer: "Absolutely. We implement best practices in data privacy, encryption, and secure access control.",
                },
            ],
        },
        {
            id: 4,
            title: "Cyber Security",
            icon: "flaticon-cyber-security",
            short: "Secure your digital assets against threats and breaches.",
            long: "From vulnerability assessments to threat mitigation, we provide robust cybersecurity strategies to protect your users and infrastructure.",
            faqs: [
                {
                    question: "Do you offer penetration testing?",
                    answer: "Yes, we provide both automated and manual penetration testing for web and mobile apps.",
                },
                {
                    question: "Can you secure existing apps?",
                    answer: "Definitely. We can audit and strengthen your app’s current security setup.",
                },
                {
                    question: "What standards do you follow?",
                    answer: "We follow OWASP guidelines, GDPR compliance, and industry best practices.",
                },
            ],
        },
        {
            id: 5,
            title: "Desktop Applications",
            icon: "flaticon-code",
            short: "High-performance apps for desktop platforms.",
            long: "We develop reliable, user-friendly desktop software for Windows, macOS, and Linux, tailored to your workflow and system requirements.",
            faqs: [
                {
                    question: "What platforms do you support?",
                    answer: "We build for Windows, macOS, and Linux using frameworks like Electron and .NET.",
                },
                {
                    question: "Can desktop apps work offline?",
                    answer: "Yes, most desktop applications we build work offline and sync data when online.",
                },
                {
                    question: "Do you provide installation packages?",
                    answer: "Yes, we provide installers, auto-updaters, and full deployment support.",
                },
            ],
        },
        {
            id: 6,
            title: "Mobile Applications",
            icon: "flaticon-application",
            short: "Native and cross-platform mobile app development.",
            long: "We design and develop apps for iOS and Android using Flutter, React Native, or native SDKs, with focus on usability and scalability.",
            faqs: [
                {
                    question: "Do you build native or cross-platform apps?",
                    answer: "Both. We use Swift/Kotlin for native and Flutter/React Native for cross-platform.",
                },
                {
                    question:
                        "Can you publish apps to the App Store and Google Play?",
                    answer: "Yes, we handle the entire submission and publishing process.",
                },
                {
                    question:
                        "Do you provide push notifications and analytics?",
                    answer: "Absolutely. We integrate tools for notifications, tracking, and user engagement.",
                },
            ],
        },
        {
            id: 7,
            title: "IT Consulting",
            icon: "flaticon-computer-graphic",
            short: "Expert guidance to align your tech with business goals.",
            long: "We advise startups and enterprises on technology strategy, system architecture, and process optimization to maximize ROI.",
            faqs: [
                {
                    question: "What kind of IT consulting do you offer?",
                    answer: "We provide tech audits, architecture planning, cloud strategy, and roadmap planning.",
                },
                {
                    question: "Can you work with our internal dev team?",
                    answer: "Yes, we collaborate with in-house teams to guide or complement development.",
                },
                {
                    question: "How do you charge for consulting?",
                    answer: "We offer hourly, project-based, or retainer models depending on your needs.",
                },
            ],
        },
        {
            id: 8,
            title: "UI/UX Design",
            icon: "flaticon-writing", // You can update to another icon if you prefer
            short: "Intuitive and engaging digital product design.",
            long: "We craft user experiences that are not only visually appealing but also functional and intuitive. Our UI/UX design process is rooted in research, usability, and customer behavior, helping you deliver products people love to use.",
            faqs: [
                {
                    question: "What tools do you use for UI/UX design?",
                    answer: "We use Figma, Adobe XD, Sketch, and other industry-standard tools to design and prototype interfaces.",
                },
                {
                    question: "Do you provide wireframes and prototypes?",
                    answer: "Yes, we provide detailed wireframes, high-fidelity prototypes, and interaction flows for clarity and validation.",
                },
                {
                    question: "Can you redesign my existing product?",
                    answer: "Absolutely. We specialize in UX audits and redesigns to improve user engagement and satisfaction.",
                },
            ],
        },
    ];
    constructor() {}

    ngOnInit(): void {}
}
