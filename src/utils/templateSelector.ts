import { ResumeData } from '../types/resume';
import BoxedTemplate from '../components/templates/BoxedTemplate';

export interface AdaptiveTemplate {
  id: string;
  name: string;
  preview: string;
  component: React.ComponentType<{ data: ResumeData; showPhoto?: boolean }>;
  category: 'boxed';
  recommended?: boolean;
}

// Function to determine if user is a fresher or experienced
export const determineUserLevel = (data: ResumeData): 'fresher' | 'experienced' => {
  return 'fresher'; // Not used anymore but kept for type compatibility
};

// Return only the boxed template
export const getAllTemplates = (): AdaptiveTemplate[] => {
  return [
    {
      id: 'boxed-template',
      name: 'Boxed Professional',
      preview: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop',
      component: BoxedTemplate,
      category: 'boxed',
      recommended: true
    }
  ];
};

export const getTemplatesForUser = (data: ResumeData): AdaptiveTemplate[] => {
  return getAllTemplates();
};

export const getRecommendedTemplate = (data: ResumeData): AdaptiveTemplate => {
  return getAllTemplates()[0];
};