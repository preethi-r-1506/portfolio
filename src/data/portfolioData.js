export const personalInfo = {
  name: "Preethi Ravi",
  title: "Software Engineer",
  roles: ["Software Engineer", "Backend Developer", "Python Developer", "ERP Developer", "Cloud Engineer"],
  tagline: "Engineering production-grade systems where backend precision meets cloud scale.",
  summary: "Software Engineer and Backend Developer with 1 year of production experience in Python, JavaScript, and SQL. Published 4 modules to the Odoo App Store. AWS Certified Cloud Practitioner with a proven record in distributed computing, data storage optimization, information retrieval, and end-to-end software development across ERP and cloud systems.",
  shortBio: "I build resilient backend systems and ERP solutions — from eliminating PostgreSQL deadlocks to shipping production Odoo modules with thousands of records flowing through optimized pipelines.",
  location: "Chennai, India",
  email: "preethiravi1506@gmail.com",
  phone: "+91 97910 71563",
  linkedin: "https://linkedin.com/in/preethi-ravi-091557276",
  github: "https://github.com/PREETHI156",
};

export const stats = [
  { label: "Year of Experience", value: 1, suffix: "+" },
  { label: "Odoo Modules Published", value: 4, suffix: "" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Certifications", value: 4, suffix: "" },
];

export const experience = [
  {
    company: "EWall Solutions Pvt. Ltd.",
    role: "Junior Software Developer",
    duration: "June 2025 – Present",
    location: "Chennai, India",
    type: "Full-time",
    highlights: [
      {
        title: "Distributed Systems Engineering",
        detail: "Eliminated PostgreSQL transaction poisoning and lock contention in a Frappe ERP. Per-record savepoints prevented cascade failures; sequential batch chaining removed deadlocks, restoring 100% worker throughput. Resolved RQ worker failures from stale DB state across forked processes, reducing job failure rate to 0%.",
      },
      {
        title: "Odoo Module Development (4 Published)",
        detail: "Designed and shipped 4 production Odoo 19 eCommerce modules — multi-website visibility, stock display, advanced filters, and global search — in Python, QWeb, and JavaScript. All live on the official Odoo App Store.",
      },
      {
        title: "AWS S3 Service Layer",
        detail: "Architected a reusable Python mixin (boto3) with tuned retries, live credential health checks, server-side copy for zero-download SKU renames, 2-phase upload/confirm protocol, and non-blocking CloudFront cache invalidation.",
      },
      {
        title: "CSV Import Pipeline",
        detail: "Built a Frappe CSV import system for 10,000+ records with per-batch audit reporting (inserted, updated, failed, skipped), idempotent re-run via pre-loaded lookups, and per-record error capture with full technical documentation.",
      },
      {
        title: "ERP Grade Calculation Engine",
        detail: "Implemented 9 grade calculation functions in a Frappe School ERP with decimal mark processing, empty-record exclusion, and term-conditional overall grade logic.",
      },
    ],
    technologies: ["Python", "Odoo 19", "Frappe", "PostgreSQL", "RQ", "AWS S3", "CloudFront", "boto3", "QWeb", "JavaScript"],
  },
];

export const skills = {
  Languages: [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "⚡" },
    { name: "SQL", icon: "🗄️" },
    { name: "C", icon: "⚙️" },
    { name: "C++", icon: "🔩" },
  ],
  Backend: [
    { name: "Odoo 19", icon: "🔧" },
    { name: "Frappe", icon: "🏗️" },
    { name: "ERPNext", icon: "📊" },
    { name: "REST APIs", icon: "🔌" },
    { name: "RQ (Redis Queue)", icon: "⚡" },
    { name: "QWeb", icon: "📄" },
    { name: "Odoo ORM", icon: "🗃️" },
    { name: "Laravel", icon: "🎯" },
  ],
  Database: [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "psycopg2", icon: "🔗" },
    { name: "Query Optimization", icon: "🔍" },
  ],
  Cloud: [
    { name: "AWS S3", icon: "☁️" },
    { name: "CloudFront", icon: "🌐" },
    { name: "boto3", icon: "🛠️" },
  ],
  Tools: [
    { name: "Git", icon: "📦" },
    { name: "GitHub", icon: "🐙" },
    { name: "Linux CLI", icon: "🐧" },
    { name: "Postman", icon: "📬" },
  ],
  Concepts: [
    { name: "Distributed Computing", icon: "🌐" },
    { name: "Information Retrieval", icon: "🔍" },
    { name: "MVC", icon: "🏛️" },
    { name: "SOLID Principles", icon: "💎" },
    { name: "Data Storage Design", icon: "🗂️" },
  ],
};

