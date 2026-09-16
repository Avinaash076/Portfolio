// Centralized portfolio data for Avinaash Munavalli

export const profile = {
  name: "Avinaash Munavalli",
  firstName: "Avinaash",
  lastName: "Munavalli",
  role: "Full-Stack Web Developer",
  roles: [
    "Full-Stack Web Developer",
    "Backend Systems Engineer",
    "Workflow Automation Builder",
    "Enterprise Software Craftsman",
  ],
  tagline:
    "I build reliable, real-world web services — from industrial monitoring platforms to workflow-automation tools — with a focus on clean architecture, performance, and maintainability.",
  location: "Bengaluru, India",
  availability: "Open to Bengaluru & remote roles across India",
  email: "avinashmunavalli522@gmail.com",
  phone: "+91 80880 17790",
  github: "https://github.com/Avinaash076",
  githubHandle: "Avinaash076",
  linkedin: "https://linkedin.com/in/avinaash-m-832a33279",
  linkedinHandle: "avinaash-m-832a33279",
  resumePath: "/avinaash_munavalli.pdf",
  summary:
    "Full-stack developer building enterprise monitoring and workflow tools. Cut page load times by 40%, fixed a production defect impacting 220 records, and automated 10+ hours of operations work weekly.",
};

export const stats = [
  { label: "Production Experience", value: 1, suffix: "+", unit: "yr" },
  { label: "Page Load Reduction", value: 40, suffix: "%", unit: "faster" },
  { label: "Manual Hours Saved", value: 10, suffix: "+", unit: "hrs/wk" },
  { label: "SQL Records Reconciled", value: 220, suffix: "", unit: "fixed" },
];

export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    icon: "Code2",
    accent: "emerald",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "SQL",
      "Kotlin",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "web-backend",
    title: "Web & Backend",
    icon: "Server",
    accent: "amber",
    skills: [
      "Node.js",
      "React.js",
      "REST APIs",
      "MVC",
      "OOP",
      "Responsive UI",
      "API Validation",
      "Authentication",
      "RBAC",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    accent: "emerald",
    skills: [
      "MySQL",
      "SQLite",
      "Room",
      "Relational Schema Design",
      "Joins",
      "Indexing",
      "Query Optimization",
      "Batch Processing",
    ],
  },
  {
    id: "testing",
    title: "Testing & Quality",
    icon: "ShieldCheck",
    accent: "amber",
    skills: [
      "Unit Testing",
      "Integration Testing",
      "Git",
      "Pull Requests",
      "Code Reviews",
      "SDLC",
      "Agile / Scrum",
    ],
  },
  {
    id: "operations",
    title: "Operations & Security",
    icon: "Lock",
    accent: "emerald",
    skills: [
      "CI/CD",
      "IIS",
      "Windows Server",
      "Release Management",
      "Incident Response",
      "RCA",
      "bcrypt",
      "CSRF Protection",
      "Prepared Statements",
      "Secure Sessions",
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    icon: "Plug",
    accent: "amber",
    skills: [
      "Third-party APIs",
      "DeepSeek API",
      "ESP32 / Arduino Telemetry",
      "Device-to-Database Integration",
    ],
  },
];

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  highlights: { title: string; detail: string; metric?: string }[];
  stack: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Innovascape LLP",
    location: "Hubli, India",
    role: "Full-Stack Developer",
    period: "Jun 2025 — Present",
    current: true,
    summary:
      "Building and operating a real-time industrial monitoring platform used by enterprise clients, plus the backend services and automation tooling around it.",
    highlights: [
      {
        title: "Real-time industrial monitoring platform",
        detail:
          "Built and shipped a unified web dashboard that lets enterprise clients view machine status, telemetry, and alerts in real time.",
      },
      {
        title: "Backend services & REST APIs",
        detail:
          "Developed and maintained services for monitoring, reporting, workflow automation, authentication, and client-specific business processes.",
      },
      {
        title: "ESP32/Arduino telemetry integration",
        detail:
          "Connected device signals to application data workflows, enabling reliable telemetry capture for industrial use cases.",
      },
      {
        title: "Production SQL defect resolved",
        detail:
          "Isolated a faulty query that had generated 220 incorrect machine-data records, deployed the fix, and reconciled every affected record.",
        metric: "220 records fixed",
      },
      {
        title: "N+1 query refactor — 40% faster pages",
        detail:
          "Refactored N+1 query patterns using eager loading and batched SQL joins, reducing page-load times across key reporting screens.",
        metric: "−40% load time",
      },
      {
        title: "Authentication & authorization across 5+ roles",
        detail:
          "Implemented bcrypt hashing, RBAC, CSRF protection, prepared statements, and secure session management.",
        metric: "5+ roles",
      },
      {
        title: "Bulk-import & deduplication tooling",
        detail:
          "Built internal tools that eliminated roughly 10+ hours of manual operations work every week.",
        metric: "−10 hrs/wk",
      },
      {
        title: "Release management & production support",
        detail:
          "Supported Git-based development, CI/CD pipeline runs, IIS/Windows Server deployments, release management, troubleshooting, and RCA.",
      },
    ],
    stack: [
      "Node.js",
      "React",
      "JavaScript",
      "Python",
      "REST APIs",
      "MySQL",
      "RBAC",
      "CI/CD",
      "IIS",
      "ESP32",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: "shipped" | "live" | "in-progress";
  year: string;
  stack: string[];
  highlights: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
  accent: "emerald" | "amber" | "rose";
};

