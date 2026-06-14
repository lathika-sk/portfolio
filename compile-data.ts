import fs from 'fs';

// Helper to evaluate raw JS literals from files safely inside this node build context
function loadJS(filePath: string): any {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Since it is written like: `[{id:1,...}]` or `qd=[{...}]` - let's isolate the bracket content if there is an prefix
  let clean = content.trim();
  if (clean.includes('=')) {
    clean = clean.split('=')[1].trim();
  }
  return eval(`(${clean})`);
}

try {
  const certifications = loadJS('./certifications.json');
  const projects = loadJS('./projects.json');
  const education = loadJS('./education.json');
  const experience = loadJS('./experience.json');
  const achievements = loadJS('./achievements.json');
  
  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'CANVA'],
    aiBackend: ['Python', 'Machine Learning', 'Flask', 'LLMs', 'Agentic AI', 'Google Studio.ai'],
    cloud: ['Oracle Cloud', 'Azure Cognitive'],
    data: ['Google Analytics', 'Predictive Modeling', 'SQL'],
    soft: ['Leadership', 'Communication', 'Problem-Solving', 'Creative Design']
  };

  const contact = {
    email: 'lathikask26@gmail.com',
    phone: '+91 8637607494',
    location: 'Tiruppur, Tamilnadu',
    degree: 'B.Tech AI & DS · 2023–2027',
    languages: ['Tamil', 'English', 'Malayalam'],
    socials: {
      linkedin: 'https://www.linkedin.com/in/lathika-sk/',
      github: 'https://github.com/lathika-sk'
    }
  };

  const output = `/**
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

export const EDUCATION: Education[] = ${JSON.stringify(education, null, 2)};

export const EXPERIENCE: Experience[] = ${JSON.stringify(experience, null, 2)};

export const ACHIEVEMENTS: Achievement[] = ${JSON.stringify(achievements, null, 2)};

export const CERTIFICATIONS: Certification[] = ${JSON.stringify(certifications, null, 2)};

export const PROJECTS: Project[] = ${JSON.stringify(projects, null, 2)};

export const SKILLS = ${JSON.stringify(skills, null, 2)};

export const CONTACT = ${JSON.stringify(contact, null, 2)};
`;

  fs.writeFileSync('./src/data.ts', output);
  console.log('Successfully generated /src/data.ts file!');

} catch (err: any) {
  console.error('Error generating data file:', err);
}
