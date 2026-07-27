// =============================================================================
// 🌐 GLOBAL SITE CONFIGURATION (ALL FUTURE EDITS GO HERE!)
// Edit your site title, domain, social links, SEO keywords, and Google verification here!
// =============================================================================
export const siteConfig = {
  name: 'Utsav Singh',
  title: 'Utsav Singh — Full-Stack • Cloud • AI Engineer',
  description:
    'Official portfolio of Utsav Singh — Full-Stack Cloud, AI, and DevOps Engineer. Technical Coordinator at GDG on Campus BBDITM specializing in TypeScript, Next.js, GCP, AWS, Docker, AI Agents, and Gemini API.',
  defaultDomain: process.env.NEXT_PUBLIC_SITE_URL || 'iamutsav.dev', // Reads from .env or falls back to iamutsav.dev
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION , // Read from .env.local or paste here
  email: 'utsav0111@gmail.com',
  phone: '+91 8853640387',
  whatsappUrl: 'https://wa.me/918853640387',
  social: {
    github: 'https://github.com/githubutsav',
    linkedin: 'https://linkedin.com/in/utsavsinghx',
    twitter: 'https://x.com/_utsavsingh',
    twitterHandle: '@_utsavsingh',
  },
  keywords: [
    'Utsav Singh',
    'Full Stack Developer',
    'Cloud Engineer',
    'DevOps Engineer',
    'AI Engineer',
    'Portfolio',
  ],
}

// =============================================================================
// 👤 PERSONAL INFORMATION & CONTACT DETAILS
// Edit your name, bio, email, WhatsApp, social links, and location here!
// =============================================================================
export const personalInfo = {
  name: 'Utsav Singh',
  title: 'Full-Stack Cloud & DevOps Engineer',
  headline: 'I build and operate the systems your product runs on.',
  bio: "Backend first, FullStack and DevOps engineer working in TypeScript and Node.js. I design resilient APIs, automate delivery pipelines, and keep distributed systems fast, observable, and cheap to run.",
  location: 'India · working remote across timezones',

  // 📞 Contact Details
  email: siteConfig.email,
  phone: siteConfig.phone,
  whatsappNumber: '918853640387',
  whatsappUrl: siteConfig.whatsappUrl,

  // 🔗 Links & Social Profiles
  resumeUrl: '/resume.pdf',
  githubUrl: siteConfig.social.github,
  linkedinUrl: siteConfig.social.linkedin,
  twitterUrl: siteConfig.social.twitter,
  github: siteConfig.social.github,
  linkedin: siteConfig.social.linkedin,
  twitter: siteConfig.social.twitter,
}

// =============================================================================
// 💻 TECH STACK & TOOLS
// Grouped into Categories: Languages, Frontend, Backend, Databases, Cloud & DevOps, Tools
// =============================================================================
export const techStackData = [
  {
    iconName: 'Code2',
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    iconName: 'Layout',
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Shadcn UI', 'Vite', 'Zustand'],
  },
  {
    iconName: 'Server',
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'JWT', 'WebSockets', 'Bun'],
  },
  {
    iconName: 'Database',
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Supabase'],
  },
  {
    iconName: 'Cloud',
    title: 'Cloud & DevOps',
    items: ['Docker', 'AWS', 'Google Cloud', 'Linux', 'GitHub Actions', 'Kubernetes'],
  },
  {
    iconName: 'Wrench',
    title: 'Tools',
    items: ['VS Code', 'Postman', 'Figma', 'GitHub', 'npm', 'pnpm', 'TurboRepo', 'Vercel', 'Git'],
  },
]

