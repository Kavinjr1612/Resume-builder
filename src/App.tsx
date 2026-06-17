import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import BlogPost from './components/BlogPost';
import { useResumeData } from './hooks/useResumeData';
import { trackPageView } from './utils/analytics';

type AppState = 'home' | 'form' | 'preview' | 'blog-post';

function App() {
  const [currentView, setCurrentView] = useState<AppState>('home');
  const [currentBlogPost, setCurrentBlogPost] = useState<string>('');
  const { data, updateData, resetData } = useResumeData();

  useEffect(() => {
    // Track page views
    const pageMap = {
      home: '/',
      form: '/resume-builder',
      preview: '/resume-preview',
      'blog-post': `/blog/${currentBlogPost}`
    };
    
    trackPageView(pageMap[currentView]);
  }, [currentView, currentBlogPost]);

  const handleGetStarted = () => {
    setCurrentView('form');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handlePreview = () => {
    setCurrentView('preview');
  };

  const handleBackToForm = () => {
    setCurrentView('form');
  };

  const handleStartNew = () => {
    resetData();
    setCurrentView('form');
  };

  const handleReadMore = (postId: string) => {
    setCurrentBlogPost(postId);
    setCurrentView('blog-post');
  };

  const handleBackToBlog = () => {
    setCurrentView('home');
    // Scroll to blog section
    setTimeout(() => {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  switch (currentView) {
    case 'home':
      return <HomePage onGetStarted={handleGetStarted} onReadMore={handleReadMore} />;
    
    case 'form':
      return (
        <ResumeForm
          data={data}
          onUpdateData={updateData}
          onBack={handleBackToHome}
          onPreview={handlePreview}
        />
      );
    
    case 'preview':
      return (
        <ResumePreview
          data={data}
          onBack={handleBackToHome}
          onEdit={handleBackToForm}
        />
      );

    case 'blog-post':
      return (
        <BlogPost
          postId={currentBlogPost}
          onBack={handleBackToBlog}
        />
      );
    
    default:
      return <HomePage onGetStarted={handleGetStarted} onReadMore={handleReadMore} />;
  }
}

export default App;