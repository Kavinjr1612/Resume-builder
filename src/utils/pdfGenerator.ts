import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Helper function to calculate content height and auto-fit to A4
const calculateOptimalFontSize = (contentLength: number, baseSize: number = 11): number => {
  // Estimate content density and adjust font size accordingly
  if (contentLength > 3000) return Math.max(9, baseSize - 2); // Very long content
  if (contentLength > 2000) return Math.max(10, baseSize - 1); // Long content
  if (contentLength < 800) return Math.min(13, baseSize + 1); // Short content
  return baseSize; // Normal content
};

const estimateContentLength = (data: any): number => {
  let length = 0;
  
  // Count personal info
  length += (data.personalInfo?.name?.length || 0);
  length += (data.personalInfo?.email?.length || 0);
  length += (data.personalInfo?.phone?.length || 0);
  length += (data.personalInfo?.location?.length || 0);
  
  // Count summary
  length += (data.summary?.length || 0);
  
  // Count education
  if (data.education) {
    data.education.forEach((edu: any) => {
      length += (edu.institution?.length || 0);
      length += (edu.degree?.length || 0);
      length += (edu.field?.length || 0);
      length += (edu.achievements?.length || 0);
    });
  }
  
  // Count experience
  if (data.experience) {
    data.experience.forEach((exp: any) => {
      length += (exp.company?.length || 0);
      length += (exp.position?.length || 0);
      length += (exp.description?.length || 0);
    });
  }
  
  // Count projects
  if (data.projects) {
    data.projects.forEach((proj: any) => {
      length += (proj.name?.length || 0);
      length += (proj.description?.length || 0);
      length += (proj.technologies?.length || 0);
    });
  }
  
  // Count skills
  if (data.skills) {
    length += data.skills.join('').length;
  }
  if (data.technicalSkills) {
    length += data.technicalSkills.join('').length;
  }
  if (data.softSkills) {
    length += data.softSkills.join('').length;
  }
  
  return length;
};