// =============================================================================
// 🚀 FEATURED PROJECTS
// Add your best engineering projects here. Each item powers both the homepage & modal preview!
// =============================================================================
export const projectsData = [
  {
    name: 'CleanSweepV1',
    blurb:
      'AI-powered Progressive Web App (PWA) for civic waste management, enabling citizens to report garbage, earn rewards, and help municipalities build cleaner communities.',

    longDescription:
      'CleanSweep is an end-to-end AI-powered Progressive Web App built for the AI for Social Impact theme. It transforms traditional civic waste reporting into a smart, community-driven platform where citizens can report illegal dumping, verify waste using Google Gemini, explore reports on an interactive map, participate in community discussions, earn rewards through gamification, and assist municipalities in managing cleaner cities. Built as an installable PWA, CleanSweep delivers a fast, app-like experience across desktop and mobile devices.',

    features: [
      'Installable Progressive Web App (PWA) with offline-ready app-like experience',
      'Google Gemini-powered waste image verification and intelligent categorization',
      'Interactive real-time map for reporting and tracking illegal garbage dumping',
      'Community feed with discussions, likes, comments, and collaborative reporting',
      'Gamified points, badges, leaderboard, and reward marketplace to encourage civic participation',
      'Municipal dashboard for managing reports, monitoring dustbins, and coordinating clean-up operations',
    ],

    architecture:
      'Client (React 19 + Installable PWA) ➔ Google Gemini API (AI Verification) ➔ Supabase (PostgreSQL & Storage) ➔ Leaflet.js (GIS Mapping Engine)',

    imageUrl:
      '/projects/cleensweepv1.webp',

    tags: [
      'React',
      'PWA',
      'Gemini AI',
      'Supabase',
      'Leaflet',
      'PostgreSQL',
      'Zustand',
    ],

    metrics: [
      { k: 'Category', v: 'AI for Social Impact' },
      { k: 'Platform', v: 'Installable PWA' },
    ],

    githubUrl: 'https://github.com/githubutsav/CleanSweepV1',
    liveUrl: 'https://cleansweepv1.vercel.app',
  },

  {
    name: 'Self-Hosted Homelab Infrastructure',
    blurb:
      'A production-inspired self-hosted homelab for learning cloud infrastructure, DevOps, networking, containers, and Kubernetes.',

    longDescription:
      'Designed and built a personal homelab running on a dedicated machine to simulate real-world infrastructure. The environment hosts containerized services, databases, reverse proxies, monitoring, remote access, and automation using Docker, Linux, and Kubernetes. It serves as a playground for experimenting with infrastructure, deployment strategies, networking, observability, and self-hosted applications.',

    features: [
      'Docker & Docker Compose orchestration for multiple self-hosted services',
      'Portainer dashboard for container lifecycle management',
      'Kubernetes (k3s) cluster experimentation and workload deployment',
      'Self-hosted PostgreSQL, Redis, MongoDB, and supporting infrastructure',
      'Remote administration using Tailscale and SSH',
      'Linux server automation with Bash scripts and systemd services',
      'Reverse proxy configuration and internal networking',
      'Monitoring, logging, backups, and infrastructure experimentation',
    ],

    architecture:
      'Linux Server (Ubuntu) ➔ Tailscale Secure Tunneling ➔ Nginx Reverse Proxy ➔ k3s / Docker Engine (PostgreSQL, Redis, MongoDB, Portainer)',

    imageUrl:
      '/projects/homelabarc.webp',

    tags: [
      'Linux',
      'Docker',
      'Kubernetes',
      'Portainer',
      'PostgreSQL',
      'Redis',
      'MongoDB',
      'Tailscale',
      'DevOps',
      'Homelab',
    ],

    metrics: [
      { k: 'Category', v: 'Infrastructure' },
      { k: 'Status', v: 'Active Development' },
    ],

    githubUrl: 'https://github.com/githubutsav/homelabs',
    liveUrl: '#',
  }, {
    name: 'NoteQuicky',
    blurb: 'A modern, high-performance Markdown note-taking & knowledge management workspace with nested folders, PDF viewing, and text highlighting.',
    longDescription:
      'NoteQuicky is a full-featured markdown workspace designed for seamless note-taking, nested subfolder organization, PDF document viewing, text highlighting, and quick note scratchpads. Built with Next.js 16 App Router, Prisma ORM, PostgreSQL, and NextAuth.',
    features: [
      'Rich Markdown Editor with live rendered preview & full keyboard shortcuts (⌘B, ⌘I, ⌘E, ⌘1-3)',
      'IDE-style nested folder tree with fast inline subfolder and note creation',
      'Built-in PDF document viewer with zoom, page navigation, and full-screen controls',
      'Web highlighter tool for annotating text snippets and saving persistent highlights',
      'Quick Notes scratchpad and dedicated Archived Notes management view',
    ],
    architecture: 'Next.js 16 (App Router + Server Actions) ➔ NextAuth.js ➔ Prisma ORM ➔ PostgreSQL Database ➔ Cloudinary Media Storage',
    imageUrl: '/projects/quicky.webp',
    tags: ['Next.js 16', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'NextAuth'],
    metrics: [
      { k: 'Category', v: 'Productivity' },
      { k: 'Status', v: 'Completed' },
    ],
    githubUrl: 'https://github.com/githubutsav/notequicky',
    liveUrl: 'https://notequicky.vercel.app',
  },

  {
    name: 'Collaborative Study Platform',
    blurb: 'A collaborative productivity platform featuring real-time chat, shared whiteboards, code editor, notes, Pomodoro timer, flashcards, and task management.',
    longDescription:
      'A comprehensive virtual study room environment where remote students and tech teams collaborate in real-time. Features synchronized multiplayer whiteboards, pair-programming code editor, synchronized audio timers, and markdown notes.',
    features: [
      'Multiplayer collaborative canvas powered by WebSockets',
      'Real-time code editor with syntax highlighting and live execution previews',
      'Synchronized group Pomodoro timer and room chat',
      'Kanban task board and collaborative flashcard decks',
    ],
    architecture: 'Next.js 16 Frontend ➔ Socket.io WebSockets Server (Bi-directional state sync) ➔ Prisma ORM ➔ PostgreSQL Database ➔ Zustand Store',
    imageUrl: '/projects/quicky.webp',
    tags: ['Next.js', 'WebSockets', 'TypeScript', 'PostgreSQL'],
    metrics: [
      { k: 'Status', v: 'In Progress' },
      { k: 'Focus', v: 'Realtime' },
    ],
    githubUrl: 'https://github.com/githubutsav',
    liveUrl: '#',
  }, {
    name: 'Bazaar Brain',
    blurb: 'AI-powered product recommendation platform built during the Agentic Premier League Hackathon. Designed to help users discover products through intelligent recommendations.',
    longDescription:
      'Built during the 2026 Agentic Premier League Hackathon, Bazaar Brain uses AI agents to parse natural language buyer intent, analyze product reviews across marketplaces, and synthesize tailored purchasing recommendations with confidence scores.',
    features: [
      'Multi-agent conversational product discovery interface',
      'Sentiment analysis across marketplace product reviews',
      'Real-time price trend tracking and feature comparison tables',
      'Awarded 2nd Place at Agentic Premier League Hackathon 2026',
    ],
    architecture: 'React 19 Client ➔ Express REST API Gateway ➔ LangChain AI Agent (Gemini LLM) ➔ Supabase Vector Store & Embeddings',
    imageUrl: '/projects/bazaar.webp',
    tags: ['React', 'Node.js', 'AI Agents', 'Supabase'],
    metrics: [
      { k: 'Achievement', v: '2nd Place' },
      { k: 'Hackathon', v: 'APL 2026' },
    ],
    githubUrl: 'https://github.com/githubutsav/stall-brain',
    liveUrl: 'https://stall-brain.vercel.app',
  },
  /*
  {
    name: 'Cloud Watchdog Monitoring',
    blurb: 'Lightweight cloud infrastructure alerting tool built with Prometheus metrics, Grafana dashboards, and automated Telegram bot alerts.',
    longDescription:
      'An open-source observability agent designed for single-node VPS servers and small cloud clusters. It monitors CPU spikes, memory leaks, disk fill rates, and network traffic, automatically dispatching alert notifications to Telegram channels when thresholds are breached.',
    features: [
      'Lightweight system metrics exporter with sub-5MB memory footprint',
      'Instant alert notifications dispatched via Telegram Bot API',
      'Pre-packaged Grafana dashboard JSON configurations',
      'Containerized deployment via single-command Docker Compose',
    ],
    architecture: 'Go system agent, Prometheus metrics collector, Grafana dashboard engine, and Telegram Bot Webhooks.',
    imageUrl: '/projects/homelabarc.webp',
    tags: ['Go', 'Docker', 'Prometheus', 'Grafana'],
    metrics: [
      { k: 'Category', v: 'DevOps' },
      { k: 'Status', v: 'Completed' },
    ],
    githubUrl: 'https://github.com/githubutsav',
    liveUrl: '#',
  },*/
]

