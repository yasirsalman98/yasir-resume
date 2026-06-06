export type SkillGroup = {
  title: string
  skills: string[]
}

export type Project = {
  id: string
  name: string
  tech: string[]
  summary: string
  details: {
    problem: string
    built: string
    result: string
  }
}

export type Stat = {
  title: string
  detail: string
}

export const contact = {
  name: 'Yasir Salman',
  title: 'Full-Stack Application Developer',
  location: 'Raleigh, NC',
  email: 'yasirsalman.cs@gmail.com',
  phone: '919-986-4805',
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const summary =
  'Full-stack application developer and Computer Science graduate building production mobile, web, backend, and internal tooling systems. Experienced with multi-tenant SaaS workflows, secure APIs, role-based access, database/storage architecture, deployment pipelines, automation tools, React Native/Expo, Next.js, TypeScript, Node.js/Express, Supabase/PostgreSQL, Python, SharePoint-connected workflows, and end-to-end debugging from prototype through release.'

export const stats: Stat[] = [
  {
    title: 'Full-Stack Development',
    detail: 'Mobile, web, backend, and database workflows.',
  },
  {
    title: 'Mobile + Web Apps',
    detail: 'React Native, Expo, Next.js, React, and Vite interfaces.',
  },
  {
    title: 'Secure APIs',
    detail: 'Node.js, Express, Supabase, PostgreSQL, RLS, and signed file access.',
  },
  {
    title: 'Internal Tooling',
    detail: 'Automation scripts, dashboards, exports, and business workflows.',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Java', 'C++'],
  },
  {
    title: 'Frontend / Mobile',
    skills: [
      'React Native',
      'Expo',
      'Next.js',
      'React',
      'Vite',
      'Tailwind CSS',
      'HTML',
      'CSS',
      'Ionic Web Components',
    ],
  },
  {
    title: 'Backend / Data',
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'Supabase',
      'PostgreSQL',
      'Authentication',
      'Row-Level Security',
      'Private storage',
      'Signed URLs',
    ],
  },
  {
    title: 'Automation / Tools',
    skills: [
      'Python scripting',
      'Excel/CSV automation',
      'SharePoint/OneDrive workflows',
      'Git',
      'GitHub',
      'Fork',
      'Render',
      'Netlify',
      'Expo EAS',
      'TestFlight',
      'VS Code',
      'GitLab',
      'Confluence',
    ],
  },
  {
    title: 'Core Strengths',
    skills: [
      'Full-stack SDLC',
      'Multi-tenant architecture',
      'RBAC',
      'API integration',
      'Admin dashboards',
      'Data validation',
      'Production debugging',
      'Deployment workflows',
      'Internal tooling',
    ],
  },
]

export const experience = {
  role: 'Full-Stack Application Developer',
  company: 'Exceed Safety',
  location: 'Raleigh, NC',
  dates: 'Oct 2025 - Present',
  highlights: [
    'Led full-stack development of ExCert, a multi-tenant certification and training platform with iOS/Android access and a browser-based portal for employees, supervisors, clients, and company owners.',
    'Built React Native/Expo mobile screens and Next.js/Tailwind web interfaces for people management, certification records, company/client settings, dashboards, document uploads, reporting, and administrative workflows.',
    'Designed and maintained Node.js/Express APIs backed by Supabase/PostgreSQL for authentication, password reset/OTP flows, role permissions, Supabase RLS, private storage buckets, signed file access, and secure backend validation.',
  ],
  details: [
    'Implemented multi-company data separation with company owner, supervisor, and employee access rules, onboarding, invitation flows, profile management, active/inactive people logic, and email synchronization.',
    'Built certification workflows for expiration tracking, certificate/document uploads, Excel/CSV import validation, notification/reminder workflows, searchable dashboards, and deployment through Render, Expo EAS, and TestFlight.',
    'Developed company/client configuration tools for branding, role-based settings, private profile/certification files, signed URL retrieval, and admin-level data management.',
    'Managed full development cycles across requirements gathering, architecture decisions, database/schema updates, API integration, testing, debugging, source control, deployment, and production support.',
  ],
}

