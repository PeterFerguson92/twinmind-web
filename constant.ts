export const WHY_CHOOSE_US = {
    subtitle: "Why choose us",
    title: "What Makes Us the Right Technology Partner",
    description:
        "We deliver more than just code. Our solutions are tailored to your goals, backed by real experience and crafted with innovation and care. Here’s why we stand out.",
    reasons: [
        {
            title: "Industry Expertise",
            image: "assets/img/why-choose-us/why-choose-us4.jpg",
            description:
                "With years of domain experience, our team understands the nuances of your industry to deliver practical and scalable solutions.",
            link: "#",
        },
        {
            title: "Expertise & Leadership",
            image: "assets/img/why-choose-us/why-choose-us5.jpg",
            description:
                "Led by seasoned professionals, we bring technical leadership, vision, and reliability to every project we undertake.",
            link: "#",
        },
        {
            title: "Dedicated IT Solution",
            image: "assets/img/why-choose-us/why-choose-us6.jpg",
            description:
                "We offer tailored, end-to-end IT services that adapt to your needs, ensuring consistent value from strategy to support.",
            link: "#",
        },
    ],
};

export const SERVICES = [
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
                question: "What technologies do you use for web development?",
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
                question: "Can you integrate analytics into my app or website?",
                answer: "Yes, via dashboards or tools like Google Analytics and Mixpanel.",
            },
        ],
    },
    {
        id: 4,
        title: "Governance & Compliance",
        subtitle: "Streamline legal operations and ensure accountability",
        icon: "flaticon-launch", // Ensure the icon class exists or replace accordingly
        short: "Empower your business with tech solutions that simplify compliance and governance.",
        long: "Our Governance & Compliance services deliver tailored solutions to help businesses meet regulatory obligations and implement robust internal policies. From contract lifecycle management to compliance tracking and audit readiness, we provide tools that align with GDPR, HIPAA, SOX, and other global standards. Our platforms improve legal clarity, reduce risk, and foster organizational accountability.",
        faqDescription: {
            short: "Navigate compliance with ease.",
            long: "This FAQ answers your key questions around how our digital governance tools help with policy enforcement, regulatory reporting, contract automation, and compliance monitoring. Whether you’re a startup or an enterprise, we help you build trust through compliance.",
        },
        faqs: [
            {
                question: "Can you automate governance workflows?",
                answer: "Yes, we design tools that manage policy approvals, task assignments, and compliance tracking with full transparency.",
            },
            {
                question: "Do you help with data privacy regulations?",
                answer: "We support full compliance with regulations like GDPR, HIPAA, and other jurisdictional standards.",
            },
            {
                question: "What types of audits can your system support?",
                answer: "Our solutions help you prepare for internal, external, and third-party audits by offering traceable logs and documentation workflows.",
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
                question: "Will the app support notifications and analytics?",
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

export const RECENT_PROJECTS = [
    {
        id: 1,
        name: "GoldPark Events",
        businessType: "Event Management",
        screenshots: [
            "assets/img/project-img/goldpark/goldpark1.png",
            "assets/img/project-img/goldpark/goldpark2.png",
            "assets/img/project-img/goldpark/goldpark3.png",
        ],
        link: "https://goldparkevents.co.uk/",
        client: "GoldPark Events.",
        featured: true,
        shortDescription:
            "Gold Park Events specializes in delivering exceptional marquee and event hire services for weddings, corporate events, and private celebrations across the UK.",
        description:
            "Gold Park Events is a premier event solutions provider, offering a wide range of marquee and event hire services tailored for weddings, corporate functions, festivals, and private occasions. With a strong emphasis on elegance and professionalism, their team transforms ordinary spaces into stunning venues using high-quality marquees, luxury interiors, bespoke lighting, and essential accessories. From initial planning to final setup, Gold Park Events ensures a seamless experience that reflects each client's unique style and vision. Whether you're hosting an intimate garden celebration or a large-scale business event, they bring creativity, expertise, and reliability to every detail",
    },
    {
        id: 2,
        name: "Daniel K. Ansah",
        businessType: "Religion & Spirituality",
        screenshots: [
            "assets/img/project-img/dansah/daniel1.png",
            "assets/img/project-img/dansah/daniel2.png",
            "assets/img/project-img/dansah/daniel3.png",
        ],
        link: "https://danielkansah.org/home",
        client: "Daniel K. Ansah",
        featured: true,
        shortDescription:
            "A personal brand website for Pastor Daniel Kansah, built to showcase his sermons, ministry vision, leadership work, and mentorship outreach in a clean, responsive format.",
        description:
            "The platform serves as a digital hub for his ministry—featuring sermons, speaking engagements, leadership development resources, and a blog for inspirational teachings. The site highlights Daniel's personal story and his mission to help individuals grow in faith and purpose. Built with user experience in mind, it includes easy navigation, mobile optimization, and an intuitive CMS for content updates. This project demonstrates full-stack implementation for a personal brand rooted in impact and outreach.. Driven by this goal, we created our own solar wall light lamp that offers a practical and efficient solution for nighttime safety. Designed with convenience and reliability in mind, our solar lights automatically charge during the day and illuminate pathways, doorways, and gardens at night without requiring any wiring or electricity. Whether you're looking to deter unwanted visitors or simply want better visibility around your home, TwoVisible's lighting solution provides peace of mind with minimal effort. It's an easy-to-install, energy-saving addition to any home that puts safety first.",
    },
    {
        id: 3,
        name: "2 Visible",
        businessType: "Home Security & Outdoor Lighting",
        screenshots: [
            "assets/img/project-img/twovisible/twovisible1.png",
            "assets/img/project-img/twovisible/twovisible2.png",
            "assets/img/project-img/twovisible/twovisible3.png",
        ],
        link: "https://two-visible-qa.firebaseapp.com/home",
        client: "2Visible",
        featured: true,
        shortDescription:
            "TwoVisible is dedicated to helping people feel safer at home, especially at night. We developed a hassle-free solar wall light lamp that enhances security and visibility outdoors without the need for wiring or electricity.",
        description:
            "At TwoVisible, our mission is simple—help people feel secure in their own homes, especially after dark. Driven by this goal, we created our own solar wall light lamp that offers a practical and efficient solution for nighttime safety. Designed with convenience and reliability in mind, our solar lights automatically charge during the day and illuminate pathways, doorways, and gardens at night without requiring any wiring or electricity. Whether you're looking to deter unwanted visitors or simply want better visibility around your home, TwoVisible's lighting solution provides peace of mind with minimal effort. It's an easy-to-install, energy-saving addition to any home that puts safety first.",
    },
    {
        id: 4,
        name: "Seko City Logistics",
        businessType: "Logistics & Shipping",
        screenshots: [
            "assets/img/project-img/seko-web/seko1.png",
            "assets/img/project-img/seko-web/seko2.png",
            "assets/img/project-img/seko-web/seko3.png",
        ],
        link: "https://sekocity.co.uk/home",
        client: "Seko City Logistics",
        featured: false,
        shortDescription:
            "Seko City offers reliable door-to-door shipping services from the UK to Ghana, ensuring safe, timely, and affordable delivery of personal and commercial goods.",
        description:
            "is a trusted logistics company specializing in door-to-door delivery services from the UK to Ghana. Whether you're sending personal packages, household items, or commercial freight, Seko City ensures your goods are collected, shipped, cleared through customs, and delivered directly to your recipient’s doorstep in Ghana. With transparent pricing, professional customer service, and a focus on reliability, they simplify cross-border shipping for individuals, families, and businesses. Seko City’s mission is to make international delivery feel as easy as local transport — secure, efficient, and stress-free",
    },
    {
        id: 5,
        name: "Seko Admin Application",
        businessType: "Logistics & Shipping",
        screenshots: [
            "assets/img/project-img/seko-admin/sekoadmin1.png",
            "assets/img/project-img/seko-admin/sekoadmin2.png",
            "assets/img/project-img/seko-admin/sekoadmin3.png",
        ],
        link: null,
        client: "Seko City Logistics",
        featured: true,
        shortDescription:
            "The Seko Admin Application is a powerful internal platform designed to streamline booking, customer management, and order tracking for Seko City's door-to-door delivery service from the UK to Ghana.",
        description:
            "The Admin Application is a centralized logistics management system purpose-built for Seko City's operations team. It enables staff to efficiently handle customer bookings, track active and past orders, and manage user profiles within the delivery pipeline. With intuitive dashboards and role-based access, the platform ensures secure, real-time visibility across shipping statuses, payment confirmations, and dispatch logs. Designed to support the logistical demands of international shipping—particularly between the UK and Ghana—the admin panel plays a critical role in enhancing operational accuracy, customer service, and business scalability.",
    },
    {
        id: 6,
        name: "Seko Driver Mobile App",
        businessType: "Logistics & Shipping",
        screenshots: [
            "assets/img/project-img/seko-mobile/sekomobile1.png",
            "assets/img/project-img/seko-mobile/sekomobile2.png",
            "assets/img/project-img/seko-mobile/sekomobile3.png",
        ],
        link: null,
        client: "Seko City Logistics",
        featured: false,
        shortDescription:
            "mobile companion for pickup agents, enabling real-time task assignments, customer interaction, and smooth tracking of collections and deliveries.",
        description:
            "The Seko Driver Mobile Application is designed specifically for drivers working with Seko City's logistics network. It streamlines the item pickup process by providing drivers with live access to their assigned tasks, customer contact details, pickup addresses, and delivery routes. The app includes features like live status updates, photo capture for proof of collection, digital signatures, and navigation integration. By connecting seamlessly with the Seko Admin system, the driver app ensures transparency, efficiency, and accountability at every stage of the delivery lifecycle—from the customer's door in the UK to final processing for shipment to Ghana.",
    },
    {
        id: 7,
        name: "Jacob weds Vivian",
        businessType: "Wedding & Event Planning",
        screenshots: [
            "assets/img/project-img/jacvivian/jacviv1.png",
            "assets/img/project-img/jacvivian/jacviv2.png",
            "assets/img/project-img/jacvivian/jacviv3.png",
        ],
        link: "https://jacobwedsvivian.com/",
        client: "Jacob & Vivian",
        featured: false,
        shortDescription:
            "A beautifully designed wedding website for Jacob and Vivian, providing guests with event details, RSVP functionality, and a glimpse into their love story.",
        description:
            "This project is a custom wedding website built for Jacob and Vivian to celebrate and share their special day with loved ones. The site includes a romantic and elegant design, featuring the couple’s story, event schedule, location details, RSVP form, gallery, and guest information. Mobile-responsive and user-friendly, the site ensures guests have everything they need at their fingertips. It also includes subtle animations and soft colors to match the wedding theme, making it a memorable digital companion to their real-life celebration. Built with modern front-end technologies, this project highlights design sensitivity and attention to detail for personal milestone events.",
    },
    {
        id: 8,
        name: "Potter's community Network",
        businessType: "Religion & Spirituality",
        screenshots: [
            "assets/img/project-img/pcn/pcn1.png",
            "assets/img/project-img/pcn/pcn2.png",
            "assets/img/project-img/pcn/pcn3.png",
        ],
        link: "https://potterscommunitynetwork.com/",
        client: "Potter's community Network (PCN)",
        featured: false,
        shortDescription:
            "A modern, responsive website built for PCN, a growing Christian ministry with a digital-first approach and physical presence in Bradford and Milton Keynes.",
        description:
            "The site was crafted with user engagement in mind, highlighting upcoming events, media content, and ministry resources. It also reflects the organization's dual nature: a strong online presence complemented by a local branch in Bradford and a prayer club in Milton Keynes.",
    },
    // {
    //     id: 9,
    //     name: "Finally Fergusons",
    //     businessType: "Wedding & Event Planning",
    //     screenshots: [
    //         "assets/img/project-img/fergie/fergie1.png",
    //         "assets/img/project-img/fergie/fergie2.png",
    //         "assets/img/project-img/fergie/fergie3.png",
    //     ],
    //     link: "https://finallyfergusons.com/",
    //     client: "Peter & Millie",
    //     featured: false,
    //     shortDescription:
    //         "A beautifully designed wedding website crafted for the Ferguson couple to celebrate their journey, share event details, and gather RSVPs — combining elegance, personalization, and modern web functionality",
    //     description:
    //         "FinallyFergusons.com is a fully responsive, elegant wedding website built to commemorate the marriage of the Ferguson couple. This project was designed as a one-stop digital destination for guests to learn about the couple’s story, stay informed about the wedding schedule, and conveniently RSVP.",
    // },
];