// =============================================================================
// 🏆 ACHIEVEMENTS & CERTIFICATIONS
// Hackathon wins, mentorship awards, credentials, and open-source milestones
// =============================================================================
export interface AchievementItem {
  iconName: string
  category: string
  badge: string
  title: string
  issuer: string
  year: string
  description: string
  linkUrl?: string
  imageUrl?: string
}

export const achievementsData: AchievementItem[] = [
  {
    iconName: 'Users',
    category: 'Mentorship',
    badge: 'Cloud Mentor',
    title: 'Google Cloud Study Jam Sessions',
    issuer: 'GDG on Campus BBDITM',
    year: '2025',
    description: 'Mentoring 200+ students on hands-on Google Cloud infrastructure labs, Docker containers, and cloud architecture.',
    imageUrl: '',
    linkUrl: 'https://linkedin.com/in/utsavsinghx',
  }, {
    iconName: 'Trophy',
    category: 'Hackathon',
    badge: '1st Runner-Up',
    title: 'Agentic Premier League Hackathon',
    issuer: 'GDG Lucknow',
    year: '2026',
    description:
      '1st Runner-Up with Team Code Oxide for building Bazaar Brain, an AI-powered product recommendation platform that analyzes buyer intent and delivers personalized recommendations.',
    imageUrl: '/achievements/codeapl.png',
    linkUrl: 'https://www.linkedin.com/posts/utsavsinghx_hackathon-agenticai-artificialintelligence-share-7468657785979756544-nJYN',
  },
  {
    iconName: 'Trophy',
    category: 'Hackathon',
    badge: '1st National Runner-Up',
    title: 'CodeBlitz National Hackathon',
    issuer: 'OSEN',
    year: '2026',
    description:
      '1st National Runner-Up with My Team for building Intervoo, an AI-powered interview preparation platform featuring resume analysis, job description–based interview simulations, and personalized mock interviews.',
    linkUrl: 'https://www.linkedin.com/posts/utsavsinghx_hackathonexperience-teamwork-learningbydoing-ugcPost-7453904846883192832-AL64',
    imageUrl: '/achievements/winner.png',
  },
  {
    iconName: 'GraduationCap',
    category: 'Certification',
    badge: 'Stanford & DeepLearning.AI',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Stanford Online × DeepLearning.AI',
    year: '2025',
    description:
      'Completed Andrew Ng’s foundational machine learning course, covering regression, classification, supervised learning algorithms, model evaluation, and practical ML workflows.',
    linkUrl: 'https://coursera.org/share/deda9449803377280a947b346e17e8f9',
    imageUrl: '/achievements/ml.png'
  },
  {
    iconName: 'BadgeCheck',
    category: 'Certification',
    badge: 'Student Expert',
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    year: '2024',
    description:
      'Earned the Postman API Fundamentals Student Expert certification, demonstrating proficiency in REST APIs, API testing, request scripting, authentication, and integrating APIs into applications. Recognized by Postman with exclusive community swag.',
    linkUrl: 'https://badges.parchment.com/public/assertions/pJ4QI6ewTBmU8oi6-YUQCQ?identity__email=utsav0111@gmail.com',
    imageUrl: '/achievements/postman.png',
  },
]

