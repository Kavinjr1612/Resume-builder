export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  photo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa: string;
  achievements: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  isCurrentJob: boolean;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
  projects: Project[];
  technicalSkills?: string[];
  softSkills?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string;
  link: string;
}

export interface Template {
  id: string;
  name: string;
  preview: string;
  component: React.ComponentType<{ data: ResumeData; showPhoto?: boolean }>;
}