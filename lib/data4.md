export const personalInfo = {
  name: 'Utsav Singh',
  title: 'Full-Stack Cloud & DevOps Engineer',
  headline: 'I build and operate the systems your product runs on.',
  bio: "I'm Utsav Singh — a full-stack cloud, backend, and DevOps engineer working in TypeScript and Node.js. I design resilient APIs, automate delivery pipelines, and keep distributed systems fast, observable, and cheap to run.",
  location: 'India · working remote across timezones',
  status: 'Available for new infrastructure work',
  email: 'utsav0111@gmail.com',
  resumeUrl: '/resume.pdf',
  githubUrl: 'https://github.com/githubutsav',
  linkedinUrl: 'https://linkedin.com',
  twitterUrl: 'https://x.com',
}

export const servicesData = [
  {
    iconName: 'Cloud',
    title: 'Cloud Architecture & IaC',
    description:
      'Designing immutable, scalable cloud infrastructure using Terraform, Kubernetes, and AWS/GCP with automated failover and zero-downtime deploys.',
    highlights: ['Terraform & Pulumi IaC', 'EKS / GKE Kubernetes Orchestration', 'Multi-Region High Availability'],
  },
  {
    iconName: 'Server',
    title: 'High-Performance Backends',
    description:
      'Building type-safe TypeScript and Go backend microservices, REST & gRPC APIs, and real-time event-driven streaming pipelines.',
    highlights: ['TypeScript, Node.js & Go', 'Kafka & Redis Event Streaming', 'PostgreSQL & ClickHouse Datastores'],
  },
  {
    iconName: 'Activity',
    title: 'Observability & SLO Management',
    description:
      'Implementing OpenTelemetry telemetry, Prometheus metrics, Grafana dashboards, and automated SLO alerting to keep systems healthy.',
    highlights: ['OpenTelemetry & Jaeger Tracing', 'Prometheus & Grafana Alerting', 'SLO / Error Budget Governance'],
  },
  {
    iconName: 'ShieldCheck',
    title: 'FinOps & Cost Optimization',
    description:
      'Analyzing cloud spend, automating right-sizing, implementing spot instance strategies, and reducing cloud infrastructure costs by 30-50%.',
    highlights: ['Cloud Spend Anomaly Detection', 'Spot Instance Autoscaling', 'Right-sizing & Serverless Architecture'],
  },
]

export const techStackData = [
  {
    iconName: 'Code2',
    title: 'Languages & Core',
    items: ['TypeScript', 'JavaScript', 'Node.js', 'Go', 'HTML/CSS', 'SQL'],
  },
  {
    iconName: 'Server',
    title: 'Frontend & Frameworks',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Zustand', 'Vite'],
  },
  {
    iconName: 'Server',
    title: 'Backend & APIs',
    items: ['Express', 'NestJS', 'Fastify', 'REST', 'gRPC', 'GraphQL'],
  },
  {
    iconName: 'Cloud',
    title: 'Cloud & Infra',
    items: ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'Vercel'],
  },
  {
    iconName: 'Database',
    title: 'Data & Messaging',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'DynamoDB', 'ClickHouse'],
  },
  {
    iconName: 'GitBranch',
    title: 'CI/CD & DevOps',
    items: ['GitHub Actions', 'Docker', 'ArgoCD', 'Prometheus', 'Grafana'],
  },
]

