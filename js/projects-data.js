/**
 * Project catalog. Each entry renders a card in the Projects grid and a
 * detail dialog with an image carousel. Adding a project is a data edit:
 * insert an object here - no markup changes needed.
 *
 * Order matters: entries are authored most-recent-first (newest at the top).
 * The collapsed grid shows the first few; "Show all" reveals the full list in
 * this same order. Put new projects at the top.
 *
 * sector: one axis only (what a client filters by).
 * body: full description paragraphs (HTML allowed), shown in the dialog.
 */
const PROJECTS = [
  {
    id: "fronteira-labs",
    title: "Fronteira Labs",
    period: "June 2026 - Present",
    company: { name: "Fronteira Labs", url: "https://fronteiralabs.com.br/" },
    link: "https://fronteiralabs.com.br/",
    sector: "AI Innovation",
    tags: ["C#", ".NET 10", "AI Agents", "CMS", "SSO"],
    thumb: { src: "assets/img/projects/fronteira-labs/index.png", alt: "Fronteira Labs homepage" },
    summary:
      "My own consulting and content company: a bilingual blog and consulting site, a custom CMS, and an SSO, all built on C# and .NET 10. I build and maintain it with my own AI agent harness.",
    images: [
      { src: "assets/img/projects/fronteira-labs/index.png", alt: "Blog and consulting homepage", caption: "Public homepage: article search, category filters, and a bilingual content feed." },
      { src: "assets/img/projects/fronteira-labs/cms-index.png", alt: "Custom CMS", caption: "Custom CMS dashboard: article and media stats, recent articles, and quick actions." },
    ],
    body: [
      "<p><a href=\"https://fronteiralabs.com.br/\" target=\"_blank\" rel=\"noopener\">Fronteira Labs</a> is my consulting and content company, online since June 2026, working \"on the frontier of innovation and business\". It shares quality content about artificial intelligence, technology, and business, and offers AI consulting, training, and custom solutions for the Brazilian and United States markets.</p>",
      "<p>The platform is composed of three applications, all built on <strong>C# and .NET 10</strong>: the main blog and consulting website (bilingual, in English and Portuguese), a custom <strong>CMS</strong> for authoring and managing content, and a dedicated <strong>SSO</strong> for authentication. I build and maintain the whole stack using my own AI agent harness, and use AI processes to research topics and assist with writing.</p>",
      "<p><strong>Important:</strong> I do not publish AI-generated content. AI is only a helper in the research and drafting process. Every article is carefully reviewed, edited, and validated by me before it goes live, so the final content reflects my own judgment, voice, and standards.</p>",
    ],
  },
  // ---------------------------------------------------------------------------
  // BusyKeys (April 2025 - Present). Selected work from the AI-native product suite.
  // ---------------------------------------------------------------------------
  {
    id: "zonifymo",
    title: "ZonifyMo",
    period: "2025 - Present",
    company: { name: "BusyKeys", url: "https://busykeys.com/" },
    link: null,
    sector: "Real Estate",
    tags: [".NET / C#", "Generative AI", "Geospatial", "CLI"],
    thumb: { src: "assets/img/projects/zonifymo/dashboard.png", alt: "ZonifyMo dashboard" },
    summary:
      "AI-assisted real estate workflow platform that takes a property from raw lead to underwritten deal: leads, zoning, comparable sales and rents, risk screening, AI enrichment, and Excel proforma exports.",
    images: [
      { src: "assets/img/projects/zonifymo/dashboard.png", alt: "Dashboard", caption: "Dashboard with total, active, and draft deal counters and the signed-in user's profile." },
      { src: "assets/img/projects/zonifymo/add-lead.png", alt: "Add lead", caption: "Add Lead panel: property location, deal availability, broker details, and notes with risk flags." },
      { src: "assets/img/projects/zonifymo/ai-enrichment-feature-redacted.png", alt: "AI lead enrichment", caption: "AI Enrichment proposing field corrections with sources and confidence levels (sensitive data redacted)." },
    ],
    body: [
      "<p>ZonifyMo is a real estate workflow application that helps investors and operators move a property from raw lead to underwritten deal. Users manage leads, properties, deals, and reports, with screening and risk flags, promotion of promising leads to subject properties, zoning and map lookups, and comparable sales and rents to support valuation.</p>",
      "<p>AI runs through the workflow: incoming leads are parsed and enriched automatically, and prompt management lets the team tune that behavior. The platform also exposes API keys, CLI workflows, notes and attachments, and geospatial utilities, and can export an Excel proforma. As a founding engineer at <strong>BusyKeys</strong>, I contribute to the architecture and implementation across the API, AI enrichment, and delivery.</p>",
    ],
  },
  {
    id: "corejail",
    title: "CoreJail",
    period: "2025 - Present",
    company: { name: "BusyKeys", url: "https://busykeys.com/" },
    link: null,
    sector: "Public Security",
    tags: [".NET / C#", "Reporting", "PDF / Excel", "Integrations"],
    thumb: { src: "assets/img/projects/corejail/main-view.png", alt: "CoreJail main view" },
    summary:
      "Jail-management system for county jails: inmate tracking, bookings, housing, classifications, court and sentence records, reporting, and a public inmate lookup, with partner-system integrations.",
    images: [
      { src: "assets/img/projects/corejail/main-view.png", alt: "Main view", caption: "Facility dashboard: inmates in custody, temporary releases, and recent bookings." },
      { src: "assets/img/projects/corejail/intake-form.png", alt: "Intake and booking form", caption: "Book Inmate intake wizard, starting by identifying or creating the offender record." },
    ],
    body: [
      "<p>CoreJail is a jail-management system that covers the full custody lifecycle: jail hierarchy and housing, inmate classification, booking and release workflows, and case, offense, court, sentence, and warrant tracking, alongside offender records and administration.</p>",
      "<p>It provides search, reporting, image handling, and PDF and Excel exports, a public inmate-lookup, integrations with external partner systems, and data-migration tooling. Built on <strong>.NET</strong> and <strong>React.js</strong>, it serves jail and sheriff's office staff as well as the public. I work on its architecture and backend as part of the <strong>BusyKeys</strong> engineering team.</p>",
    ],
  },
  {
    id: "boss365-chat",
    title: "Boss365 Chat",
    period: "2025 - Present",
    company: { name: "BusyKeys", url: "https://busykeys.com/" },
    link: null,
    sector: "AI Innovation",
    tags: ["Messaging", "AI Agents", "Real-time", "Desktop"],
    thumb: { src: "assets/img/projects/boss365-chat/main-chat-area.png", alt: "Boss365 Chat main chat area" },
    summary:
      "A standalone, headless messaging platform for human, bot, group, and channel conversations, with AI agent bots, slash commands, presence, and both web and desktop clients.",
    images: [
      { src: "assets/img/projects/boss365-chat/main-chat-area.png", alt: "Main chat area", caption: "Chat workspace with the conversation list, human and bot chats, and a slash-command message." },
      { src: "assets/img/projects/boss365-chat/onboard-bot.png", alt: "Create a bot", caption: "Creating a bot: subject ID, username, display name, and an agent-framework option." },
    ],
    body: [
      "<p>Boss365 Chat is an embeddable messaging platform that other BusyKeys applications and teams can build on. It supports direct messages, bot conversations, groups, and channels, with attachments, replies, forwards, soft-delete, long-poll updates, presence, typing indicators, and mute controls.</p>",
      "<p>Beyond human messaging, it hosts AI agent bots and slash commands so conversations can trigger automated work, and it ships with a web UI and a desktop client. I designed and implemented the full solution, as well as the integration with BusyKeys' internal agent platform.</p>",
    ],
  },
  {
    id: "busykeys-sso",
    title: "BusyKeys SSO",
    period: "2025 - Present",
    company: { name: "BusyKeys", url: "https://busykeys.com/" },
    link: null,
    sector: "AI Innovation",
    tags: ["OpenID Connect", "Identity", ".NET / C#"],
    thumb: { src: "assets/img/projects/busykeys-sso/login.png", alt: "BusyKeys SSO login" },
    summary:
      "The BusyKeys authentication authority: OpenID Connect sign-in, invitation-based registration, profile and password management, and administration of users and OIDC clients.",
    images: [
      { src: "assets/img/projects/busykeys-sso/login.png", alt: "Login", caption: "Sign-in page for the BusyKeys identity provider." },
      { src: "assets/img/projects/busykeys-sso/admin-area.png", alt: "Administration area", caption: "Admin console to manage users, invitations, and OIDC clients." },
    ],
    body: [
      "<p>BusyKeys SSO is the platform's identity provider. It implements OpenID Connect with authorization-code and refresh-token flows, handling login and logout, invitation-based registration, and profile and password pages for end users.</p>",
      "<p>For administrators it offers user administration, invitations, and OIDC client management, plus management APIs, CLI seed commands, and a health endpoint.</p>",
    ],
  },
  {
    id: "email-gateway",
    title: "Email Gateway",
    period: "2025 - Present",
    company: { name: "BusyKeys", url: "https://busykeys.com/" },
    link: null,
    sector: "AI Innovation",
    tags: ["Integrations", "OAuth", "Gmail / O365", "Keycloak"],
    thumb: { src: "assets/img/projects/email-gateway/swagger.png", alt: "Email Gateway API (Swagger)" },
    summary:
      "Centralized gateway for email-provider integration: connect Gmail and Office 365, sync inbound mail, evaluate rules, run retryable actions, and deliver outbound messages behind a provider abstraction.",
    images: [
      { src: "assets/img/projects/email-gateway/swagger.png", alt: "API documentation (Swagger)", caption: "OpenAPI (Swagger) surface: inbound and outbound email endpoints and rule-action executions." },
    ],
    body: [
      "<p>The Email Gateway centralizes how BusyKeys connects to email providers. It links multiple email providers such as Gmail and Office 365 accounts with encrypted OAuth token storage behind a provider abstraction, polls inbound mail, and evaluates rules that trigger actions such as delete or webhook, executed with retries.</p>",
      "<p>It exposes inbound APIs and outbound enqueue-and-delivery, refreshes tokens automatically, and supports API, JWT, and API-key authentication with Keycloak/OIDC login and OAuth pages.</p>",
    ],
  },
  {
    id: "email-send-service",
    title: "Email Send Service",
    period: "2025 - Present",
    company: { name: "BusyKeys", url: "https://busykeys.com/" },
    link: null,
    sector: "AI Innovation",
    tags: ["Microsoft Graph", "Queue", "Email", ".NET / C#"],
    thumb: { src: "assets/img/projects/email-send-service/dashboard.png", alt: "Email Send Service dashboard" },
    summary:
      "Internal service for transactional and campaign email: single sends, broadcasts, scheduled campaigns, templates and merge fields, contacts and lists, suppressions, and delivery through Microsoft Graph.",
    images: [
      { src: "assets/img/projects/email-send-service/dashboard.png", alt: "Dashboard", caption: "Delivery overview: delivery rate, message and queue stats, and messages-per-day and status charts." },
      { src: "assets/img/projects/email-send-service/compose-email.png", alt: "Compose email", caption: "Compose screen: sender and contact pickers, templates, and a rich-text body with merge fields." },
    ],
    body: [
      "<p>The Email Send Service handles all outbound email for BusyKeys, from one-off transactional messages to broadcasts and scheduled campaigns. It manages templates with merge fields, contacts and lists, senders, suppressions, and unsubscribe handling, and records a full message history.</p>",
      "<p>Delivery runs through a processing queue and Microsoft Graph, with bounce and complaint webhooks feeding back into suppressions, and an admin dashboard plus API keys for internal callers.</p>",
    ],
  },
  {
    id: "sms-gateway",
    title: "SMS Gateway",
    period: "2025 - Present",
    company: { name: "BusyKeys", url: "https://busykeys.com/" },
    link: null,
    sector: "AI Innovation",
    tags: ["SMS", "RabbitMQ", "Twilio / TextMagic", "EF Core"],
    thumb: { src: "assets/img/projects/sms-gateway/swagger.png", alt: "SMS Gateway API (Swagger)" },
    summary:
      "HTTP API for outbound SMS: create messages and dispatch them through configured providers (TextMagic, Twilio) with queue processing, persisted delivery attempts, and automatic retries.",
    images: [
      { src: "assets/img/projects/sms-gateway/swagger.png", alt: "API documentation (Swagger)", caption: "OpenAPI (Swagger) surface: the text-message send endpoint and its request schema." },
    ],
    body: [
      "<p>The SMS Gateway is a small, focused service that lets BusyKeys applications send SMS through a single API. Callers authenticate with API keys and send against tenant environment and source-number configuration, and the gateway routes delivery through TextMagic, Twilio, and other providers.</p>",
      "<p>Messages flow through a RabbitMQ queue, each delivery attempt is persisted, and failures are rescheduled by a background retry poller. I designed and implemented the full solution.</p>",
    ],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    period: "2018 - Present",
    company: null,
    link: "https://github.com/evgomes/evgomes.github.io",
    sector: "Open Source",
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    thumb: { src: "assets/img/projects/portfolio/index.png", alt: "Personal portfolio homepage" },
    summary:
      "This very website: my personal portfolio, hand-built with plain HTML, CSS, and JavaScript (no framework) and deployed on GitHub Pages. Open source on GitHub.",
    images: [
      { src: "assets/img/projects/portfolio/index.png", alt: "Portfolio homepage", caption: "Hero with an animated particle and constellation background, quick facts, and impact metrics." },
    ],
    body: [
      "<p>This is the website you are looking at now: my personal portfolio, where I present my experience, projects, writing, and skills. It is <a href=\"https://github.com/evgomes/evgomes.github.io\" target=\"_blank\" rel=\"noopener\">open source on GitHub</a> and published with <strong>GitHub Pages</strong>.</p>",
      "<p>It is built with plain <strong>HTML, CSS, and JavaScript</strong> and no framework, keeping it fast and dependency-free. It features a dark, theme-aware design, an animated particle and constellation background, a data-driven project catalog, accessible markup, and a fully responsive layout.</p>",
    ],
  },
  {
    id: "antennas-api",
    title: "Antennas API",
    period: "September 2024 - November 2024",
    company: { name: "Solomon Brothers Jewelers", url: "https://www.solomonbrothers.com/" },
    link: null,
    sector: "Retail",
    tags: [".NET 9", "ASP.NET Core", "SQL Server", "Hangfire"],
    thumb: { src: "assets/img/projects/antennas-api/api-swagger-mini.png", alt: "Antennas API - Swagger documentation" },
    summary:
      "Real-time RFID tracking for a jewelry store in Atlanta: an ASP.NET Core platform that processes over 20 million signals a day and tells managers where every piece of jewelry has been.",
    images: [
      { src: "assets/img/projects/antennas-api/api-swagger.png", alt: "API - Swagger" },
      { src: "assets/img/projects/antennas-api/hangfire-home.png", alt: "Hangfire - Main Page" },
      { src: "assets/img/projects/antennas-api/hangfire-jobs.png", alt: "Hangfire - Jobs" },
    ],
    body: [
      "<p>Application that processes millions of signals received from RFID readers, which report the location of jewelry throughout the day for Solomon Brothers Jewelers, a jewelry store based in Atlanta, Georgia. The application <strong>processes over 20 million signals daily</strong>.</p>",
      "<p>The application comprises a RESTful API that processes incoming signals and allows querying data in real-time, and a second application that uses Hangfire to run background processes. Between background processes, the main one summarizes signals into structured log data, enabling managers to know where each jewelry was during the day and how long they stayed at each location.</p>",
      "<p>The application is built on <strong>ASP.NET Core</strong> and <strong>.NET 9</strong> and uses <strong>SQL Server</strong> for data storage. It runs on an on-premise server using IIS Server.</p>",
    ],
  },
  {
    id: "sites",
    title: "SITES - Transportation for Special Education",
    period: "August 2024 - October 2024",
    company: { name: "Instituto das Cidades Inteligentes", url: "https://www.ici.curitiba.org.br/" },
    link: null,
    sector: "Government",
    tags: [".NET", "Angular", "CI/CD", "Architecture"],
    thumb: { src: "assets/img/projects/sites/main-page-mini.png", alt: "SITES - Transportation for Special Education main page" },
    summary:
      "Platform that manages Curitiba's special-education school transportation: students request adapted bus transport and staff review requests according to local law. I architected the solution and led the development team.",
    images: [
      { src: "assets/img/projects/sites/main-page.png", alt: "Main Page" },
      { src: "assets/img/projects/sites/admin-login-page.png", alt: "Admin Area - Login Page" },
      { src: "assets/img/projects/sites/admin-main-page.png", alt: "Admin Area - Main Page" },
    ],
    body: [
      "<p>Students with disabilities and global developmental disorders (autism) have the right to have special transportation to specialized schools in Curitiba.</p>",
      "<p>Buses are adapted to serve these students and have pre-defined routes and time schedules. Drivers, professors, and other professionals receive special training to work in these bus lines.</p>",
      "<p>A new solution has been developed to help manage and use special transportation in Curitiba. Both students and professionals can use the platform to request the usage of buses and to review and process requests according to local laws.</p>",
      "<p>As a software architect and tech lead, I defined the technologies and architecture necessary to develop the project. I helped developers implement features and did code reviews to ensure code quality during development time. I also helped to implement the CI/CD pipeline and documented the code structure and development processes.</p>",
      "<p>Finally, I worked together with the project analyst and stakeholders to ensure quality, usability, and good performance for the application.</p>",
    ],
  },
  {
    id: "meal-management",
    title: "Meal Management System",
    period: "September 2023 - April 2024",
    company: { name: "Instituto das Cidades Inteligentes", url: "https://www.ici.curitiba.org.br/" },
    link: null,
    sector: "Government",
    tags: ["ASP.NET Core", "Angular", "RabbitMQ", "SignalR"],
    thumb: { src: "assets/img/projects/controle-refeicoes/start-page-mini.png", alt: "Meal Management System start page" },
    summary:
      "Distributed system the Department of Education of Curitiba uses to plan and bill school meals across hundreds of public schools: menus, nutrients, suppliers, and billing in one platform.",
    images: [
      { src: "assets/img/projects/controle-refeicoes/start-page.png", alt: "Login Page" },
      { src: "assets/img/projects/controle-refeicoes/admin-area.png", alt: "Admin Area" },
      { src: "assets/img/projects/controle-refeicoes/edit-meal-screen.png", alt: "Edit meal screen" },
      { src: "assets/img/projects/controle-refeicoes/menu-screen.png", alt: "Menu management screen" },
    ],
    body: [
      "<p>The Meal Management System provides management functions that the Department of Education of Curitiba needs to control food distribution across hundreds of public schools in Curitiba.</p>",
      "<p>Nutritionists and education professionals can use the system to manage meal types, nutrients, ingredients, menus, food suppliers, and other functionalities necessary to distribute meals. Additionally, the application offers a billing feature that integrates all system information, calculating the amount to pay to each supplier according to the services provided.</p>",
      "<p>The application is built on top of distributed architecture principles. <strong>ASP.NET Core</strong> and <strong>Angular</strong> are the core technologies for the application's back-end and front-end. A background service is responsible for handling calculations and performing heavy processing. This service connects to the APIs and the front-end apps via a <strong>RabbitMQ</strong> event bus and <strong>SignalR</strong>.</p>",
      "<p>As a tech lead and architect, I was responsible for designing and making decisions regarding how to develop features, integrate services, and define what libraries to use. I ensured the team followed best practices by supporting them while developing features.</p>",
      "<p>I also coded the most complex feature regarding menu generation and meal distribution, considering various business rules and integrations.</p>",
    ],
  },
  {
    id: "justoffered",
    title: "JustOffered",
    period: "November 2022 - April 2023",
    company: { name: "ConnectHealth", url: "https://connecthealthco.com/" },
    link: "https://justoffered.com",
    sector: "Real Estate",
    tags: ["ASP.NET Core", "Blazor", "CRM"],
    thumb: { src: "assets/img/projects/just-offered-new-app/crm-open-house-details-mini.png", alt: "JustOffered CRM open house details" },
    summary:
      "Open-house platform for US real-estate agents: paperless visit management, personalized video messages, and customizable agent websites. I implemented all related solutions end-to-end with ASP.NET Core and Blazor.",
    images: [
      { src: "assets/img/projects/just-offered-new-app/crm-open-house-details.png", alt: "CRM - Open House Details" },
      { src: "assets/img/projects/just-offered-new-app/crm-record-video.png", alt: "CRM - Record Video" },
      { src: "assets/img/projects/just-offered-new-app/open-houses-listings.png", alt: "Open Houses App - Listings" },
      { src: "assets/img/projects/just-offered-new-app/single-listings-home.png", alt: "Single Listings - Main Page" },
    ],
    body: [
      "<p>JustOffered is a platform that helps real estate agents manage potential customers by hosting open house events. This platform provides a seamless way of controlling visits, enabling agents to eliminate the use of paper.</p>",
      "<p>In addition to managing visits, the solution offers the possibility of recording videos to send personalized messages to customers, agents, and contacts. Furthermore, the platform provides features to customize the agent's website, allowing them to add custom sections as needed.</p>",
      "<p>I was responsible for the implementation of all related solutions for this project. The project is built on top of <strong>ASP.NET Core</strong> and <strong>Blazor</strong>, and it is composed of a CRM, a website to show listings and open houses, a website that renders agent information according to the configuration in the CRM, and a website to promote open house listings.</p>",
    ],
  },
  {
    id: "provider-finder",
    title: "Healthplexa Provider Finder",
    period: "April 2021 - April 2023",
    company: { name: "ConnectHealth", url: "https://connecthealthco.com/" },
    link: "https://connecthealthco.com/solutions/provider-finder",
    sector: "Healthcare",
    tags: ["ASP.NET Core", "Apache Lucene", "Search"],
    thumb: { src: "assets/img/projects/provider-finder/index-page.png", alt: "Provider Finder index page" },
    summary:
      "Healthcare provider search used by payers, benefits managers, and employers to connect members with the right providers: fast, configurable search built on ASP.NET Core and Apache Lucene.",
    images: [
      { src: "assets/img/projects/provider-finder/index-page.png", alt: "Index Page" },
      { src: "assets/img/projects/provider-finder/search-providers.png", alt: "Search Page" },
      { src: "assets/img/projects/provider-finder/professional-details.png", alt: "Professional Details Page" },
      { src: "assets/img/projects/provider-finder/location-details.png", alt: "Location Details Page" },
    ],
    body: [
      "<p>Provider Finder is a turnkey solution that is part of the Healthplexa integrated provider data platform offered by ConnectHealth. It is designed to provide an easy-to-use mobile and desktop experience for payers, benefits managers, and employers to connect their members with appropriate healthcare providers.</p>",
      "<p>With Provider Finder, members can conduct searches with ease, using various parameters such as name, location, service, or specialty to receive accurate search results. Payers and plans can customize the search results to ensure that preferred providers are prioritized. The cloud-based platform is highly configurable, allowing for the management of multiple lines of business, markets, and networks.</p>",
      "<p>Provider Finder is built on top of <strong>ASP.NET Core</strong> and <strong>Apache Lucene</strong>, offering a modern solution integrated with the Provider Data Manager solution.</p>",
    ],
  },
  {
    id: "provider-data-manager",
    title: "Healthplexa Provider Data Manager",
    period: "September 2021 - December 2022",
    company: { name: "ConnectHealth", url: "https://connecthealthco.com/" },
    link: "https://connecthealthco.com/solutions/provider-data-manager",
    sector: "Healthcare",
    tags: ["ASP.NET Core", "Blazor", "Data Platform"],
    thumb: { src: "assets/img/projects/provider-data-manager/professional-details.jpg", alt: "Provider Data Manager professional details" },
    summary:
      "Enterprise data management system to collect, analyze, monitor, and distribute healthcare provider data, processing hundreds of thousands of records at a time.",
    images: [
      { src: "assets/img/projects/provider-data-manager/professional-details.jpg", alt: "Professional Details Page" },
      { src: "assets/img/projects/provider-data-manager/location-details.jpg", alt: "Location Details Page" },
      { src: "assets/img/projects/provider-data-manager/rosters-list.png", alt: "Provider Rosters List Page" },
      { src: "assets/img/projects/provider-data-manager/incoming-roster-details.jpg", alt: "Incoming Roster Details Page" },
      { src: "assets/img/projects/provider-data-manager/rosters-mapping.png", alt: "Rosters Mapping Page" },
    ],
    body: [
      "<p>The ConnectHealth Provider Data Management (PDM) solution was developed to meet an organization’s need to collect, analyze, monitor, and distribute provider data. It is a flexible and customizable enterprise data management system that evolves as business processes and care delivery models change over time. The data platform integrates seamlessly with both the Provider Finder and Provider Data Quality products so that you can manage all provider data inputs and outputs from a single system.</p>",
      "<p>The project offers an automated solution to manage and validate provider data for the healthcare market. It was built on top of ASP.NET Core and Blazor. The solution is capable of <strong>processing hundreds of thousands of records per time</strong> when adding or changing providers data.</p>",
    ],
  },
  {
    id: "provider-data-quality",
    title: "Healthplexa Provider Data Quality",
    period: "June 2021 - August 2021",
    company: { name: "ConnectHealth", url: "https://connecthealthco.com/" },
    link: "https://connecthealthco.com/solutions/provider-data-quality",
    sector: "Healthcare",
    tags: ["ASP.NET Core", "Data Quality"],
    thumb: { src: "assets/img/projects/provider-data-quality/verification-cases.png", alt: "Provider Data Quality verification cases" },
    summary:
      "The Provider Data Quality (PDQ) solution is a comprehensive solution that uses a combination of advanced technology and strict policies to verify provider directory data at the source.",
    images: [
      { src: "assets/img/projects/provider-data-quality/verification-cases.png", alt: "Verification Cases Page" },
      { src: "assets/img/projects/provider-data-quality/provider-verification.png", alt: "Provider Verification" },
      { src: "assets/img/projects/provider-data-quality/provider-data-review.png", alt: "Provider Data Review" },
    ],
    body: [
      "<p>The Provider Data Quality (PDQ) solution utilizes a blend of technology and stringent policies to definitively verify existing provider directory data at the source.</p>",
      "<p>It provides flexibility to provider groups for easy and efficient responses to ensure state and federal provider data requirements are met quarterly. The proven processes achieve a high level of engagement from providers resulting in the highest levels of data accuracy.</p>",
    ],
  },
  {
    id: "orders-management",
    title: "Orders Management",
    period: "November 2020 - December 2020",
    company: null,
    link: "https://github.com/evgomes/gestao-de-pedidos",
    sector: "Open Source",
    tags: ["Node.js", "React.js", "MongoDB"],
    thumb: { src: "assets/img/projects/orders-management/index-mini.png", alt: "Orders Management index page" },
    summary:
      "Cosmetics order management system written in JavaScript. It uses Node.js, React.js, and MongoDB as the main technologies, released as open source.",
    images: [
      { src: "assets/img/projects/orders-management/index.png", alt: "Orders Management - Index Page" },
      { src: "assets/img/projects/orders-management/notes.png", alt: "Orders Management - Notes Page" },
    ],
    body: [
      "<p>This is a cosmetics order management system built using <strong>JavaScript, Node.js, React.js,</strong> and <strong>MongoDB</strong> as the core technologies. I created this project to help my wife manage her cosmetics sales by providing a system to handle orders and take notes on sales.</p>",
      "<p>I have decided the project open source as I believe it may help others with similar jobs.</p>",
    ],
  },
  {
    id: "clique-economia",
    title: "Clique Economia Website",
    period: "August 2020 - October 2020",
    company: { name: "Instituto das Cidades Inteligentes", url: "https://www.ici.curitiba.org.br/" },
    link: "https://cliqueeconomia.curitiba.pr.gov.br/",
    sector: "Government",
    tags: ["ASP.NET Core", "Team Leadership"],
    thumb: { src: "assets/img/projects/clique-economia/index-mini.png", alt: "Clique Economia index page" },
    summary:
      "System that allows citizens from Curitiba to discover which markets offer better prices for a given list of products. I led the team that delivered it.",
    images: [
      { src: "assets/img/projects/clique-economia/index.png", alt: "Index Page" },
      { src: "assets/img/projects/clique-economia/mobile-products.png", alt: "List Products Page (mobile devices)" },
      { src: "assets/img/projects/clique-economia/result-quotation.png", alt: "Page to See the Best Prices" },
    ],
    body: [
      "<p>The Clique Economia website is a new version of an old website written in classical ASP.</p>",
      "<p>This system <strong>allows citizens from Curitiba to discover which markets offer better prices for a given list of products.</strong></p>",
      "<p>The website focuses on user experience and offers a mobile-like application layout. It is 100% responsive. The website is built on top of ASP.NET Core and it is prepared to process thousands of requests per second.</p>",
      "<p><strong>I worked as a team leader for this project,</strong> defining its architecture, doing code reviews, and supporting other developers during the development lifecycle. I managed a team composed of a senior developer, a junior developer, two UX designers, and a tester to guarantee the project delivery.</p>",
    ],
  },
  {
    id: "feira-do-largo",
    title: "Feira do Largo Website",
    period: "April 2020 - May 2020",
    company: { name: "Instituto das Cidades Inteligentes", url: "https://www.ici.curitiba.org.br/" },
    link: "https://feiradolargo.curitiba.pr.gov.br",
    sector: "Government",
    tags: ["ASP.NET Core", "COVID-19 Response"],
    thumb: { src: "assets/img/projects/feira-largo/index-mini.png", alt: "Feira do Largo website index page" },
    summary:
      "Website built during the COVID-19 pandemic so merchants of the Largo da Ordem Street Fair in Curitiba could sell their products online.",
    images: [
      { src: "assets/img/projects/feira-largo/index.png", alt: "Index Page" },
      { src: "assets/img/projects/feira-largo/details.png", alt: "Details Page" },
    ],
    body: [
      "<p>The Largo da Ordem Street Fair is an event held in Curitiba, Brazil.</p>",
      "<p>During the COVID-19 pandemic, a website was built to enable merchants to sell their products online, even if they couldn't participate in the event in person.</p>",
      "<p>The website was developed quickly and gained popularity with the help of local media promoting its link.</p>",
    ],
  },
  {
    id: "feiras-livres",
    title: "Feiras Livres Website",
    period: "April 2020 - May 2020",
    company: { name: "Instituto das Cidades Inteligentes", url: "https://www.ici.curitiba.org.br/" },
    link: "https://feiraslivres.curitiba.pr.gov.br/",
    sector: "Government",
    tags: ["ASP.NET Core", "COVID-19 Response"],
    thumb: { src: "assets/img/projects/feiras-livres/index-mini.png", alt: "Feiras Livres website index page" },
    summary:
      "System where Curitiba food marketers can show their products online, built in a few days during the COVID-19 pandemic and featured many times on local media.",
    images: [{ src: "assets/img/projects/feiras-livres/index.png", alt: "Index Page" }],
    body: [
      "<p>The <i>Feiras Livres</i> (Street Fairs) website is a system where Curitiba food marketers can show their products online.</p>",
      "<p>The website was built during the COVID-19 pandemic to allow merchants to sell their products online.</p>",
      "<p>The website was developed in a few days and it became very popular, appearing many times on local media.</p>",
    ],
  },
  {
    id: "justoffered-api",
    title: "JustOffered - REST API",
    period: "December 2019 - March 2020",
    company: { name: "ConnectHealth", url: "https://connecthealthco.com/" },
    link: "https://justoffered.com",
    sector: "Real Estate",
    tags: ["ASP.NET Core", "REST API", "Blazor"],
    thumb: { src: "assets/img/projects/justoffered-api/index-mini.png", alt: "JustOffered REST API" },
    summary:
      "REST API for the JustOffered open-house platform. I worked as a consultant defining the software architecture and implementing tens of functionalities.",
    images: [{ src: "assets/img/projects/justoffered-api/index.png", alt: "Index Page" }],
    body: [
      "<p>JustOffered is a platform that helps real estate agents to manage potential customers through hosting open house events. The platform offers a way of controlling visits, allowing real estate agents to get rid of papers.</p>",
      "<p>I worked as a consultant developing a REST API for the platform, defining the software architecture, and implementing tens of functionalities. I also participated in the development of a web app that uses Blazor as its main technology.</p>",
    ],
  },
  {
    id: "civil-servants",
    title: "Civil Servants Website",
    period: "September 2019 - June 2020",
    company: { name: "Instituto das Cidades Inteligentes", url: "https://www.ici.curitiba.org.br/" },
    link: "https://servidor.curitiba.pr.gov.br",
    sector: "Government",
    tags: ["ASP.NET Core", "Integrations", "High Availability"],
    thumb: { src: "assets/img/projects/civil-servants/index-mini.png", alt: "Civil Servants website index page" },
    summary:
      "Portal delivering 300+ online services to Curitiba's civil servants: 50+ integrated services across 7 REST APIs and millions of accesses per month. I led the project and defined its architecture.",
    images: [
      { src: "assets/img/projects/civil-servants/index.png", alt: "Index Page" },
      { src: "assets/img/projects/civil-servants/main-area.png", alt: "Restricted Area" },
      { src: "assets/img/projects/civil-servants/cms.png", alt: "CMS" },
      { src: "assets/img/projects/civil-servants/services.png", alt: "Search Services Page" },
      { src: "assets/img/projects/civil-servants/mobile-view.png", alt: "Website Mobile View" },
    ],
    body: [
      "<p>The Civil Servants Website provides Curitiba's civil servants with <strong>more than 300 online services</strong>, both for work usage and personal usage.</p>",
      "<p>Between the available services, civil servants can check their monthly payments, they can access their webmail boxes, can access a lot of useful forms for work purposes, and can access external integrated services.</p>",
      "<p>The website substituted two old city hall systems, one that had all stuff related to human resources, and a second one that had useful online services for city hall employees.</p>",
      "<p>This is the biggest and most complex project I have worked on so far due to its business complexity, all its integrations (there are more than <strong>50 integrated services through 7 distinct REST APIs</strong>, as well as external systems integrations), and because it needs high availability and performance due to daily usage (the website receives <strong>millions of accesses per month, and processes thousands of requests per second</strong>).</p>",
      "<p>I worked both on the analysis and development of functionalities, and <strong>I took the lead in the project</strong> during its development. I also defined the software architecture for this project.</p>",
    ],
  },
  {
    id: "realtime-chat",
    title: "Realtime Chat",
    period: "August 2019",
    company: null,
    link: "https://github.com/evgomes/chat-node-socket-io",
    sector: "Open Source",
    tags: ["Node.js", "Socket.IO"],
    thumb: { src: "assets/img/projects/chat-node/chat-mini.png", alt: "Realtime Chat" },
    summary:
      "A simple application built on top of Node.js that uses Socket.IO to handle real-time message exchange, developed to study and demonstrate the stack.",
    images: [{ src: "assets/img/projects/chat-node/chat.png", alt: "Index Page" }],
    body: [
      "<p>A simple application built on top of <strong>Node.js</strong> that uses <strong>Socket.IO</strong> to handle real-time message exchange.</p>",
      "<p>It was developed to study and demonstrate how to use Node.js and related technologies to develop web applications.</p>",
    ],
  },
  {
    id: "curitiba-city-hall",
    title: "Curitiba City Hall Website",
    period: "January 2019 - September 2019",
    company: { name: "Instituto das Cidades Inteligentes", url: "https://www.ici.curitiba.org.br/" },
    link: "https://www.curitiba.pr.gov.br",
    sector: "Government",
    tags: ["CMS", "High Traffic"],
    thumb: { src: "assets/img/projects/curitiba-city-hall/home-mini.png", alt: "Curitiba City Hall website index page" },
    summary:
      "Curitiba's main website, modernized with journalistic best practices. It receives millions of visitors every month. I played a role in all stages of development.",
    images: [
      { src: "assets/img/projects/curitiba-city-hall/home.png", alt: "Index Page" },
      { src: "assets/img/projects/curitiba-city-hall/news.png", alt: "News Page" },
      { src: "assets/img/projects/curitiba-city-hall/services.png", alt: "Services Search" },
      { src: "assets/img/projects/curitiba-city-hall/traffic.png", alt: "Traffic Information" },
      { src: "assets/img/projects/curitiba-city-hall/mobile.png", alt: "Website Mobile View" },
    ],
    body: [
      "<p>The Curitiba City Hall website adheres to journalistic best practices and tendencies. The website was requested by the city hall management to modernize the city's old website. It ensures responsiveness and presents content in a simple, intuitive way.</p>",
      "<p><strong>As the city's main website, it receives millions of visitors every month.</strong> I played a role in all stages of development, from analysis to implementation.</p>",
    ],
  },
  {
    id: "curitiba-traffic",
    title: "Curitiba Traffic Website",
    period: "July 2018 - October 2018",
    company: { name: "Instituto das Cidades Inteligentes", url: "https://www.ici.curitiba.org.br/" },
    link: "https://transito.curitiba.pr.gov.br",
    sector: "Government",
    tags: ["CMS", "Responsive Design"],
    thumb: { src: "assets/img/projects/setran/home-mini.png", alt: "Curitiba Traffic website index page" },
    summary:
      "Dynamic website providing citizens with information and services related to Curitiba's traffic system, with an integrated custom CMS.",
    images: [
      { src: "assets/img/projects/setran/home.png", alt: "Index Page" },
      { src: "assets/img/projects/setran/news.png", alt: "News Page" },
      { src: "assets/img/projects/setran/services-search.png", alt: "Services Search" },
    ],
    body: [
      "<p>The Curitiba City Hall commissioned the development of a dynamic website to provide citizens with information and services related to the city's traffic system.</p>",
      "<p>The website features a responsive layout. It enables quick and easy searches for services, such as traffic ticket payment and speed radar locations.</p>",
      "<p>Additionally, the website features an integrated custom CMS that allows for services management, news, events, images, and other content.</p>",
    ],
  },
  {
    id: "polis",
    title: "Polis",
    period: "January 2018 - January 2019",
    company: { name: "Instituto das Cidades Inteligentes", url: "https://www.ici.curitiba.org.br/" },
    link: "https://polis.ici.curitiba.org.br",
    sector: "Government",
    tags: ["CMS Platform", "Accessibility"],
    thumb: { src: "assets/img/projects/polis/home-mini.png", alt: "Polis index page" },
    summary:
      "CMS platform for city halls with resources to share news, deliver services, conduct surveys, and generate protocol forms for citizens.",
    images: [
      { src: "assets/img/projects/polis/home.png", alt: "Index Page" },
      { src: "assets/img/projects/polis/services.png", alt: "Services Page" },
      { src: "assets/img/projects/polis/contrast.png", alt: "View with Contrast" },
    ],
    body: [
      "<p>CMS platform for city halls that offers functionalities to deliver services and information to citizens.</p>",
      "<p>The platform has resources to share news, create newsletters, search for services, conduct surveys, create forms with protocol generation, select custom themes, and more.</p>",
      "<p>The platform contains a dynamic website and an administrative module.</p>",
      "<p>I participated in the implementation of many improvements on the platform, according to a roadmap defined by the company's market team.</p>",
      "<p>Polis is running in production for Inácio Martins city hall, a city hall from a small city in Paraná. There are other company projects based on this solution.</p>",
    ],
  },
  {
    id: "rede-cidade-digital",
    title: "Rede Cidade Digital",
    period: "November 2018 - December 2018",
    company: { name: "Instituto das Cidades Inteligentes", url: "https://www.ici.curitiba.org.br/" },
    link: "http://redecidadedigital.com.br",
    sector: "Government",
    tags: ["CMS", "Performance"],
    thumb: { src: "assets/img/projects/rede-cidade-digital/home-mini.png", alt: "Rede Cidade Digital index page" },
    summary:
      "Website developed on the Polis platform to provide users with news and event information related to smart cities.",
    images: [
      { src: "assets/img/projects/rede-cidade-digital/home.png", alt: "Index Page" },
      { src: "assets/img/projects/rede-cidade-digital/events.png", alt: "Events Page" },
    ],
    body: [
      "<p>Website developed using the Polis platform, a custom CMS for city halls owned by Instituto das Cidades Inteligentes. As part of the development team, I helped to implement many functionalities to meet business requirements.</p>",
      "<p>The website boasts high performance, loading images quickly and presenting information in an easily digestible format. Its primary focus is to provide users with news and event information related to smart cities.</p>",
    ],
  },
];
