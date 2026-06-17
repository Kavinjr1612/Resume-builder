import React, { useState, useEffect } from 'react';
import { ResumeData } from '../types/resume';
import { ArrowLeft, Download, Edit2, Eye, Layout } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';
import { trackResumeEvents } from '../utils/analytics';
import BoxedTemplate from './templates/BoxedTemplate';

interface ResumePreviewProps {
  data: ResumeData;
  onBack: () => void;
  onEdit: () => void;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, onBack, onEdit }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [previewScale, setPreviewScale] = useState(1);

  // Calculate optimal scale for preview to fit container better
  const getPreviewScale = () => {
    if (typeof window === 'undefined') return 0.8;
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) return 0.45; // Mobile
    if (screenWidth < 1024) return 0.65; // Tablet
    if (screenWidth < 1280) return 0.8; // Small desktop
    return 1; // Large desktop
  };

  useEffect(() => {
    setPreviewScale(getPreviewScale());
    const handleResize = () => setPreviewScale(getPreviewScale());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    trackResumeEvents.downloadPDF();
    
    try {
      const fileName = `${(data.personalInfo?.name || 'My').replace(/\s+/g, '_')}_Resume.pdf`;
      await generatePDF('resume-for-pdf', fileName);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Failed to download PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-start">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="hidden sm:inline font-medium">Home</span>
              </button>
              <div className="hidden sm:block h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Preview</h1>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={onEdit}
                className="flex-1 sm:flex-none flex items-center justify-center space-x-2 bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Edit2 className="h-4 w-4" />
                <span>Edit</span>
              </button>
              <button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="flex-1 sm:flex-none flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-75 disabled:cursor-wait font-medium"
              >
                <Download className={`h-4 w-4 ${isDownloading ? 'animate-bounce' : ''}`} />
                <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-600">
              <Layout className="h-5 w-5" />
              <span className="font-medium text-sm">A4 Format (Optimized for ATS & Printing)</span>
            </div>
          </div>
          
          <div className="p-4 sm:p-8 bg-gray-200/50 flex justify-center overflow-x-auto min-h-[800px]">
            {/* The scale wrapper */}
            <div 
              className="origin-top transition-transform duration-300 ease-out flex justify-center"
              style={{ transform: `scale(${previewScale})` }}
            >
              <div 
                className="bg-white shadow-2xl relative"
                style={{
                  width: '800px', // Standard A4 width proportion
                  minHeight: '1056px', // Standard A4 height proportion
                }}
              >
                {/* ID for PDF generator */}
                <div id="resume-for-pdf" className="w-full h-full bg-white">
                  <BoxedTemplate data={data} showPhoto={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;