// =============================================================================
// 💼 WORK EXPERIENCE
// Professional software engineering & freelance work history
// =============================================================================
export const workExperienceData = [
  {
    type: 'work',
    period: 'Aug 2025 - Sep 2025',
    role: 'Rapid Prototyping & Design Intern',
    company: 'Kalam Pragati (ERA Foundation × Centre for Advanced Studies, AKTU)',
    location: 'Lucknow, India',
    points: [
      'Strengthened expertise in rapid prototyping, design thinking, IoT systems, and translating product ideas into functional solutions.',
      'Led product development of CleanSweep—an AI-powered IoT smart waste management platform integrating React, Supabase, Arduino, and embedded sensors.',
      'Owned product ideation, UI/UX prototyping in Figma, full-stack development, and hardware integration for a production-ready prototype.',
      'Worked across design thinking, embedded systems, cloud technologies, and real-time data processing to address urban sustainability challenges.',
      'Presented the project during Demo Day, where it was recognized by Dr. K. V. Raju (Member, Economic Advisory Council to the Prime Minister of India) for its innovative approach to smart waste management.',
    ],
  }
]

// =============================================================================
// 👥 POSITIONS OF RESPONSIBILITY
// Leadership roles, campus mentoring, community leads & technical coordination
// =============================================================================
export const responsibilityData = [
 {
  type: 'responsibility',
  period: 'Dec 2024 – Present',
  role: 'Technical Coordinator & Cloud Mentor',
  company: 'Google Developer Groups on Campus (BBDITM)',
  points: [
    'Progressed from Volunteer to Technical Coordinator & Cloud Mentor through consistent technical contributions and community leadership.',
    'Mentored 200+ students through Google Cloud Study Jam sessions, enabling 70+ participants to each earn 19+ Google Cloud Skill Badges.',
    'Led the planning and execution of 5+ flagship developer events in collaboration with GDG Lucknow, CNCG Lucknow, and Hack2Skill.',
    'Delivered hands-on sessions on Google Cloud Platform, cloud architecture, scalability, and deployment fundamentals, introducing students to practical cloud engineering concepts.',
    'Served as a judge for TechSprint WinterHack, evaluating projects based on technical implementation, innovation, and overall solution quality.',
    'Coordinated outreach, speaker logistics, and event operations, helping deliver developer events for 100+ participants.',
  ],
},
{
  type: 'responsibility',
  period: 'Oct 2025 – Present',
  role: 'Cloud Mentor & UI/UX Mentor',
  company: 'Binary Brains Club (BBDITM)',
  points: [
    'Mentored students on cloud computing fundamentals, AWS, scalability, and modern cloud architecture.',
    'Conducted an introductory AWS session explaining the limitations of on-premises infrastructure, scalability challenges, high availability, and cloud-native architectures.',
    'Guided students in UI/UX fundamentals, product thinking, and design best practices during technical workshops and collaborative sessions.',
  ],
},
]

