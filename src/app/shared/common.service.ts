import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class CommonService {
    services = [
        {
            id: 1,
            title: "Web Development",
            subtitle: "Modern, scalable web solutions",
            icon: "flaticon-programming-code",
            short: "Custom, responsive websites tailored to your brand.",
            long: "We build high-performance, visually engaging, and mobile-responsive websites using the latest web technologies. Whether you need a marketing site, content management system, or custom web application, our team ensures fast loading times, clean code, and SEO-friendly structure. We also integrate third-party APIs, analytics, and provide ongoing support.",
            faqDescription: {
                short: "Everything you need to know about how we build responsive, SEO-optimized websites.",
                long: "Have questions about how we design and develop custom websites? Our FAQ covers common concerns about technologies used, mobile responsiveness, SEO best practices, timelines, and ongoing support. Whether you're starting from scratch or redesigning an existing site, we've got the answers.",
            },
            faqs: [
                {
                    question:
                        "What technologies do you use for web development?",
                    answer: "We use Angular, React, Vue.js, Node.js, Laravel, and .NET depending on project needs.",
                },
                {
                    question: "Do you build custom or template-based websites?",
                    answer: "We build both fully custom and theme-based websites depending on budget and timeline.",
                },
                {
                    question:
                        "Will my website be mobile-friendly and SEO-optimized?",
                    answer: "Yes, all our websites are responsive and follow SEO best practices.",
                },
            ],
        },
        {
            id: 2,
            title: "Product Engineering",
            subtitle: "From MVP to full product",
            icon: "flaticon-plugin",
            short: "Build and scale digital products from idea to launch.",
            long: "From conceptualization to deployment, we provide end-to-end product engineering services. We collaborate with your team to understand user needs and business objectives, craft scalable architectures, develop with modern frameworks, and iterate based on feedback. Whether launching an MVP or a full enterprise-grade platform, we help turn ideas into sustainable, evolving products.",
            faqDescription: {
                short: "FAQs about building and scaling your digital product.",
                long: "Product engineering involves much more than code. In this section, we answer your questions about taking an idea to MVP, scaling a product, planning technical architecture, and managing iterations. Learn how we guide startups and enterprises through every stage of product development.",
            },
            faqs: [
                {
                    question: "What’s included in product engineering?",
                    answer: "Ideation, UI/UX, architecture, development, QA, deployment, and scaling.",
                },
                {
                    question: "Can you build MVPs for startups?",
                    answer: "Yes, we specialize in launching MVPs for early validation and growth.",
                },
                {
                    question: "What industries do you serve?",
                    answer: "We serve fintech, healthcare, logistics, e-commerce, education, and more.",
                },
            ],
        },
        {
            id: 3,
            title: "Data Analytics",
            subtitle: "Data-driven decision making",
            icon: "flaticon-analysis",
            short: "Make smarter decisions with actionable data insights.",
            long: "Our data analytics services help businesses make sense of large datasets. We use advanced tools to extract insights, create real-time dashboards, and forecast trends using statistical and machine learning techniques. Our solutions empower data-backed decisions, improve customer experiences, and uncover new business opportunities.",
            faqDescription: {
                short: "Understand how we turn your data into actionable insights.",
                long: "Data can drive business decisions—if used correctly. Our FAQ addresses the tools we use, types of analytics we provide, and how we integrate dashboards and data pipelines into your systems. Find out how we help you make sense of your data with real-world impact.",
            },

            faqs: [
                {
                    question: "What types of data analytics do you offer?",
                    answer: "Descriptive, diagnostic, predictive, and prescriptive analytics.",
                },
                {
                    question: "What tools do you use?",
                    answer: "Power BI, Tableau, Google Data Studio, Python, and SQL.",
                },
                {
                    question:
                        "Can you integrate analytics into my app or website?",
                    answer: "Yes, via dashboards or tools like Google Analytics and Mixpanel.",
                },
            ],
        },
        {
            id: 4,
            title: "Cyber Security",
            subtitle: "Protect your business from threats",
            icon: "flaticon-cyber-security",
            short: "Secure your digital assets against threats and breaches.",
            long: "We provide comprehensive cybersecurity services to protect your applications, data, and infrastructure. Our offerings include penetration testing, secure coding practices, threat modeling, endpoint protection, cloud security, and compliance consulting. We help mitigate risk, prevent breaches, and build trust with your users and stakeholders.",
            faqDescription: {
                short: "Your security questions, answered.",
                long: "Security is serious business. This FAQ covers topics like how we conduct security audits, protect against breaches, maintain compliance, and secure cloud environments. If you’re concerned about data integrity or regulatory standards, you’ll find the answers here.",
            },
            faqs: [
                {
                    question: "Do you offer penetration testing?",
                    answer: "Yes, including manual and automated vulnerability assessments.",
                },
                {
                    question: "Can you help with data protection compliance?",
                    answer: "We support GDPR, HIPAA, and other standards.",
                },
                {
                    question: "How do you secure cloud applications?",
                    answer: "Using best practices including encryption, RBAC, MFA, and monitoring.",
                },
            ],
        },
        {
            id: 5,
            title: "Desktop Applications",
            subtitle: "Robust software for desktop platforms",
            icon: "flaticon-code",
            short: "High-performance apps for desktop platforms.",
            long: "Our team develops desktop applications tailored to enterprise and end-user needs. We use technologies like Electron, .NET, and native frameworks to create fast, stable, and secure applications. From internal business tools to commercial products, we ensure a rich user experience and seamless system integration.",
            faqDescription: {
                short: "All about our desktop app development process.",
                long: "Looking to develop or modernize a desktop application? This FAQ explains our tech stack, platform compatibility, offline capabilities, and deployment processes. We also address update management and long-term support strategies.",
            },
            faqs: [
                {
                    question: "Which platforms do you build desktop apps for?",
                    answer: "Windows, macOS, and Linux using Electron, .NET, or native SDKs.",
                },
                {
                    question: "Can desktop apps work offline?",
                    answer: "Yes, with local data storage and synchronization.",
                },
                {
                    question: "Do you support software updates?",
                    answer: "We offer integrated auto-updates and patch delivery.",
                },
            ],
        },
        {
            id: 6,
            title: "Mobile Applications",
            subtitle: "iOS & Android apps made easy",
            icon: "flaticon-application",
            short: "Native and cross-platform mobile app development.",
            long: "We develop elegant, responsive mobile apps that deliver high performance and user engagement. From idea validation to app store deployment, we build cross-platform and native solutions tailored to your business model. Features like real-time chat, geolocation, payment gateways, and push notifications come standard in our mobile projects.",
            faqDescription: {
                short: "Get clarity on how we build mobile apps for Android & iOS.",
                long: "From native to cross-platform apps, our mobile app FAQ answers your questions on features, store submissions, push notifications, analytics integration, and performance. Learn what makes a mobile app successful—and how we get you there.",
            },
            faqs: [
                {
                    question: "Do you build for both iOS and Android?",
                    answer: "Yes, using native and cross-platform approaches.",
                },
                {
                    question: "Can you publish the app to stores?",
                    answer: "Yes, we handle full deployment to App Store and Google Play.",
                },
                {
                    question:
                        "Will the app support notifications and analytics?",
                    answer: "Yes, we integrate Firebase, OneSignal, and analytics tools.",
                },
            ],
        },
        {
            id: 7,
            title: "IT Consulting",
            subtitle: "Strategic advice & technical guidance",
            icon: "flaticon-computer-graphic",
            short: "Expert guidance to align your tech with business goals.",
            long: "Our IT consulting team helps you navigate complex tech decisions. Whether modernizing legacy systems, choosing the right cloud strategy, or implementing DevOps, we provide insight-driven recommendations and hands-on support. We ensure that technology serves your long-term business vision efficiently and cost-effectively.",
            faqDescription: {
                short: "Your guide to our consulting services.",
                long: "This FAQ helps you understand what to expect from our consulting engagements. We explain how we approach strategy, technology evaluations, cloud migration, and cost optimization. Whether you're a startup or an enterprise, this is where your questions meet clear answers.",
            },
            faqs: [
                {
                    question: "What services do you provide?",
                    answer: "Cloud, DevOps, architecture, vendor review, and tech planning.",
                },
                {
                    question: "Do you consult startups and enterprises?",
                    answer: "Yes, we tailor services to the scale and needs of each client.",
                },
                {
                    question: "How do you structure engagements?",
                    answer: "Flexible: hourly, project-based, or retainer models.",
                },
            ],
        },
        {
            id: 8,
            title: "UI/UX Design",
            subtitle: "Designs your users will love",
            icon: "flaticon-web",
            short: "Intuitive and engaging digital product design.",
            long: "We specialize in crafting elegant user interfaces and seamless experiences through structured design processes. Our designers conduct user research, build personas, create wireframes and prototypes, and validate every interaction. The result: designs that resonate with users, drive engagement, and reduce churn.",
            faqs: [
                {
                    question: "What is included in your design process?",
                    answer: "Research, wireframes, mockups, prototypes, and usability testing.",
                },
                {
                    question: "Which tools do you use?",
                    answer: "Figma, Adobe XD, Sketch, and Zeplin.",
                },
                {
                    question: "Can you redesign my existing app?",
                    answer: "Yes, including UX audits and complete UI makeovers.",
                },
            ],
        },
    ];

    constructor() {}

    getAllServices() {
        return this.services;
    }

    // ✅ Get a service by ID
    getServiceById(id: number) {
        return this.services.find((service) => service.id === id);
    }
}
