// ============================================================
//  KESHAV VIRAJBHAI KANSARA — Portfolio Data
// ============================================================

export const personalInfo = {
  name: "Keshav Kansara",
  initials: "KK",
  tagline: "Cybersecurity & Software Developer — Leipzig, Germany",
  description:
    "I'm pursuing my MSc. in Cyber Security at SRH University Leipzig. I have hands-on experience as a SOC Analyst and DevSecOps Engineer, and love building smart software and AI-powered applications. I'm actively looking for part-time opportunities to grow while managing my studies.",
  email: "keshavkansara123@gmail.com",
  phone: "+49 1778348039",
  location: "Leipzig, Germany",
  availability: "Open to part-time work",
  experience: "2+",
  projects: "10+",
  clients: "5+",
  resume: "/resume.pdf",
  photo: "/photo.jpg",   // replace with your actual photo in /public
};

export const roles = [
  "Cyber Security Student",
  "SOC Analyst",
  "DevSecOps Engineer",
  "Python Developer",
  "Software & AI Developer",
];

export const socialLinks = [
  {
    platform: "Email",
    handle: "keshavkansara123@gmail.com",
    url: "mailto:keshavkansara123@gmail.com",
    icon: "✉",
  },
  {
    platform: "Instagram",
    handle: "@_mythical.kev",
    url: "https://instagram.com/_mythical.kev",
    icon: "📸",
  },
  {
    platform: "GitHub",
    handle: "manches3003",
    url: "https://github.com/manches3003",
    icon: "⌨",
  },
  {
    platform: "LinkedIn",
    handle: "keshav kansara",
    url: "https://linkedin.com/in/keshav-kansara",
    icon: "💼",
  },
  {
    platform: "Phone",
    handle: "+49 1778348039",
    url: "tel: +491778348039",
    icon: "📞",
  },
];

export const languages = [
  { name: "Gujarati", level: "Mother tongue", dots: 5 },
  { name: "English",  level: "Proficient (C2)", dots: 5 },
  { name: "Hindi",    level: "Proficient (C1)", dots: 5 },
  { name: "German",   level: "Beginner (A2)",   dots: 2 },
];

export const experience = [
  {
    period: "Jun 2025 – Sep 2025",
    type: "Part-time",
    role: "Assistant Professor",
    company: "Kanan.co · Vadodara, India",
    description:
      "Worked as an Assistant Professor, supporting students and faculty in an academic setting.",
    bullets: [
      "Marked attendance and maintained student records regularly",
      "Delivered lectures independently during the main professor's absence",
      "Supported students with course content and academic queries",
    ],
    tech: ["Teaching", "Communication", "Microsoft Office", "Planning"],
  },
  {
    period: "Feb 2025 – Apr 2025",
    type: "Internship",
    role: "SOC Analyst Intern",
    company: "Allianz i · Vadodara, India",
    description:
      "Worked as a SOC Analyst Intern, monitoring security threats and responding to cybersecurity incidents using industry-standard tools.",
    bullets: [
      "Monitored and analyzed client device logs using Wazuh (open-source SIEM)",
      "Drafted detailed incident reports in IRIS for escalation to senior analysts",
      "Used Shuffle (SOAR platform) to automate threat detection and incident response workflows",
      "Identified and reported suspicious IPs; coordinated IP blocking with clients",
    ],
    tech: ["Wazuh", "IRIS", "Shuffle", "SIEM", "SOAR", "Incident Response"],
  },
];

export const projects = [
  {
    num: "01",
    featured: true,
    emoji: "🧠",
    title: "Smart Resume Analyzer",
    description:
      "An AI-powered resume analyzer using Natural Language Processing (NLP) to parse resumes, extract key skills and keywords, and match them against job descriptions to provide actionable feedback.",
    tech: ["Python", "NLP", "spaCy", "Django", "Machine Learning"],
    github: "https://github.com/keshavkansara",
    live: "#",
  },
  {
    num: "02",
    featured: false,
    emoji: "🛡️",
    title: "SOC Automation Dashboard",
    description:
      "A cybersecurity dashboard integrating Wazuh alerts with automated incident workflows via Shuffle, providing real-time visibility into security events.",
    tech: ["Wazuh", "Shuffle", "IRIS", "Python", "REST APIs"],
    github: "https://github.com/keshavkansara",
    live: "#",
  },
  {
    num: "03",
    featured: false,
    emoji: "📱",
    title: "Mobile Application",
    description:
      "Built mobile applications during Bachelor's studies to strengthen hands-on development skills, focusing on usability and clean UI.",
    tech: ["Java", "Android SDK", "Firebase", "XML"],
    github: "https://github.com/keshavkansara",
    live: "#",
  },
  {
    num: "04",
    featured: false,
    emoji: "🐍",
    title: "Python Automation Projects",
    description:
      "Collection of Python scripts and tools built during academic projects — including data analysis, automation, and backend utilities.",
    tech: ["Python", "Django", "Pandas", "Git", "Jira"],
    github: "https://github.com/keshavkansara",
    live: "#",
  },
  {
    num: "05",
    featured: false,
    emoji: "☕",
    title: "Java Backend Projects",
    description:
      "Developed Java-based backend applications and algorithms as part of Computer Science coursework at GSFC University.",
    tech: ["Java", "OOP", "Data Structures", "Algorithms"],
    github: "https://github.com/keshavkansara",
    live: "#",
  },
];

export const skills = {
  frontend: [
    { name: "Python",              pct: 88 },
    { name: "Java",                pct: 80 },
    { name: "C / C++",             pct: 72 },
    { name: "Django Framework",    pct: 75 },
    { name: "R Programming",       pct: 65 },
  ],
  backend: [
    { name: "Cyber Security",      pct: 85 },
    { name: "SOC / SIEM / SOAR",   pct: 82 },
    { name: "DevSecOps",           pct: 78 },
    { name: "Incident Response",   pct: 80 },
    { name: "Network Security",    pct: 74 },
  ],
  tools: [
    "Wazuh", "IRIS", "Shuffle", "Git", "Jira",
    "Microsoft Office", "Microsoft Excel", "Microsoft Word",
    "Django", "Python", "Java", "Linux",
    "Android Studio", "Firebase", "ICT Safety",
    "NLP / AI", "SIEM", "SOAR", "DevSecOps", "Incident Handling",
  ],
};

export const education = [
  {
    degree: "MSc. Cyber Security",
    school: "SRH University Leipzig · Germany",
    year: "Oct 2025 – Present · EQF Level 7",
    desc: "Currently pursuing a Master's degree in Cyber Security at SRH University Leipzig, building advanced expertise in threat analysis, network security, and secure software development.",
  },
  {
    degree: "B.Tech Computer Science & Engineering",
    school: "GSFC University · Vadodara, India",
    year: "Sep 2021 – May 2025 · CGPA: 7.4 / 10",
    desc: "Studied Computer Science Engineering with a focus on software development, programming (Python, Java, R, C++), mobile app development, and AI/ML projects.",
  },
  {
    degree: "Higher Secondary School (Science)",
    school: "Phoenix School · Vadodara, India",
    year: "Jun 2020 – Mar 2021 · Grade: 85%",
    desc: "Completed higher secondary education with Science stream, choosing Mathematics. Developed a strong foundation in analytical and logical thinking.",
  },
];

export const marqueeItems = [
  "Cyber Security", "Python", "SOC Analyst", "DevSecOps", "Wazuh",
  "Django", "Java", "SIEM", "SOAR", "NLP", "AI Development",
  "Incident Response", "Linux", "Git", "Leipzig · Germany",
];
