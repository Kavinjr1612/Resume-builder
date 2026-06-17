// Google Analytics 4 tracking functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Resume builder specific events
export const trackResumeEvents = {
  startBuilding: () => trackEvent('resume_start_building'),
  completePersonalInfo: () => trackEvent('resume_complete_personal_info'),
  addEducation: () => trackEvent('resume_add_education'),
  addExperience: () => trackEvent('resume_add_experience'),
  addProject: () => trackEvent('resume_add_project'),
  previewResume: () => trackEvent('resume_preview'),
  downloadPDF: () => trackEvent('resume_download_pdf'),
  changeTemplate: (templateName: string) => trackEvent('resume_change_template', { template: templateName }),
};

// Ad interaction tracking
export const trackAdEvents = {
  adClick: (adPosition: string) => trackEvent('ad_click', { position: adPosition }),
  adView: (adPosition: string) => trackEvent('ad_view', { position: adPosition }),
};