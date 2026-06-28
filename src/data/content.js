// All resume copy lives here so the page stays a thin presentation layer.
// Source: Ridha Fathima — B.E. Computer Science (Data Science) & Engineering.

export const profile = {
  name: 'Ridha',
  fullName: 'Ridha Fathima',
  tagline: 'B.E. Computer Science (Data Science) & Engineering',
  location: 'Dammam, KSA (willing to relocate)',
  email: 'ridhafathima.wrk@gmail.com',
  phone: '+966 531369382',
  // "building things" counter — anchored to the start of her CS journey.
  buildingSince: '2023-08-01',
}

export const nav = [
  { label: 'RESUME', href: 'https://drive.google.com/file/d/1othWXDOim3gtU6M3nIOOdPATztspM2ri/view?usp=share_link', placeholder: false },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/ridha-fathima-7086142a1/', placeholder: false },
  { label: 'GITHUB', href: 'https://github.com/riDfathima', placeholder: false },
]

export const currently = [
  {
    sprite: 'grad',
    text: 'a B.E. Computer Science (Data Science) graduate from',
    link: { label: 'Sahyadri College of Engineering', href: 'https://www.sahyadri.edu.in/' },
    tail: ', Mangalore.',
  },
  {
    sprite: 'apps',
    text: 'was a Software Developer Intern from Dec 2025 - April 2026 at',
    link: { label: 'Novigo Solutions', href: 'https://www.novigosolutions.com' },
    tail: ', building PowerApps that clean & automate data.',
  },
]
export const previously = [
  {
    sprite: 'chart', // Fits a data visualization / analytics theme
    text: 'Built an interactive Social Media Insights Dashboard using Python and Pandas to parse multi-dimensional demographic and engagement metrics with instant non-code visual reporting.',
  },
  {
    sprite: 'cube', // Perfect for a 3D browser-native concept
    text: 'Architected Sequence Shapes 3D, a lightweight, browser-native Multi-Factor Authentication (MFA) concept featuring a dynamic spatial shape-sequencing captcha with zero backend dependencies.',
  },
  {
    sprite: 'gear', // Great for automation and structural data profiling
    text: 'Developed an Automated Data Quality Reporter in Python that dynamically ingests raw CSV files, profiles statistical anomalies, and generates automated HTML/Excel audit reports for QC.',
  },
];
export const projects = [
  {
    name: 'Social Media Insights Dashboard',
    blurb:
      'An interactive dashboard that analyses social media behaviour across age, gender, platform and engagement metrics. Upload your own CSV and get instant visualisations and a downloadable Excel report — no coding required.',
    tags: ['Python', 'pandas', 'Data Viz', 'Excel'],
    github: 'https://github.com/riDfathima/Social-Media-Insights-Dashboard',
    live: 'https://social-media-insights-dashboard.onrender.com/',
  },
  {
    name: 'Sequence Shapes 3D',
    blurb:
      'A lightweight, browser-native 3D Multi-Factor Authentication demo. Replaces static passwords with a dynamic 3D spatial shape-sequencing captcha — no dependencies, no backend.',
    tags: ['JavaScript', '3D', 'MFA', 'Browser-native'],
    github: 'https://github.com/riDfathima/seq-shapes-3d',
    live: 'https://frabjous-axolotl-a51f97.netlify.app/',
  },
  {
    name: 'Automated Data Quality Reporter',
    blurb:
      'A Python tool that ingests any CSV, profiles it (missing values, outliers, type issues), and outputs a formatted HTML/Excel audit report.',
    tags: ['Python', 'pandas', 'Data Viz', 'Excel'],
    github: 'https://github.com/riDfathima',
    live: '',
  },
]

export const skills = [
  {
    group: 'programming & web development',
    items: ['Python', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SASS', 'Git & GitHub'],
  },
  {
    group: 'data analytics & automation',
    items: [
      'Data Analysis & Modeling',
      'Data Visualization & Reporting',
      'Data Quality & Quality Control (QC)',
      'Process Automation',
      'Advanced Excel & Analytics',
    ],
  },
  {
    group: 'design & platforms',
    items: [
      'UI/UX Design Principles',
      'Responsive Web Design',
      'Microsoft PowerApps',
      'Microsoft 365 Ecosystem',
    ],
  },
  {
    group: 'core professional competencies',
    items: [
      'Technical Troubleshooting',
      'IT Support & System Optimization',
      'Technical Documentation',
    ],
  },

]

export const certifications = [
  { name: 'Web Development Fundamentals', org: 'Angela Yu · Udemy' },
  { name: 'Cloud Security on AWS', org: 'Coursera' },
  { name: 'Google UX Design', org: 'Google (Coursera)' },
  { name: 'Google Data Analytics', org: 'Google (Coursera)' }
]

export const footerLine = 'i just clean & automate data <3'