export const generatePDF = async (elementId: string, fileName: string = 'resume.pdf') => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Resume element not found');
    }

    // Get the resume data from the element to calculate optimal sizing
    const resumeData = (element as any).__resumeData || {};
    const contentLength = estimateContentLength(resumeData);
    const optimalFontSize = calculateOptimalFontSize(contentLength);

    // Create a temporary container for PDF generation with exact A4 dimensions
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '0';
    tempContainer.style.width = '800px'; // A4 width in pixels at 96 DPI
    tempContainer.style.height = '1123px'; // A4 height in pixels at 96 DPI
    tempContainer.style.backgroundColor = '#ffffff';
    tempContainer.style.overflow = 'hidden';
    tempContainer.style.boxSizing = 'border-box';
    
    // Clone the resume element
    const clonedElement = element.cloneNode(true) as HTMLElement;
    
    // Apply consistent styling to the cloned element with auto-fitting
    clonedElement.style.width = '794px';
    clonedElement.style.height = '1123px';
    clonedElement.style.maxWidth = '794px';
    clonedElement.style.maxHeight = '1123px';
    clonedElement.style.margin = '0';
    clonedElement.style.padding = '0';
    clonedElement.style.boxSizing = 'border-box';
    clonedElement.style.backgroundColor = '#ffffff';
    clonedElement.style.transform = 'none';
    clonedElement.style.scale = '1';
    clonedElement.style.overflow = 'hidden';
    clonedElement.style.fontFamily = 'Arial, sans-serif';
    clonedElement.style.fontSize = `${optimalFontSize}px`;
    clonedElement.style.lineHeight = '1.3';
    clonedElement.style.color = '#000000';
    clonedElement.style.position = 'relative';
    
    // Auto-fit content by adjusting spacing and font sizes
    const allElements = clonedElement.querySelectorAll('*');
    allElements.forEach((el, index) => {
      const htmlEl = el as HTMLElement;
      
      // Reset any transforms or scaling
      htmlEl.style.transform = 'none';
      htmlEl.style.scale = '1';
      htmlEl.style.boxSizing = 'border-box';
      
      // Apply auto-fitting font sizes based on element type
      const tagName = htmlEl.tagName.toLowerCase();
      
      if (tagName === 'h1') {
        const h1Size = Math.max(18, Math.min(24, optimalFontSize + 8));
        htmlEl.style.fontSize = `${h1Size}px`;
        htmlEl.style.lineHeight = '1.2';
        htmlEl.style.marginBottom = `${Math.max(6, optimalFontSize - 3)}px`;
      } else if (tagName === 'h2') {
        const h2Size = Math.max(12, Math.min(18, optimalFontSize + 2));
        htmlEl.style.fontSize = `${h2Size}px`;
        htmlEl.style.lineHeight = '1.3';
        htmlEl.style.marginBottom = `${Math.max(4, optimalFontSize - 5)}px`;
      } else if (tagName === 'h3') {
        const h3Size = Math.max(10, Math.min(14, optimalFontSize + 1));
        htmlEl.style.fontSize = `${h3Size}px`;
        htmlEl.style.lineHeight = '1.3';
        htmlEl.style.marginBottom = `${Math.max(2, optimalFontSize - 7)}px`;
      } else if (tagName === 'p' || tagName === 'div' || tagName === 'span') {
        htmlEl.style.fontSize = `${Math.max(8, optimalFontSize - 1)}px`;
        htmlEl.style.lineHeight = '1.3';
        htmlEl.style.marginBottom = `${Math.max(2, optimalFontSize - 7)}px`;
      }
      
      // Adjust margins and padding for better space utilization
      if (htmlEl.style.marginBottom && parseInt(htmlEl.style.marginBottom) > 16) {
        htmlEl.style.marginBottom = '12px';
      }
      if (htmlEl.style.marginTop && parseInt(htmlEl.style.marginTop) > 16) {
        htmlEl.style.marginTop = '8px';
      }
      if (htmlEl.style.padding && parseInt(htmlEl.style.padding) > 24) {
        htmlEl.style.padding = '16px';
      }
      
      // Ensure consistent font rendering
      if (!htmlEl.style.fontFamily || htmlEl.style.fontFamily === '') {
        htmlEl.style.fontFamily = 'Arial, sans-serif';
      }
      
      // Fix any potential layout issues
      if (htmlEl.style.position === 'fixed' || htmlEl.style.position === 'sticky') {
        htmlEl.style.position = 'relative';
      }
      
      // Ensure images are properly sized
      if (htmlEl.tagName === 'IMG') {
        const img = htmlEl as HTMLImageElement;
        if (img.style.width && img.style.height) {
          img.style.objectFit = 'cover';
          // Slightly reduce image sizes for better space utilization
          const currentWidth = parseInt(img.style.width);
          const currentHeight = parseInt(img.style.height);
          if (currentWidth > 80) {
            img.style.width = '70px';
            img.style.height = '70px';
          }
        }
      }
      
      // Handle button elements specifically for PDF
      if (htmlEl.tagName === 'BUTTON' || htmlEl.classList.contains('button')) {
        htmlEl.style.display = 'inline-block';
        htmlEl.style.padding = '4px 8px';
        htmlEl.style.fontSize = `${Math.max(8, optimalFontSize - 2)}px`;
        htmlEl.style.borderRadius = '4px';
        htmlEl.style.border = '1px solid #d1d5db';
        htmlEl.style.backgroundColor = '#f9fafb';
        htmlEl.style.color = '#374151';
        htmlEl.style.fontWeight = '500';
        htmlEl.style.textAlign = 'center';
        htmlEl.style.verticalAlign = 'middle';
        htmlEl.style.lineHeight = '1.2';
        htmlEl.style.whiteSpace = 'nowrap';
        htmlEl.style.overflow = 'hidden';
        htmlEl.style.textOverflow = 'ellipsis';
      }
      
      // Handle flex containers for better layout
      if (htmlEl.style.display === 'flex') {
        htmlEl.style.alignItems = 'flex-start';
        htmlEl.style.gap = `${Math.max(4, optimalFontSize - 6)}px`;
      }
      
      // Truncate very long text content to fit better
      if (htmlEl.textContent && htmlEl.textContent.length > 150 && 
          (tagName === 'p' || tagName === 'div') && 
          !htmlEl.querySelector('*')) {
        const text = htmlEl.textContent;
        if (text.length > 120) {
          htmlEl.textContent = text.substring(0, 117) + '...';
        }
      }
    });
    
    // Apply section-specific spacing adjustments
    const sections = clonedElement.querySelectorAll('section');
    sections.forEach((section, index) => {
      const sectionEl = section as HTMLElement;
      sectionEl.style.marginBottom = `${Math.max(8, optimalFontSize - 3)}px`;
      
      // Reduce spacing for later sections if content is long
      if (contentLength > 2500 && index > 2) {
        sectionEl.style.marginBottom = `${Math.max(6, optimalFontSize - 5)}px`;
      }
    });
    
    tempContainer.appendChild(clonedElement);
    document.body.appendChild(tempContainer);

    // Wait for fonts, images, and layout to stabilize
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate canvas with optimal settings for PDF
    const canvas = await html2canvas(clonedElement, {
      scale: 2, // High quality for crisp text
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: 794,
      height: 1123,
      windowWidth: 794,
      windowHeight: 1123,
      removeContainer: false,
      foreignObjectRendering: false,
      imageTimeout: 15000,
      scrollX: 0,
      scrollY: 0,
      x: 0,
      y: 0,
      onclone: (clonedDoc) => {
        // Inject additional CSS for consistent rendering
        const style = clonedDoc.createElement('style');
        style.textContent = `
          * {
            font-family: Arial, sans-serif !important;
            box-sizing: border-box !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
          }
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            overflow: hidden !important;
          }
          img {
            max-width: 100% !important;
            height: auto !important;
          }
          div, section, p, h1, h2, h3, h4, h5, h6 {
            page-break-inside: avoid !important;
          }
          button, .button {
            display: inline-block !important;
            padding: 4px 8px !important;
            font-size: ${Math.max(8, optimalFontSize - 2)}px !important;
            border-radius: 4px !important;
            border: 1px solid #d1d5db !important;
            background-color: #f9fafb !important;
            color: #374151 !important;
            font-weight: 500 !important;
            text-align: center !important;
            vertical-align: middle !important;
            line-height: 1.2 !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
        `;
        clonedDoc.head.appendChild(style);
      }
    });

    // Remove temporary container
    document.body.removeChild(tempContainer);

    // Calculate PDF dimensions (A4: 210mm x 297mm)
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Create PDF with high quality settings
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
      precision: 2
    });

    // Convert canvas to high-quality image
    const imgData = canvas.toDataURL('image/png', 1.0);

    // Add image to PDF - ensure it fits perfectly on one page
    if (imgHeight <= pageHeight) {
      // Content fits on one page
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
    } else {
      // Content is too tall, scale it down to fit exactly on one page
      const scaledHeight = pageHeight;
      const scaledWidth = (canvas.width * scaledHeight) / canvas.height;
      const xOffset = Math.max(0, (imgWidth - scaledWidth) / 2);
      pdf.addImage(imgData, 'PNG', xOffset, 0, scaledWidth, scaledHeight, undefined, 'FAST');
    }

    // Add metadata
    pdf.setProperties({
      title: fileName.replace('.pdf', ''),
      subject: 'Professional Resume',
      author: 'Building You Resume Builder',
      creator: 'Building You - Free Resume Builder',
      keywords: 'resume, cv, professional, job application'
    });

    // Save the PDF
    pdf.save(fileName);
    return true;

  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
};