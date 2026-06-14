/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  title: string;
  description: string;
  tech: string[];
  impact?: string;
  award?: string;
  icon: string;
  github?: string;
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  cgpa: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  imageUrl?: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export const EDUCATION: Education[] = [
  {
    "degree": "B.Tech in Artificial Intelligence & Data Science",
    "institution": "Sasurie College of Engineering",
    "period": "2023 – 2027",
    "location": "Tamilnadu, India",
    "cgpa": "8.0 / 10.0"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    "title": "Foundation Program Trainee",
    "company": "NxtWave",
    "period": "2025 – Present",
    "description": [
      "Actively building hands-on experience in frontend development and Data Structures & Algorithms.",
      "Focusing on industry-ready skills through intensive training and project-based learning.",
      "Developing a strong foundation in problem-solving and modern web technologies."
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    "title": "Fine Arts Club President",
    "description": "Leading and managing 50+ members, organising cultural events and creative initiatives at Sasurie College of Engineering.",
    "icon": "User"
  },
  {
    "title": "1st Prize – Intercollege Singing",
    "description": "Won first place at an intercollege singing competition, demonstrating artistic talent beyond the technical domain.",
    "icon": "Trophy",
    "imageUrl": "https://lh3.googleusercontent.com/d/1Gkk8N3lDJ0KjZlKWV2HpoZfBFkCbIoo0"
  },
  {
    "title": "National Level Buildathon – Finalist",
    "description": "Reached the finals among 1000+ participants in a national-level Buildathon.",
    "icon": "Award",
    "imageUrl": "https://lh3.googleusercontent.com/d/1Ehnao5HvZO-iFEAM73jl5U6JpG9Eu5Mn"
  },
  {
    "title": "Hackathon 2nd Place",
    "description": "Secured second place at a competitive hackathon with the AI-Based Hall Seating Arrangement System.",
    "icon": "Trophy",
    "imageUrl": "https://lh3.googleusercontent.com/d/16q0_9_2uZUVYys6Y6x-hOYwqwldxA5jl"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    "id": 1,
    "title": "Mastercraft DataPlus",
    "issuer": "TCS",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1aRArMe2So8x-KIlpY91kFZVNNRj0dwIq"
  },
  {
    "id": 2,
    "title": "Google Ads for Beginners",
    "issuer": "Google",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1QYITAVp6v7Udld3aQLhwHx9lWrlILUN3"
  },
  {
    "id": 3,
    "title": "Build Your Own Static Website",
    "issuer": "NxtWave",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1hGOp6RUTrA9xXFFKUfGINBDZZ30-9LeC"
  },
  {
    "id": 4,
    "title": "Basics of IT Industries",
    "issuer": "TCS",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/15P6L268g5ZAzRGVmJyCLrFypQSpzXS_T"
  },
  {
    "id": 5,
    "title": "Internship Common Aptitude Test (ICAT)",
    "issuer": "ICAT",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/15wfljW72j1MyrYvK4TCKLqlw3tiZZ5i-"
  },
  {
    "id": 6,
    "title": "Content and Creative Design",
    "issuer": "LinkedIn",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1ehg1tikXn997kP5O12xqJIz8XkqbmJa4"
  },
  {
    "id": 7,
    "title": "Cyber Security by Google (Naan Mudhalvan)",
    "issuer": "Google",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1Ia_IVtVPs7KPbtS-sYcNHq0YuTG-9nJw"
  },
  {
    "id": 8,
    "title": "EBPL (Naan Mudhalvan)",
    "issuer": "Naan Mudhalvan",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/14uuwo_jxfj78HrYr_I6IUiJUbv8gl2NA"
  },
  {
    "id": 10,
    "title": "LLMs & Agentic AI 101 Webinar",
    "issuer": "NxtWave",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1NSVqEa_fbQ7uWpXOUagzP-Z_bWqpK1uI"
  },
  {
    "id": 11,
    "title": "Oracle Cloud Infrastructure (Naan Mudhalvan)",
    "issuer": "Oracle",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1YEuBKO4hJHUMQ7ANItaBp5Gd-q47q-U4"
  },
  {
    "id": 12,
    "title": "Introduction to Soft Skills",
    "issuer": "TCS",
    "date": "2026",
    "imageUrl": "https://lh3.googleusercontent.com/d/1hOoe1dfsolDraF5DjTb3MGRROhxToGi6"
  },
  {
    "id": 13,
    "title": "Build a Professional Resume Using CANVA",
    "issuer": "Coursera",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1BD1b9L5rIDXk0N767EENKTASmO-9f-RE"
  },
  {
    "id": 14,
    "title": "Computer Vision App with Azure Cognitive",
    "issuer": "Microsoft",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1LpXNCN6qXG5PD3wA9vfF79HatWfPi_Kn"
  },
  {
    "id": 15,
    "title": "Predictive Modeling Fundamentals 1",
    "issuer": "IBM",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1aIRDy__sn9Q8gASf6rqMgsicwcSK4cgj"
  },
  {
    "id": 16,
    "title": "Inside the Startup Ecosystem Webinar",
    "issuer": "NxtWave",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1wy0cKgU8LvaG-W8zRFCqlVQd5Vj83z-q"
  },
  {
    "id": 17,
    "title": "Technical Opportunity Workshop",
    "issuer": "Other",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1qA-J7QXw1nMY4Mj1Eijub7wV6fmsWyKJ"
  },
  {
    "id": 18,
    "title": "Gen AI for Professionals: 10x Productivity",
    "issuer": "Udemy",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1sHpc_VVq4OpgnqI-gTryA7fRGlj33wfD"
  },
  {
    "id": 19,
    "title": "Building Job-Ready Skills in the AI Era",
    "issuer": "NxtWave",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1o_yBMpzKQ79q1MQ1Mar8ZVlmwoLLyzUV"
  },
  {
    "id": 20,
    "title": "C & C++ Programming",
    "issuer": "ITSonix",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1PM_cKCyxyBan6FVS26-SI8yJc3ch7R05"
  },
  {
    "id": 21,
    "title": "National Level Buildathon Certificate",
    "issuer": "NxtWave",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1QdgydVFAPtHe-aFIzpkJiJzMNX4EDDQ8"
  },
  {
    "id": 22,
    "title": "Mobile App with Google Sheets on Glide",
    "issuer": "Coursera",
    "date": "2026",
    "imageUrl": "https://lh3.googleusercontent.com/d/1tjLavU6hznaU03EK2TyiHWfqCH0p7Ojc"
  },
  {
    "id": 23,
    "title": "DSA 18",
    "issuer": "NxtWave",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/17czsR0w1fUB_ubwDdn2aMYR1BlYW_MHD"
  },
  {
    "id": 24,
    "title": "DSA 20",
    "issuer": "NxtWave",
    "date": "2025",
    "imageUrl": "https://lh3.googleusercontent.com/d/1LqnMNSDeVw6BBTNo4lR9IyGGNxWuKmKX"
  },
  {
    "id": 25,
    "title": "Front-end Development",
    "issuer": "Meta",
    "date": "2025",
    "imageUrl": ""
  },
  {
    "id": 26,
    "title": "Gemini Certified Student K17",
    "issuer": "Google Gemini",
    "date": "2025",
    "imageUrl": ""
  },
  {
    "id": 27,
    "title": "Software Product Development",
    "issuer": "SkillIndia",
    "date": "2025",
    "imageUrl": ""
  },
  {
    "id": 28,
    "title": "Build and Launch the MVP Project",
    "issuer": "NxtWave",
    "date": "2025",
    "imageUrl": ""
  },
  {
    "id": 29,
    "title": "Data Analytics with Gen AI Webinar",
    "issuer": "Gen Corpus",
    "date": "2025",
    "imageUrl": ""
  },
  {
    "id": 30,
    "title": "Building a Free Business Page for Blogger",
    "issuer": "Coursera",
    "date": "2025",
    "imageUrl": ""
  },
  {
    "id": 31,
    "title": "Cyber Job Simulation",
    "issuer": "Deloitte",
    "date": "2025",
    "imageUrl": ""
  }
];

export const PROJECTS: Project[] = [
  {
    "title": "Future Path AI",
    "description": "Smart, personalized career recommendation engine analyzing college courses, skills, and industry trends using light predictive LLM structures.",
    "tech": [
      "Python",
      "Machine Learning",
      "Gemini API",
      "Vite"
    ],
    "icon": "Cpu",
    "github": "https://github.com/lathika-sk"
  },
  {
    "title": "Genius PR",
    "description": "An automated public relations press release generator and article synthesizer, helping brand alignment using generative language modeling.",
    "tech": [
      "React",
      "Tailwind CSS",
      "Gemini API",
      "Node.js"
    ],
    "icon": "Sparkles",
    "github": "https://github.com/lathika-sk"
  },
  {
    "title": "Learnloop",
    "description": "Interactive spaced-repetition student hub offering personalized scheduling, custom flashcard creation, and digital exam arranging tools.",
    "tech": [
      "React",
      "Vite",
      "Firebase",
      "Framer Motion"
    ],
    "icon": "GraduationCap",
    "github": "https://github.com/lathika-sk"
  },
  {
    "title": "Tasty Spot – Business Website",
    "description": "Fully responsive restaurant brand website with modern UI/UX, menu showcase, and contact integration.",
    "tech": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "icon": "Utensils",
    "link": "https://tasty-spot.vercel.app",
    "github": "https://github.com/lathika-sk"
  }
];

export const SKILLS = {
  "frontend": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "CANVA"
  ],
  "aiBackend": [
    "Python",
    "Machine Learning",
    "Flask",
    "LLMs",
    "Agentic AI",
    "Google Studio.ai"
  ],
  "cloud": [
    "Oracle Cloud",
    "Azure Cognitive"
  ],
  "data": [
    "Google Analytics",
    "Predictive Modeling",
    "SQL"
  ],
  "soft": [
    "Leadership",
    "Communication",
    "Problem-Solving",
    "Creative Design"
  ]
};

export const CONTACT = {
  "email": "lathikask26@gmail.com",
  "phone": "+91 8637607494",
  "location": "Tiruppur, Tamilnadu",
  "degree": "B.Tech AI & DS · 2023–2027",
  "languages": [
    "Tamil",
    "English",
    "Malayalam"
  ],
  "socials": {
    "linkedin": "https://www.linkedin.com/in/lathika-sk/",
    "github": "https://github.com/lathika-sk"
  }
};