export const projectsData = [
  {
    name: 'Helios Deploy Platform',
    blurb:
      'An internal PaaS that gives product teams push-to-deploy previews on Kubernetes. Cut mean time-to-production from hours to under 6 minutes.',
    tags: ['TypeScript', 'Kubernetes', 'ArgoCD', 'Terraform'],
    metrics: [
      { k: 'deploy time', v: '-93%' },
      { k: 'teams onboarded', v: '18' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    name: 'Streamgate Event Pipeline',
    blurb:
      'A Kafka-backed ingestion service processing 2B+ events/day with exactly-once semantics, backpressure handling, and automatic schema evolution.',
    tags: ['Node.js', 'Kafka', 'ClickHouse', 'Go'],
    metrics: [
      { k: 'events / day', v: '2B+' },
      { k: 'p99 latency', v: '<40ms' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    name: 'Sentinel Observability Stack',
    blurb:
      'Company-wide telemetry layer built on OpenTelemetry with SLO dashboards and alerting-as-code. Reduced alert noise by 70% while catching more real incidents.',
    tags: ['OpenTelemetry', 'Prometheus', 'Grafana', 'AWS'],
    metrics: [
      { k: 'alert noise', v: '-70%' },
      { k: 'MTTR', v: '-45%' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
  {
    name: 'Costwatch FinOps Bot',
    blurb:
      'A serverless tool that tracks cloud spend per service, flags anomalies, and opens right-sizing PRs automatically. Saved six figures annually.',
    tags: ['TypeScript', 'AWS Lambda', 'Pulumi', 'GitHub Actions'],
    metrics: [
      { k: 'annual savings', v: '$220k' },
      { k: 'coverage', v: '100%' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: '#',
  },
]

export const achievementsData = [
  {
    iconName: 'Trophy',
    title: '1st Place — Annual Hackathon',
    issuer: 'Northwind Engineering',
    year: '2024',
    badge: 'Winner',
    description:
      'Designed and built an automated chaos engineering and canary verification framework that auto-rolls back faulty service releases.',
  },
  {
    iconName: 'ShieldCheck',
    title: 'AWS Certified Solutions Architect – Professional',
    issuer: 'Amazon Web Services',
    year: '2023',
    badge: 'Certification',
    description:
      'Validated expertise in advanced cloud architecture, multi-region failover design, security governance, and cloud cost optimization.',
  },
  {
    iconName: 'ShieldCheck',
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    year: '2022',
    badge: 'Certification',
    description:
      'Demonstrated hands-on skills in Kubernetes cluster orchestration, network policies, storage management, and troubleshooting.',
  },
  {
    iconName: 'Star',
    title: 'Open Source Contributor & Maintainer',
    issuer: 'CNCF & Community Tools',
    year: '2021 — Present',
    badge: '5k+ Stars',
    description:
      'Core contributor to popular open-source CLI utilities for Kubernetes debugging and Terraform state drift detection.',
  },
  {
    iconName: 'Zap',
    title: 'Engineering Excellence Award',
    issuer: 'Vela Systems',
    year: '2022',
    badge: 'Recognition',
    description:
      'Recognized for reducing infrastructure cloud expenditure by $220k/year through automated right-sizing and serverless scheduling.',
  },
]

export const experienceData = [
  {
    type: 'experience',
    period: '2023 — present',
    role: 'Staff Platform Engineer',
    company: 'Northwind Labs',
    points: [
      'Lead the internal developer platform used by 18 product teams.',
      'Drove adoption of IaC and GitOps, eliminating manual production changes.',
      'Mentor engineers on reliability, on-call practices, and cost awareness.',
    ],
  },
  {
    type: 'experience',
    period: '2020 — 2023',
    role: 'Senior Backend / DevOps Engineer',
    company: 'Vela Systems',
    points: [
      'Migrated a monolith to event-driven services on Kubernetes with zero-downtime cutover.',
      'Built the CI/CD backbone: automated tests, canary releases, and rollbacks.',
      'Owned observability, cutting incident resolution time nearly in half.',
    ],
  },
  {
    type: 'experience',
    period: '2018 — 2020',
    role: 'Full-Stack Engineer',
    company: 'Bright Harbor',
    points: [
      'Shipped TypeScript APIs and React frontends for a logistics product.',
      "Introduced containerization and the team's first automated deploys.",
    ],
  },
]

export const educationData = [
  {
    type: 'education',
    period: '2014 — 2018',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'University / Institute of Technology',
    points: [
      'Specialized in Distributed Systems, Data Structures & Algorithms, and Cloud Computing.',
      'Graduated with First Class Honors & published undergrad research project.',
    ],
  },
]

export const contactData = {
  title: "Let's build something resilient together.",
  description:
    "Whether you need to scale infrastructure, optimize cloud costs, modernize pipelines, or build a robust backend system — I'm open for consulting, architecture reviews, and contract roles.",
  footerCopyright: 'Utsav Singh. All rights reserved.',
  footerSubtext: 'Designed & built with Next.js, Tailwind CSS & TypeScript.',
}
