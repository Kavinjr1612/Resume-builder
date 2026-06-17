import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface HowItWorksIntroProps {
  onContinue: () => void;
}

const HowItWorksIntro: React.FC<HowItWorksIntroProps> = ({ onContinue }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to trigger the fade-in animation
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md transition-opacity duration-500 cursor-pointer ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onContinue}
    >
      <div 
        className={`max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'}`}
        onClick={(e) => e.stopPropagation()} // Prevent clicking inside the modal from immediately closing if we want them to click the button, but user wanted click anywhere. We'll let click anywhere work, but also provide a button.
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display mb-12 sm:mb-16">
          How It Works - Simple as <span className="text-blue-400">1-2-3</span>
        </h2>
        
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12 mb-16">
          <div className="text-center group">
            <div className="bg-blue-600/20 ring-1 ring-blue-500/50 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400 font-bold tracking-tight text-2xl sm:text-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.2)] group-hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]">
              1
            </div>
            <h4 className="text-xl sm:text-2xl font-semibold text-white font-display mb-3">Fill Your Details</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Enter your personal information, education, experience, and projects in our sleek form.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-teal-600/20 ring-1 ring-teal-500/50 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-400 font-bold tracking-tight text-2xl sm:text-3xl group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(13,148,136,0.2)] group-hover:shadow-[0_0_40px_rgba(13,148,136,0.5)]">
              2
            </div>
            <h4 className="text-xl sm:text-2xl font-semibold text-white font-display mb-3">Choose Template</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Select from our collection of premium, professionally designed templates.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-purple-600/20 ring-1 ring-purple-500/50 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400 font-bold tracking-tight text-2xl sm:text-3xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(147,51,234,0.2)] group-hover:shadow-[0_0_40px_rgba(147,51,234,0.5)]">
              3
            </div>
            <h4 className="text-xl sm:text-2xl font-semibold text-white font-display mb-3">Download & Apply</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Preview your resume and download as a high-quality PDF instantly.
            </p>
          </div>
        </div>

        <button
          onClick={onContinue}
          className="bg-blue-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-3 animate-pulse hover:animate-none"
        >
          <span>Start Building</span>
          <ArrowRight className="h-6 w-6" />
        </button>
        <p className="text-slate-400 mt-6 text-sm">Click anywhere to continue</p>
      </div>
    </div>
  );
};

export default HowItWorksIntro;