export const projects = [
  {
    title: "Frappe Background Job Import System",
    description: "A high-performance batch pipeline for importing 10,000+ records into a Frappe ERP. Engineered to be fully idempotent and self-auditing, with deep resilience against the distributed database failure modes that plague background worker systems.",
    technologies: ["Python", "Frappe", "PostgreSQL", "RQ"],
    category: "Backend",
    highlights: [
      "10,000+ record throughput per batch run",
      "Zero cascading failures via per-record savepoints",
      "Idempotent re-run with pre-loaded lookup tables",
      "Full per-batch CSV audit reporting",
    ],
    github: null,
    live: null,
    color: "from-violet-900/60 to-purple-900/60",
    accent: "#7c3aed",
  },
  {
    title: "AWS S3 Media Service Layer",
    description: "A production-grade, reusable Python mixin that abstracts all AWS S3 operations behind a resilient, self-healing interface. Designed for ERP eCommerce workflows where file integrity, zero-downtime SKU renames, and CDN cache coherence are critical.",
    technologies: ["Python", "boto3", "AWS S3", "CloudFront"],
    category: "Backend",
    highlights: [
      "2-phase upload/confirm for data integrity",
      "Zero-download server-side SKU rename copy",
      "Non-blocking CloudFront cache invalidation",
      "Live credential health checks with tuned retries",
    ],
    github: null,
    live: null,
    color: "from-indigo-900/60 to-violet-900/60",
    accent: "#4f46e5",
  },
  {
    title: "Odoo 19 eCommerce Module Suite",
    description: "A suite of 4 production Odoo 19 eCommerce modules — all published and live on the official Odoo App Store. Each module extends native eCommerce capabilities with multi-website visibility, dynamic stock display, advanced filters, and global search.",
    technologies: ["Python", "Odoo 19", "QWeb", "JavaScript", "PostgreSQL"],
    category: "Backend",
    highlights: [
      "4 modules published to Odoo App Store",
      "Multi-website product visibility controls",
      "Advanced filtering and global search",
      "Real-time stock display integration",
    ],
    github: null,
    live: "https://apps.odoo.com",
    color: "from-purple-900/60 to-fuchsia-900/60",
    accent: "#a855f7",
  },
];

export const education = [
  {
    institution: "S.A. Engineering College",
    university: "Anna University",
    degree: "Master of Computer Applications (MCA)",
    duration: "2023 – 2025",
    grade: "84%",
    location: "Chennai, India",
  },
  {
    institution: "Women's Christian College",
    university: "Madras University",
    degree: "Bachelor of Science in Computer Science",
    duration: "2020 – 2023",
    grade: "70%",
    location: "Chennai, India",
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "November 2024",
    validity: "Valid through 2027",
    color: "from-orange-900/40 to-amber-900/40",
    accent: "#f59e0b",
    icon: "☁️",
  },
  {
    name: "Software Project Management",
    issuer: "NPTEL",
    date: "2024",
    validity: null,
    color: "from-blue-900/40 to-indigo-900/40",
    accent: "#3b82f6",
    icon: "📋",
  },
  {
    name: "Cyber Security",
    issuer: "Cisco",
    date: "2024",
    validity: null,
    color: "from-teal-900/40 to-cyan-900/40",
    accent: "#06b6d4",
    icon: "🔐",
  },
  {
    name: "Pearson MePro Level 7",
    issuer: "Pearson",
    date: "2024",
    validity: null,
    color: "from-rose-900/40 to-pink-900/40",
    accent: "#ec4899",
    icon: "🏆",
  },
];