export const projects: Project[] = [
  {
    id: 'excert',
    name: 'ExCert',
    tech: ['React Native', 'Expo', 'Next.js', 'Node.js', 'Express', 'Supabase', 'PostgreSQL'],
    summary:
      'Multi-tenant certification and training platform with mobile access, browser-based administration, secure APIs, role-based access, document uploads, and deployment workflows.',
    details: {
      problem:
        'Certification and training workflows needed secure mobile access, browser-based administration, document handling, and role-specific data access across multiple companies.',
      built:
        'Built mobile and web workflows for people management, certification records, dashboards, uploads, private storage, signed file access, role permissions, and backend validation.',
      result:
        'Created a production platform foundation for employees, supervisors, clients, and company owners to manage certification workflows across mobile and web.',
    },
  },
  {
    id: 'excourse',
    name: 'ExCourse / Attendance & Course Completion System',
    tech: ['React', 'Vite', 'Supabase', 'Netlify', 'SharePoint'],
    summary:
      'Course-completion system for student sign-in, signature capture, geolocation, timestamps, admin review, certificate/wallet-card downloads, exports, and SharePoint archiving.',
    details: {
      problem:
        'Course completion records needed a structured workflow for attendance capture, signatures, location metadata, review, downloads, exports, and archival.',
      built:
        'Built a web-based workflow for student sign-in, signature capture, geolocation, timestamps, admin review, certificate and wallet-card downloads, exports, and SharePoint archiving.',
      result:
        'Reduced manual course-completion handling by turning attendance, documentation, and archival steps into a repeatable internal system.',
    },
  },
  {
    id: 'osha-leads',
    name: 'OSHA Lead Automation Tool',
    tech: ['Python', 'Excel/CSV Automation'],
    summary:
      'Python automation workflow that turns repetitive OSHA/company research into filtered Excel lead sheets with qualified leads, exceptions, and records needing review.',
    details: {
      problem:
        'Manual OSHA and company research required repetitive filtering, cleanup, and review before lead records could be used for outreach preparation.',
      built:
        'Built a Python workflow that filters search results, separates exceptions and records needing review, and outputs structured Excel lead sheets.',
      result:
        'Converted repetitive research into a faster, reviewable lead-preparation workflow with organized qualified leads and exception handling.',
    },
  },
  {
    id: 'tabletop-tracker',
    name: 'TableTop Tracker',
    tech: ['Retool Team Application'],
    summary:
      'Retool team application for tabletop/card game tracking, player invitations, rounds, scores, and game history across structured match workflows.',
    details: {
      problem:
        'Game sessions needed a structured way to manage players, invitations, rounds, scoring, and repeat-session history.',
      built:
        'Built a Retool team application for tracking players, invitations, rounds, scores, match flow, and game history.',
      result:
        'Created a centralized workflow for organizing tabletop/card game sessions and preserving match history for future sessions.',
    },
  },
  {
    id: 'mealcraft',
    name: 'MealCraft / Meal Prep System',
    tech: ['JavaScript', 'Ionic Web Components', 'localStorage', 'GitLab', 'Confluence'],
    summary:
      'Meal-prep SPA for logging meals, tracking calories/macros, setting goals, creating meal plans, and viewing progress with localStorage persistence.',
    details: {
      problem:
        'Meal planning and progress tracking needed a simple client-side application for logging nutrition data, goals, plans, and progress views.',
      built:
        'Built a JavaScript SPA with Ionic Web Components and localStorage persistence for meals, calories, macros, goals, plans, and progress tracking.',
      result:
        'Delivered a self-contained meal-prep application with persistent client-side data and supporting project documentation.',
    },
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'East Carolina University',
  location: 'Greenville, NC',
  graduation: 'Graduated Dec 2025',
  coursework: [
    'Software Engineering I & II',
    'Database Management',
    'Data Structures',
    'Design & Analysis of Algorithms',
    'Operating Systems',
    'Computer Networks',
    'Computer Architecture',
    'Organization of Programming Languages',
    'Automata and Formal Languages',
    'Cloud Computing',
    'Ethics in Computing',
  ],
}