export const projects: Project[] = [
  {
    id: "flowform",
    name: "FlowForm",
    tagline: "Configurable Workflow Automation Platform",
    category: "Full-Stack SaaS",
    status: "shipped",
    year: "2025",
    accent: "emerald",
    featured: true,
    description:
      "A Jotform-style platform where admins define forms, assign users to sequential workflow stages, map fields to owners, and track submissions through to completion — augmented by a DeepSeek-powered assistant that turns plain-English descriptions into editable form structures.",
    stack: ["PHP", "JavaScript", "React", "Node.js", "MySQL", "REST APIs", "RBAC"],
    highlights: [
      "Admins define forms, fields, workflow sequences, and user assignments; submissions flow through draft → live → completed states.",
      "Required-field validation, RBAC, CSRF protection, prepared statements, form duplication, employee management, and submission history views.",
      "DeepSeek-powered assistant generates editable form structures from natural-language descriptions, with validation and manual review before publish.",
    ],
    repoUrl: "https://github.com/Avinaash076/Flowform",
  },
  {
    id: "industrial-monitoring",
    name: "Industrial Monitoring Platform",
    tagline: "Real-time Machine Telemetry Dashboard",
    category: "Enterprise / IoT",
    status: "shipped",
    year: "2025",
    accent: "amber",
    featured: true,
    description:
      "A real-time industrial monitoring platform used by enterprise clients to view machine status, telemetry streams, and alerts through a unified web dashboard — backed by REST services and ESP32/Arduino device integration.",
    stack: ["Node.js", "React", "REST APIs", "MySQL", "ESP32", "RBAC", "CI/CD"],
    highlights: [
      "Unified dashboard for machine status, telemetry, and alerts across enterprise clients.",
      "ESP32/Arduino signals wired into application data workflows for reliable telemetry capture.",
      "N+1 query refactors using eager loading and batched joins cut page-load times by up to 40%.",
      "RBAC across 5+ roles with bcrypt, CSRF protection, prepared statements, and secure sessions.",
    ],
    // repoUrl: "https://github.com/Avinaash076",
  },
  {
    id: "spendsense",
    name: "SpendSense",
    tagline: "Android Budgeting Application",
    category: "Mobile / Android",
    status: "shipped",
    year: "2026",
    accent: "rose",
    featured: true,
    description:
      "An offline-first Android budgeting app that detects transactions from SMS, persists them locally with Room, and surfaces spending insights through an interactive Jetpack Compose dashboard built on MVVM.",
    stack: ["Kotlin", "Jetpack Compose", "Room", "MVVM"],
    highlights: [
      "SMS-based transaction detection with local Room persistence — works fully offline.",
      "Interactive Jetpack Compose dashboard for spending insights and trends.",
      "Clean MVVM architecture with locally persisted transaction records.",
    ],
    repoUrl: "https://github.com/Avinaash076/SpendSense",
  },
  {
    id: "ai-support-agent",
    name: "Apple AI Support Agent",
    tagline: "RAG-powered Customer Support Classifier & Reply Generator",
    category: "AI / NLP",
    status: "in-progress",
    year: "2026",
    accent: "emerald",
    featured: true,
    description:
      "A production-ready AI support agent for Apple Support that classifies incoming customer queries into intents, retrieves grounded historical resolutions via TF-IDF RAG from 50,000+ real Twitter support pairs, drafts replies using a Groq-hosted LLM, and recommends human escalation through a triage engine.",
    stack: ["Python", "Streamlit", "Groq LLM", "TF-IDF", "RAG", "NLP", "Unittest"],
    highlights: [
      "Classifies customer queries into structured intents and triggers automated or escalated responses via a triage engine.",
      "Retrieves the most relevant Apple Support reply examples from a corpus of 50,000+ Twitter pairs using TF-IDF similarity.",
      "Groq-hosted LLM drafts grounded, context-aware replies through a reasoning-optimised chat interface.",
      "Includes a 40-case benchmark suite covering battery, iCloud, billing, hardware, and follow-up scenarios for regression testing.",
    ],
    repoUrl: "https://github.com/Avinaash076/AI-Support-Agent",
  },
];

export type EducationItem = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  detail: string;
  score: { label: string; value: string };
};

export const education: EducationItem[] = [
  {
    institution: "Jain College of Engineering and Technology",
    location: "Hubli, India",
    degree: "B.E. in Computer Science and Engineering",
    period: "Dec 2021 — May 2025",
    detail:
      "Graduated with a strong academic record focused on computer science fundamentals, software engineering, and database systems.",
    score: { label: "CGPA", value: "8.44 / 10" },
  },
];

export type Certification = {
  title: string;
  issuer: string;
  focus: string;
};

export const certifications: Certification[] = [
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services",
    focus: "Foundational cloud concepts, core AWS services, and cloud architecture basics",
  },
  {
    title: "Google IT Automation with Python — Python for OS Interaction",
    issuer: "Google",
    focus: "Automating OS-level tasks with Python",
  },
  {
    title: "Google IT Automation with Python — Git and GitHub",
    issuer: "Google",
    focus: "Version control and collaboration workflows",
  },
];

export const navSections = [
  { id: "home", label: "Home", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "skills", label: "Skills", num: "03" },
  { id: "experience", label: "Experience", num: "04" },
  { id: "work", label: "Projects", num: "05" },
  { id: "education", label: "Education", num: "06" },
  { id: "contact", label: "Contact", num: "07" },
];