export const experienceData = [...workExperienceData, ...responsibilityData]

// =============================================================================
// 🎓 EDUCATION
// Degrees, universities, dates & academic highlights
// =============================================================================
export const educationData = [
  {
    type: 'education',
    period: '2023 - 2027',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    institution: 'Babu Banarasi Das Institute of Technology & Management (BBDITM),Lucknow',
    points: [
      'Focused on Backend Engineering, Cloud Computing, and Distributed Systems.',
      'Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering',//later add ai and ml if i want
    ],
  },
]

// =============================================================================
// 📬 CONTACT SECTION & FOOTER TEXT
// Customize the contact form title, description, and copyright notice
// =============================================================================
export const contactData = {
  title: "Let's build something amazing together.",
  description: "I'm currently looking for internship, freelance, and full-time opportunities in Backend Engineering, Cloud, DevOps, and Full-Stack Development. Whether it's an exciting startup, open-source project, or innovative product, I'd love to collaborate and contribute.",
  footerCopyright: 'Utsav Singh. All rights reserved.',
  footerSubtext: 'Designed & built with Next.js, TypeScript, Tailwind CSS, and ❤️.',
}
// =============================================================================
// 📸 EVENT & HACKATHON GALLERY ALBUMS
// Note: Each album can independently customize its display approach!
// Available per-album options:
//  - layoutType?: 'bento' | 'grid' | 'masonry'  (default: 'bento' for >= 4 photos)
//  - imageFit?: 'cover' | 'contain'             (default: 'cover')
//  - gridCols?: 2 | 3 | 4                       (default: 3 or 4)
//  - images?: Array<string | { src: string; fit?: 'cover' | 'contain'; span?: string }>
// =============================================================================
export const galleryData = [
  {
    id: '0',
    title: 'Agentic Premier League Hackathon',
    category: 'Hackathon',
    date: '2026',
    location: 'GDG Lucknow',
    badge: '1st Runner-Up',
    cardType: 'tall',
    description: 'Secured 2nd place with Team Code Oxide building Bazaar Brain, an AI recommendation platform.',
    imageUrl: '/events/agentic-hackathon-tall/1.webp',
    layoutType: 'bento',
    imageFit: 'cover',
    images: [
      {
        src: '/events/agentic-hackathon-tall/4.webp',
        span: 'col-span-1 row-span-2 h-full w-full',
        fit: 'cover',
      },
      '/events/agentic-hackathon-tall/3.webp',
      '/events/agentic-hackathon-tall/7.webp',
      '/events/agentic-hackathon-tall/5.webp',
      '/events/agentic-hackathon-tall/6.webp',
    ],
  }, {
    id: '1',
    title: 'CodeBlitz National Hackathon',
    category: 'Hackathon',
    date: '2026',
    location: 'OSEN',
    badge: '1st Runner-Up',
    cardType: 'tall',
    imageUrl: '/events/codeblitz-tall/6.webp',
    description: 'Built Intervoo, an AI interview preparation platform, and secured 2nd Place at the CodeBlitz National Hackathon 2026.',
    layoutType: 'bento',
    imageFit: 'cover',
    images: [
      '/events/codeblitz-tall/1.webp',
      '/events/codeblitz-tall/2.webp',
      '/events/codeblitz-tall/5.webp',
      '/events/codeblitz-tall/4.webp',
      '/events/codeblitz-tall/9.webp',
    ],
    videoUrl: '/events/codeblitz-tall/8.mp4',
  },
  {
    id: '2',
    title: 'Google Cloud Study Jam Sessions',
    category: 'Mentorship',
    date: '2025',
    location: 'GDG on Campus BBDITM',
    badge: 'Cloud Mentor',
    cardType: 'tall',
    description:'Mentored 200+ students through hands-on Google Cloud Study Jam sessions on GCP, cloud architecture, and deployment, enabling 70+ participants to each earn 19+ Google Cloud Skill Badges.',
    imageUrl: '/events/cloud-study-jams-tall/1.webp',
    layoutType: 'bento',
    imageFit: 'cover',
    images: [
      '/events/cloud-study-jams-tall/1.webp',
      '/events/cloud-study-jams-tall/photo_1.webp',
      '/events/cloud-study-jams-tall/2.webp',
      '/events/cloud-study-jams-tall/3.webp',
      '/events/cloud-study-jams-tall/4.webp',

    ],
  },
  {
    id: '3',
    title: 'Build With AI Workshop',
    category: 'Technical Coordinator',
    date: '2026',
    location: 'GDG on Campus BBDITM',
    badge: 'AI Workshop',
    cardType: 'wide',
    description: 'Coordinated the Build with AI workshop, hosting Google Developer Experts for hands-on sessions on Firebase, AI-powered application development, authentication, payment integrations, and rapid product development under the Google Solution Challenge initiative.',
    imageUrl: '/events/buildwithai/photo_3.webp',
    videoUrl: '/events/buildwithai/video_1.mp4',
    layoutType: 'bento',
    imageFit: 'cover',
    images: [
      '/events/buildwithai/photo_1.webp',
      '/events/buildwithai/photo_3.webp',
      '/events/buildwithai/photo_2.webp',
    ],
  },
  {
    id: '4',
    title: 'CNCF Community Meetup',
    category: 'Technical coordinator and cloud mentor',
    date: '2026',
    location: 'GDG on Campus BBDITM × CNCG Lucknow',
    badge: 'Cloud Native',
    cardType: 'wide',
    description: 'Cloud Native Computing Foundation meetup focusing on Kubernetes, Docker containers, and microservices.',
    imageUrl: '/events/cncf-meetup/photo_4.webp',
    layoutType: 'grid',
    imageFit: 'cover',
    images: [
      '/events/cncf-meetup/photo_1.webp',
      '/events/cncf-meetup/photo_2.webp',
      '/events/cncf-meetup/photo_3.webp',
      '/events/cncf-meetup/photo_5.webp',
      '/events/cncf-meetup/photo_7.webp',
      '/events/cncf-meetup/photo_8.webp',
    ],
  },
  {
  id: '5',
  title: 'GenAI Hackathon',
  category: 'Volunteer & Technical Mentor',
  date: '2025',
  location: 'GDG on Campus BBDITM × GDG Lucknow',
  badge: 'Hackathon',
  cardType: 'wide',
  description:
    'Volunteered as a Technical Mentor at the GenAI Hackathon, supporting 100+ participating teams from 7 colleges by guiding ideation, refining problem statements, and mentoring teams throughout the hackathon.',
  imageUrl: '/events/volenteeratgdglucknowhack/photo_2.webp',
  videoUrl: '/events/volenteeratgdglucknowhack/video_1.mp4',
  layoutType: 'bento',
  imageFit: 'cover',
  images: [
    '/events/volenteeratgdglucknowhack/photo_3.webp',
    '/events/volenteeratgdglucknowhack/photo_4.webp',
    '/events/volenteeratgdglucknowhack/photo_5.webp',
    '/events/volenteeratgdglucknowhack/1.webp',
    '/events/volenteeratgdglucknowhack/photo_6.webp',
  ],
},
  {
  id: '6',
  title: 'Kalam Pragati',
  category: 'Rapid Prototyping & Design Thinking Internship',
  date: '2025',
  location: 'AKTU Campus',
  badge: 'Intern',
  cardType: 'tall',
  description:
    'Completed a Rapid Prototyping & Design Thinking Internship, building real-world product development skills through user research, ideation, CAD, embedded systems, and rapid prototyping while developing the IoT-based CleenSweepV1 project.',
  imageUrl: '/events/kalampragati-tall/2.webp',
  layoutType: 'grid',
  imageFit: 'cover',
  images: [
    '/events/kalampragati-tall/photo_1.webp',
    '/events/kalampragati-tall/photo_2.webp',
    '/events/kalampragati-tall/photo_3.webp',
    '/events/kalampragati-tall/photo_4.webp',
    '/events/kalampragati-tall/photo_7.webp',
    '/events/kalampragati-tall/photo_8.webp',
    '/events/kalampragati-tall/11.webp',
    {
      src: '/events/kalampragati-tall/12.webp',
      imgClassName: 'object-cover object-top',
    },
  ],
},

  {
  id: '7',
  title: 'DevFest 2024 Lucknow',
  category: 'Tech Conference',
  date: '2024',
  location: 'GDG Lucknow',
  badge: 'Community Participant',
  cardType: 'wide',
  description:
  'Participated in GDG DevFest 2024 Lucknow, attending expert-led sessions on AI, cloud computing, and modern web development while connecting with developers, Google Developer Experts, and industry professionals.',
  imageUrl: '/events/devfest2024/photo_4.webp',
  layoutType: 'bento',
  imageFit: 'cover',
  images: [
    '/events/devfest2024/photo_4.webp',
    '/events/devfest2024/photo_1.webp',
    '/events/devfest2024/1.webp',
    '/events/devfest2024/photo_3.webp',
    '/events/devfest2024/photo_5.webp',
  ],
}, {
  id: '8',
  title: 'AWS & Scalability Session',
  category: 'Technical Speaker',
  date: '2026',
  location: 'Binary Brains Club, BBDITM',
  badge: 'AWS & Scalability',
  cardType: 'tall',
  description:
    'Delivered an introductory AWS session covering the limitations of on-premises infrastructure, scalability challenges, high availability, and core AWS services, helping students understand cloud-native architectures and real-world infrastructure design.',
  imageUrl: '/events/binarybrainscloud-tall/photo_1.webp',
  videoUrl: '/events/binarybrainscloud-tall/video_2.mp4',
  layoutType: 'bento',
  imageFit: 'cover',
  images: [
    '/events/binarybrainscloud-tall/photo_1.webp',
    '/events/binarybrainscloud-tall/video_1.mp4',
    '/events/binarybrainscloud-tall/video_3.mp4',
  ],
},
  {
  id: '9',
  title: 'Product Builders Day',
  category: 'Product & AI',
  date: '2026',
  location: 'Integral University × GDG Lucknow',
  badge: 'Founder Mindset',
  cardType: 'wide',
  description:
    'Participated in GDG Lucknow’s Product Builders Day, learning from founders and industry experts about product strategy, founder mindset, AI-powered development, cloud technologies, modern payment systems, and building strong professional networks.',
  imageUrl: '/events/productday/photo_1.webp',
  layoutType: 'grid',
  imageFit: 'cover',
  images: [
    '/events/productday/photo_1.webp',
    '/events/productday/photo_2.webp',
    '/events/productday/photo_3.webp',
    '/events/productday/photo_4.webp',
    '/events/productday/photo_5.webp',
    '/events/productday/photo_6.webp',
  ],
},
  {
    id: '10',
    title: 'SnapAR',
    category: 'Technical Coordinator',
    date: '2026',
    location: 'GDG on Campus BBDITM',
    badge: 'AR Development',
    cardType: 'wide',
    description: 'Creating interactive 3D face lenses and augmented reality experiences using Lens Studio.',
    imageUrl: '/events/snapar/photo_3.webp',
    layoutType: 'grid',
    imageFit: 'cover',
    images: [
      '/events/snapar/photo_3.webp',
      '/events/snapar/photo_1.webp',
      '/events/snapar/photo_4.webp',
      '/events/snapar/photo_6.webp',
      '/events/snapar/photo_7.webp',
      '/events/snapar/photo_8.webp',
    ],
  },
  {
    id: '11',
    title: 'Swags & Moments',
    category: 'Swag & Few Random Moments',
    location: 'During Collage',
    badge: 'Event Moments',
    cardType: 'tall',
    description: 'Some of my Swags, some random moments, and some team moments from hackathons and meetups.Also i will include images of every event and achievemts here and orgainse later with proper time.',
    imageUrl: '/events/random/photo_1.webp',
    videoUrl: '/events/random/video_1.mp4',
    layoutType: 'grid',
    imageFit: 'cover',
    images: [
      '/events/random/photo_13.webp',
      '/events/random/photo_14.webp',
      '/events/random/photo_5.webp',
      '/events/random/photo_6.webp',
      '/events/random/photo_4.webp',
      '/events/random/photo_2.webp',
      '/events/random/photo_3.webp',
      '/events/random/photo_8.webp',
      '/events/random/photo_9.webp',
      '/events/random/photo_10.webp',
      '/events/random/photo_11.webp',
      '/events/random/photo_16.webp',
    ],
  },
]