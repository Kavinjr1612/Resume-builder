import { useState } from 'react';
import { ResumeData } from '../types/resume';

const initialData: ResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: ''
  },
  summary: '',
  education: [{
    id: '1',
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    gpa: '',
    achievements: ''
  }],
  experience: [],
  skills: [],
  projects: [],
  technicalSkills: [],
  softSkills: []
};

export const useResumeData = () => {
  const [data, setData] = useState<ResumeData>(initialData);

  const updateData = (newData: ResumeData) => {
    setData(newData);
  };

  const resetData = () => {
    setData(initialData);
  };

  return {
    data,
    updateData,
    resetData
  };
};