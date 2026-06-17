import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, TrendingUp } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

interface BlogSectionProps {
  onReadMore?: (postId: string) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onReadMore }) => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'How to Write a Resume That Gets You Hired in 2024',
      excerpt: 'Learn the latest resume writing strategies that actually work. From ATS optimization to modern formatting, discover what recruiters really want to see.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Resume Tips',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: '2',
      title: 'Top 10 Interview Questions for Fresh Graduates',
      excerpt: 'Prepare for your first job interview with these common questions and expert-approved answers that will help you stand out from other candidates.',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Interview Prep',
      image: 'https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '3',
      title: 'LinkedIn Profile Optimization for Students',
      excerpt: 'Transform your LinkedIn profile into a powerful networking tool. Learn how to write compelling headlines, summaries, and showcase your projects effectively.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Networking',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '4',
      title: 'Salary Negotiation Tips for Entry-Level Positions',
      excerpt: 'Yes, you can negotiate your first salary! Learn proven strategies to confidently discuss compensation and secure the best possible offer.',
      author: 'David Park',
      date: '2024-01-08',
      readTime: '5 min read',
      category: 'Career Advice',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '5',
      title: 'Building a Portfolio That Showcases Your Skills',
      excerpt: 'Create a compelling portfolio that demonstrates your abilities and helps you land your dream job. Tips for both technical and non-technical fields.',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Portfolio',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '6',
      title: 'Remote Work: How to Find and Land Your First Remote Job',
      excerpt: 'The complete guide to finding remote opportunities, crafting applications that stand out, and succeeding in virtual interviews.',
      author: 'Alex Thompson',
      date: '2024-01-03',
      readTime: '10 min read',
      category: 'Remote Work',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['All', 'Resume Tips', 'Interview Prep', 'Networking', 'Career Advice', 'Portfolio', 'Remote Work'];
  
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = activeCategory === 'All' 
    ? filteredPosts.find(post => post.featured)
    : null;
    
  const regularPosts = activeCategory === 'All'
    ? filteredPosts.filter(post => !post.featured)
    : filteredPosts;

  const handleReadMore = (postId: string) => {
    if (onReadMore) {
      onReadMore(postId);
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Career Success Blog
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Expert advice, tips, and insights to accelerate your career journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors border
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-8 sm:mb-12">
            <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow group"
              onClick={() => handleReadMore(featuredPost.id)}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-48 sm:h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                      Featured
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleReadMore(featuredPost.id); }}
                      className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base group-hover:bg-blue-700"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {regularPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group flex flex-col"
              onClick={() => handleReadMore(post.id)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500 text-xs sm:text-sm">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Popular</span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleReadMore(post.id); }}
                    className="text-blue-600 hover:text-blue-800 font-medium text-xs sm:text-sm flex items-center space-x-1 self-start sm:self-auto group-hover:text-blue-800"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;