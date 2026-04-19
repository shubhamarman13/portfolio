// ===== Portfolio Data Configuration =====
// Complete LinkedIn profile data for Shubham Arman
// Last updated: April 2026

export const portfolioData = {
  // Personal Info
  name: "Shubham Arman",
  title: "Associate Software Engineer at Accenture",
  tagline: "Founder of The Upcoming Programmer | Former President – Bodh Script Coding Club (LPU) | C++ & Python Developer",
  email: "shubhamarman13@gmail.com",
  phone: "+91 98765 43210",
  location: "Phagwara, Punjab / Gurugram, India",
  resumeLink: import.meta.env.BASE_URL + "Shubham_Arman_Resume.docx",
  blogLink: "https://theupcomingprogrammer.com/",
  connections: "500+",

  // Social Links
  socials: {
    github: "https://github.com/shubhamarman13",
    linkedin: "https://www.linkedin.com/in/shubhamarman/",
    youtube: "https://www.youtube.com/@THEUPCOMINGPROGRAMMER",
    instagram: "https://www.instagram.com/shubhamarman13/",
  },

  // About Section
  about: {
    description: `I'm an Associate Software Engineer at Accenture, contributing to the design, development and 
    secure deployment of enterprise applications using Python, Java, cloud and database technologies. As the 
    Founder of "The Upcoming Programmer" — a YouTube channel with 573+ subscribers, 80+ videos and 113,000+ 
    views — I help students transition from college to corporate careers.

    Former President of Bodh Script Coding Club at LPU, I've organized workshops, hackathons, and mentored 
    100+ students. With hands-on experience in cybersecurity, data science, DevSecOps, and full-stack 
    development, I bring a unique blend of technical depth and leadership to everything I do.`,
    highlights: [
      "9+ months at Accenture",
      "573+ YouTube subscribers",
      "80+ tutorial videos",
      "113,000+ total views",
    ],
  },

  // Skills (comprehensive from LinkedIn)
  skills: [
    { name: "Python", level: 90, category: "backend" },
    { name: "C++", level: 88, category: "backend" },
    { name: "Java", level: 75, category: "backend" },
    { name: "C", level: 82, category: "backend" },
    { name: "HTML5 & CSS3", level: 92, category: "frontend" },
    { name: "React.js", level: 65, category: "frontend" },
    { name: "JavaScript", level: 72, category: "frontend" },
    { name: "Bootstrap", level: 78, category: "frontend" },
    { name: "WordPress", level: 70, category: "frontend" },
    { name: "Tkinter (GUI)", level: 72, category: "frontend" },
    { name: "Java Swing", level: 60, category: "frontend" },
    { name: "Cybersecurity (OWASP)", level: 72, category: "security" },
    { name: "Cloud Security (AWS)", level: 68, category: "security" },
    { name: "NIST Framework", level: 65, category: "security" },
    { name: "SIEM & Firewalls", level: 62, category: "security" },
    { name: "DevSecOps", level: 65, category: "security" },
    { name: "MySQL / DB Security", level: 75, category: "tools" },
    { name: "Data Science & ML", level: 72, category: "tools" },
    { name: "Linux Administration", level: 65, category: "tools" },
    { name: "Microsoft Power BI", level: 60, category: "tools" },
    { name: "NumPy & Pandas", level: 70, category: "tools" },
    { name: "Git & GitHub", level: 80, category: "tools" },
    { name: "Agile & ITIL 4", level: 65, category: "tools" },
    { name: "Generative AI", level: 55, category: "tools" },
  ],

  // Skill Categories
  skillCategories: [
    { key: "all", label: "All" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "security", label: "Security" },
    { key: "tools", label: "Tools & Data" },
  ],

  // Experience
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Accenture",
      type: "Trainee",
      duration: "August 2025 – Present · 9 mos",
      location: "Gurugram, Haryana, India · Remote",
      description: [
        "Contributing to the design, development and secure deployment of enterprise applications using Python, Java, cloud and database technologies",
        "Supporting full SDLC — coding, testing, debugging, documentation and integration — following Agile and DevSecOps practices",
        "Completed extensive internal learning in Security & Cybersecurity Fundamentals, NIST Framework, OWASP Top 10, SIEM, Cloud Security (AWS), Database Security (MySQL)",
        "Hands-on with identity lifecycle management, vulnerability scanning, ITIL 4 processes and Generative AI concepts",
      ],
    },
    {
      role: "Founder & Content Creator",
      company: "The Upcoming Programmer (YouTube)",
      type: "Self-employed",
      duration: "July 2023 – Present · 2 yrs 10 mos",
      location: "India · Remote",
      description: [
        "Founded an online learning platform helping students transition from LPU to MNC careers",
        "Create easy-to-understand tutorials on Python, C, C++, Java, HTML, CSS, Web Development with WordPress & Bootstrap",
        "Guide MCA/BCA/BTech students on coding, projects and college to corporate life transition",
        "Grew channel to 573+ subscribers, 80+ videos and 113,000+ total views",
      ],
    },
    {
      role: "President",
      company: "Bodh Script Coding Club – Lovely Professional University",
      type: "Full-time",
      duration: "February 2025 – August 2025 · 7 mos",
      location: "LPU Phagwara, Punjab · On-site",
      description: [
        "Led and managed the university's coding club fostering innovation, collaboration and learning",
        "Organized coding workshops, hackathons and technical events to enhance programming skills",
        "Mentored and guided club members in various coding languages, tools and technologies",
        "Collaborated with faculty and external organizations for knowledge-sharing and industry exposure",
      ],
    },
    {
      role: "Data Science Intern",
      company: "Prodigy InfoTech",
      type: "Internship",
      duration: "June 2024 – August 2024 · 3 mos",
      location: "Remote",
      description: [
        "Analyzed large datasets to uncover actionable insights for business decisions",
        "Developed and optimized machine learning models using Python and statistical techniques",
        "Applied data visualization, data wrangling, and APIs & web scraping",
        "Collaborated with cross-functional teams on real-world data-driven projects",
      ],
    },
    {
      role: "Managed Network Expert (CS)",
      company: "Chegg India",
      type: "Freelance",
      duration: "February 2022 – June 2023 · 1 yr 5 mos",
      location: "Patna, Bihar, India",
      description: [
        "Provided expert solutions in C, C++, Python, HTML, CSS, Java and Tkinter",
        "Helped thousands of students understand complex programming concepts",
        "Maintained high quality standards and accuracy on the platform",
      ],
    },
    {
      role: "Intern",
      company: "Humana People to People India",
      type: "Internship",
      duration: "May 2018 – February 2020 · 1 yr 10 mos",
      location: "Bikram, Bihar, India",
      description: [
        "One of the best and most enriching experiences during college life",
        "Gained hands-on community development and teamwork experience",
        "Completed 2-year School Experience Program (SEP)",
      ],
    },
  ],

  // Projects
  projects: [
    {
      title: "The Upcoming Programmer (Blog & Platform)",
      description:
        "A comprehensive website designed to provide in-depth knowledge on programming — C, C++, Python, web development and digital marketing. Features tutorials, interactive exercises, and a progressive learning path from fundamentals to advanced concepts.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "WordPress", "SEO"],
      liveLink: "",
      githubLink: "https://github.com/shubhamarman13",
      featured: true,
    },
    {
      title: "UniversalConverter — Multi-Unit Converter",
      description:
        "A Python + Tkinter GUI tool for converting multiple units — weight, distance, temperature (including Kelvin to Joule). User-friendly design for switching between metrics like kilograms to pounds or Celsius to Kelvin.",
      tech: ["Python", "Tkinter", "GUI Development", "OOP"],
      liveLink: "#",
      githubLink: "https://github.com/shubhamarman13/UniversalConverter-A-Multi-Unit-Converter-with-Python-Tkinter",
      featured: true,
    },
    {
      title: "ATM Machine Simulation in C++",
      description:
        "A console-based ATM system implementing common banking operations — check balance, deposit and withdraw with PIN verification for security. Clean OOP architecture with error handling.",
      tech: ["C++", "OOP", "Console App", "Security"],
      liveLink: "#",
      githubLink: "https://github.com/shubhamarman13/ATM-machine-code-in-C-plus-plus",
      featured: true,
    },
    {
      title: "Enterprise Security Applications",
      description:
        "Contributed to designing and deploying secure enterprise applications at Accenture following DevSecOps practices, OWASP Top 10 guidelines, NIST framework and cloud-native security standards.",
      tech: ["Python", "Java", "AWS", "SIEM", "DevSecOps", "OWASP"],
      liveLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      title: "Data Science & ML Projects",
      description:
        "Built machine learning models and performed large-scale data analysis during internship at Prodigy InfoTech — uncovering actionable insights using Pandas, NumPy and Scikit-learn.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Viz"],
      liveLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      title: "YouTube Educational Channel",
      description:
        "Created 80+ video tutorials on programming fundamentals (Python, C++, Java, HTML/CSS) and campus-to-corporate guidance, reaching 113,000+ views and 573+ subscribers.",
      tech: ["Content Creation", "Python", "C++", "Java", "HTML/CSS"],
      liveLink: "https://www.youtube.com/@THEUPCOMINGPROGRAMMER",
      githubLink: "#",
      featured: false,
    },
  ],

  // Education
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Lovely Professional University",
      duration: "September 2023 – July 2025",
      grade: "9.04 CGPA",
      description: "Specialized in Computer Applications with focus on software development, data science, and leadership as President of Bodh Script Coding Club.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Aryabhatta Knowledge University (AKU), Patna",
      duration: "October 2020 – August 2023",
      grade: "8.88 CGPA",
      description: "Built a strong foundation in computer science, programming, front-end development, and teamwork.",
    },
    {
      degree: "Diploma in Elementary Education (D.El.Ed)",
      institution: "DIET Patna Bikram",
      duration: "2018 – 2020",
      grade: "85%",
      description: "Mathematics and Science for primary level education with 2-year School Experience Program (SEP) and CTET qualified (100 marks).",
    },
    {
      degree: "Intermediate (Science)",
      institution: "College of Commerce & Science",
      duration: "2015 – 2017",
      grade: "73% (Grade A)",
      description: "Science stream with strong foundation in mathematics and analytical thinking.",
    },
    {
      degree: "Matriculation (10th)",
      institution: "Park Mount Public School, Patna",
      duration: "2008 – 2015",
      grade: "95%",
      description: "Completed matriculation with distinction.",
    },
  ],

  // Certifications
  certifications: [
    { name: "Python for Data Analysis: Pandas & NumPy", issuer: "Coursera", date: "Sep 2024" },
    { name: "Introduction to Programming Using Python", issuer: "Saylor University", date: "Sep 2024" },
    { name: "Java Swing App Development", issuer: "Lovely Professional University", date: "Jun 2024" },
    { name: "Hack Quest 24 Hours CTF Challenge", issuer: "upGrad", date: "Apr 2024" },
    { name: "Build-a-Thon Hackathon", issuer: "Board Infinity", date: "Apr 2024" },
    { name: "React Basics", issuer: "Meta", date: "Apr 2024" },
    { name: "C++ Programming", issuer: "Saylor University", date: "Feb 2024" },
    { name: "Software Engineering", issuer: "Saylor University", date: "Dec 2023" },
    { name: "HTML and CSS Programming", issuer: "DevTown", date: "Oct 2022" },
    { name: "Python Logic Building", issuer: "Tech-Build", date: "Feb 2022" },
  ],

  // Recommendations
  recommendations: [
    {
      name: "Girish Kumar",
      title: "Associate Professor, LPU",
      text: "He is a highly knowledgeable professional with deep expertise in his field. We have collaborated on several patents, during which we had the opportunity to address and overcome challenges faced by humanity. Overall, he is extremely dedicated and hardworking.",
    },
    {
      name: "Sanjeev Yadav",
      title: "Software Engineer @Capgemini",
      text: "His dedication, consistency, and ability to learn quickly stood out. His hard work and sharp communication skills helped him secure offers from three reputed MNCs – LTI Mindtree, Capgemini, and Accenture.",
    },
    {
      name: "Adarsh Singh",
      title: "Data Engineering & AI @ Capgemini",
      text: "Shubham possesses a strong foundation in programming languages, particularly C++, and demonstrates exceptional analytical skills. His ability to tackle complex problems with innovative solutions is truly impressive.",
    },
    {
      name: "Neeru Kumari Jha",
      title: "Life Skills & Soft Skills Trainer",
      text: "Dedicated, Quick Learner and Believes in Exploring things by accepting challenges. Keep doing good. Wish you great luck.",
    },
  ],

  // Honors & Awards
  honors: [
    "Python Logic Building — 1st Position in Quiz (Tech-Build, 2022)",
    "CTET Qualified — Central Teacher Eligibility Test (Score: 100, Jan 2020)",
    "STET Qualified — State Teacher Eligibility Test (Bihar Government)",
    "3 MNC Offers — LTI Mindtree, Capgemini & Accenture",
  ],
};
