import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Tag } from 'lucide-react';

interface BlogPostProps {
  postId: string;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId, onBack }) => {
  // Mock blog post data - in production, this would come from a CMS or API
  const blogPosts: { [key: string]: any } = {
    '1': {
      title: 'How to Write a Resume That Gets You Hired in 2024',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Resume Tips',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <p>In today's competitive job market, your resume is often the first impression you make on potential employers. With hiring managers spending an average of just 6 seconds scanning each resume, it's crucial to make every word count.</p>

        <h2>1. Start with a Compelling Professional Summary</h2>
        <p>Your professional summary is the elevator pitch of your resume. It should be 2-3 sentences that highlight your key qualifications, experience, and career objectives. For fresh graduates, focus on your education, relevant projects, and transferable skills.</p>

        <blockquote>
          <p>"A well-crafted professional summary can increase your chances of getting an interview by 40%." - HR Industry Report 2024</p>
        </blockquote>

        <h2>2. Optimize for Applicant Tracking Systems (ATS)</h2>
        <p>Over 90% of large companies use ATS to filter resumes before they reach human eyes. Here's how to ensure your resume passes through:</p>
        <ul>
          <li>Use standard section headings like "Work Experience" and "Education"</li>
          <li>Include relevant keywords from the job description</li>
          <li>Avoid complex formatting, tables, and graphics</li>
          <li>Save your resume as both PDF and Word formats</li>
        </ul>

        <h2>3. Quantify Your Achievements</h2>
        <p>Numbers speak louder than words. Instead of saying "Improved team efficiency," say "Improved team efficiency by 25% through implementation of new project management system."</p>

        <h2>4. Tailor Your Resume for Each Application</h2>
        <p>Generic resumes rarely get noticed. Customize your resume for each position by:</p>
        <ul>
          <li>Matching your skills to the job requirements</li>
          <li>Using industry-specific terminology</li>
          <li>Highlighting relevant experience and projects</li>
          <li>Adjusting your professional summary</li>
        </ul>

        <h2>5. Keep It Clean and Professional</h2>
        <p>Your resume design should be clean, professional, and easy to read. Use consistent formatting, plenty of white space, and a professional font like Arial or Calibri.</p>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Including irrelevant personal information</li>
          <li>Using unprofessional email addresses</li>
          <li>Making it too long (stick to 1-2 pages)</li>
          <li>Including references (save space for more important content)</li>
          <li>Using passive language instead of action verbs</li>
        </ul>

        <h2>Final Thoughts</h2>
        <p>Remember, your resume is a marketing document designed to get you an interview, not the job itself. Focus on showcasing your potential and the value you can bring to the organization.</p>

        <p>Use our free AI Resume Builder to create a professional resume that follows all these best practices and is optimized for both ATS systems and human recruiters.</p>
      `
    },
    '2': {
      title: 'Top 10 Interview Questions for Fresh Graduates',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Interview Prep',
      image: 'https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <p>Preparing for your first job interview can be nerve-wracking, but knowing what to expect can significantly boost your confidence. Here are the most common interview questions for fresh graduates and how to answer them effectively.</p>

        <h2>1. "Tell me about yourself"</h2>
        <p>This is often the opening question and sets the tone for the entire interview. Structure your answer using the present-past-future format:</p>
        <ul>
          <li><strong>Present:</strong> Your current situation and key qualifications</li>
          <li><strong>Past:</strong> Relevant experiences and achievements</li>
          <li><strong>Future:</strong> Your career goals and why you're interested in this role</li>
        </ul>

        <h2>2. "Why do you want to work here?"</h2>
        <p>This question tests your research and genuine interest in the company. Your answer should demonstrate:</p>
        <ul>
          <li>Knowledge of the company's mission and values</li>
          <li>Understanding of their products or services</li>
          <li>How your goals align with their objectives</li>
        </ul>

        <h2>3. "What are your strengths and weaknesses?"</h2>
        <p>For strengths, choose qualities that are relevant to the job and provide specific examples. For weaknesses, mention a real weakness but show how you're working to improve it.</p>

        <blockquote>
          <p>Example: "My weakness is that I sometimes spend too much time perfecting details. I'm learning to balance quality with efficiency by setting time limits for tasks."</p>
        </blockquote>

        <h2>4. "Where do you see yourself in 5 years?"</h2>
        <p>Show ambition while demonstrating loyalty to the company. Focus on professional growth within the organization.</p>

        <h2>5. "Why should we hire you?"</h2>
        <p>This is your chance to sell yourself. Highlight your unique combination of skills, education, and enthusiasm that makes you the ideal candidate.</p>

        <h2>6. "Tell me about a challenge you overcame"</h2>
        <p>Use the STAR method (Situation, Task, Action, Result) to structure your answer. Choose an example that demonstrates problem-solving skills and resilience.</p>

        <h2>7. "What motivates you?"</h2>
        <p>Connect your personal motivations to the job requirements. Show that you're driven by factors that will help you succeed in the role.</p>

        <h2>8. "Do you have any questions for us?"</h2>
        <p>Always have thoughtful questions prepared. This shows your interest and helps you evaluate if the company is right for you.</p>

        <h2>Preparation Tips</h2>
        <ul>
          <li>Research the company thoroughly</li>
          <li>Practice your answers out loud</li>
          <li>Prepare specific examples and stories</li>
          <li>Plan your outfit in advance</li>
          <li>Arrive 10-15 minutes early</li>
        </ul>

        <h2>Body Language and Communication</h2>
        <p>Remember that communication is not just about what you say, but how you say it:</p>
        <ul>
          <li>Maintain eye contact</li>
          <li>Offer a firm handshake</li>
          <li>Sit up straight and lean slightly forward</li>
          <li>Speak clearly and at an appropriate pace</li>
          <li>Show enthusiasm through your tone and expressions</li>
        </ul>

        <p>With proper preparation and practice, you can confidently navigate your first job interview and make a lasting positive impression.</p>
      `
    },
    '3': {
      title: 'LinkedIn Profile Optimization for Students',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Networking',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <p>Your LinkedIn profile is your digital business card and often the first thing recruiters see when they search for candidates. For students and recent graduates, a well-optimized LinkedIn profile can be the key to landing internships, entry-level positions, and valuable networking opportunities.</p>

        <h2>1. Craft a Compelling Headline</h2>
        <p>Your headline appears right below your name and is one of the most important elements of your profile. Don't just use your current title or "Student at [University]". Instead, create a headline that showcases your aspirations and key skills.</p>

        <blockquote>
          <p>Example: "Computer Science Student | Aspiring Software Developer | Python & React Enthusiast | Seeking Summer 2024 Internship"</p>
        </blockquote>

        <h2>2. Professional Profile Photo</h2>
        <p>Your profile photo should be professional, high-quality, and show your face clearly. Here are the key requirements:</p>
        <ul>
          <li>Use a high-resolution headshot</li>
          <li>Dress professionally (business casual or formal)</li>
          <li>Smile naturally and make eye contact with the camera</li>
          <li>Use a clean, neutral background</li>
          <li>Ensure your face takes up 60% of the frame</li>
        </ul>

        <h2>3. Write a Powerful Summary</h2>
        <p>Your summary is your elevator pitch. It should be 3-5 paragraphs that tell your professional story, highlight your skills, and express your career goals. For students, focus on:</p>
        <ul>
          <li>Your field of study and academic achievements</li>
          <li>Relevant projects, internships, or part-time work</li>
          <li>Technical skills and certifications</li>
          <li>Career aspirations and what you're looking for</li>
          <li>Personal interests that relate to your professional goals</li>
        </ul>

        <h2>4. Optimize Your Experience Section</h2>
        <p>Even as a student, you likely have more experience than you think. Include:</p>
        <ul>
          <li><strong>Internships:</strong> Highlight specific projects and achievements</li>
          <li><strong>Part-time jobs:</strong> Focus on transferable skills</li>
          <li><strong>Volunteer work:</strong> Demonstrate leadership and community involvement</li>
          <li><strong>Academic projects:</strong> Showcase technical skills and problem-solving abilities</li>
          <li><strong>Leadership roles:</strong> Student organizations, clubs, or team captain positions</li>
        </ul>

        <h2>5. Showcase Your Education</h2>
        <p>For students, the education section is crucial. Include:</p>
        <ul>
          <li>Your degree, major, and expected graduation date</li>
          <li>GPA (if 3.5 or higher)</li>
          <li>Relevant coursework</li>
          <li>Academic honors and awards</li>
          <li>Study abroad experiences</li>
        </ul>

        <h2>6. Build Your Skills Section</h2>
        <p>Add relevant skills and get endorsements from classmates, professors, and colleagues. Focus on:</p>
        <ul>
          <li>Technical skills (programming languages, software, tools)</li>
          <li>Soft skills (communication, leadership, teamwork)</li>
          <li>Industry-specific skills</li>
          <li>Language proficiencies</li>
        </ul>

        <h2>7. Request Strategic Recommendations</h2>
        <p>Recommendations add credibility to your profile. Ask for recommendations from:</p>
        <ul>
          <li>Professors who know your work well</li>
          <li>Internship supervisors or managers</li>
          <li>Colleagues from group projects</li>
          <li>Leaders from organizations you've been involved with</li>
        </ul>

        <h2>8. Use Keywords Strategically</h2>
        <p>Include industry-relevant keywords throughout your profile to improve searchability:</p>
        <ul>
          <li>Research job descriptions in your target field</li>
          <li>Include technical skills and tools</li>
          <li>Use industry terminology</li>
          <li>Add location-specific keywords if relevant</li>
        </ul>

        <h2>9. Stay Active and Engaged</h2>
        <p>LinkedIn rewards active users with better visibility:</p>
        <ul>
          <li>Share industry-relevant articles and insights</li>
          <li>Comment thoughtfully on posts in your network</li>
          <li>Publish original content about your learning journey</li>
          <li>Celebrate achievements and milestones</li>
          <li>Engage with your university's alumni network</li>
        </ul>

        <h2>10. Network Strategically</h2>
        <p>Building your network as a student:</p>
        <ul>
          <li>Connect with classmates and professors</li>
          <li>Reach out to alumni from your university</li>
          <li>Connect with professionals you meet at career fairs</li>
          <li>Join relevant LinkedIn groups and participate in discussions</li>
          <li>Follow companies you're interested in working for</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Using an unprofessional profile photo</li>
          <li>Having an incomplete profile</li>
          <li>Not customizing your LinkedIn URL</li>
          <li>Focusing only on academic achievements</li>
          <li>Not engaging with your network</li>
          <li>Using the same content as your resume</li>
        </ul>

        <h2>Final Tips</h2>
        <p>Remember that LinkedIn is a long-term investment in your career. Start building your profile early, keep it updated, and use it as a tool to learn about your industry and connect with professionals. A strong LinkedIn presence can open doors to opportunities you never knew existed.</p>

        <p>Your LinkedIn profile should complement your resume, not duplicate it. Use this platform to show your personality, passion, and professional growth journey.</p>
      `
    },
    '4': {
      title: 'Salary Negotiation Tips for Entry-Level Positions',
      author: 'David Park',
      date: '2024-01-08',
      readTime: '5 min read',
      category: 'Career Advice',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <p>Many new graduates believe they have no leverage when it comes to salary negotiation, but this couldn't be further from the truth. Even for entry-level positions, there's often room for negotiation, and employers expect candidates to advocate for themselves professionally.</p>

        <h2>1. Do Your Research First</h2>
        <p>Knowledge is power in salary negotiations. Before any discussion, research thoroughly:</p>
        <ul>
          <li><strong>Industry standards:</strong> Use sites like Glassdoor, PayScale, and LinkedIn Salary Insights</li>
          <li><strong>Geographic factors:</strong> Salaries vary significantly by location</li>
          <li><strong>Company size:</strong> Startups vs. corporations often have different compensation structures</li>
          <li><strong>Your university's career center:</strong> They often have salary data for recent graduates</li>
        </ul>

        <blockquote>
          <p>"Preparation is key. Know your worth before you walk into that room." - Career Coach Sarah Martinez</p>
        </blockquote>

        <h2>2. Understand Your Value Proposition</h2>
        <p>As a new graduate, your value isn't just in experience. Highlight:</p>
        <ul>
          <li>Relevant internships and projects</li>
          <li>Technical skills and certifications</li>
          <li>Academic achievements and honors</li>
          <li>Leadership experience and extracurricular activities</li>
          <li>Fresh perspective and eagerness to learn</li>
          <li>Relevant coursework and specialized knowledge</li>
        </ul>

        <h2>3. Timing is Everything</h2>
        <p>When to negotiate:</p>
        <ul>
          <li><strong>After receiving a job offer:</strong> Never negotiate before you have an offer in hand</li>
          <li><strong>Within 24-48 hours:</strong> Don't wait too long, but take time to prepare</li>
          <li><strong>During business hours:</strong> Schedule a proper conversation, don't negotiate via email</li>
        </ul>

        <h2>4. What You Can Negotiate</h2>
        <p>Salary isn't the only component of compensation. Consider negotiating:</p>
        <ul>
          <li><strong>Base salary:</strong> The most obvious component</li>
          <li><strong>Signing bonus:</strong> One-time payment to offset relocation or other costs</li>
          <li><strong>Start date:</strong> Time to finish school projects or take a break</li>
          <li><strong>Professional development:</strong> Conference attendance, training, or certification costs</li>
          <li><strong>Flexible work arrangements:</strong> Remote work days or flexible hours</li>
          <li><strong>Vacation time:</strong> Additional PTO days</li>
          <li><strong>Equipment:</strong> Laptop upgrade, monitor, or other work tools</li>
        </ul>

        <h2>5. How to Approach the Conversation</h2>
        <p>Structure your negotiation professionally:</p>

        <h3>Opening</h3>
        <p>"Thank you for the offer. I'm very excited about the opportunity to join [Company] and contribute to [specific project/team]. I'd like to discuss the compensation package."</p>

        <h3>Present Your Case</h3>
        <p>"Based on my research of industry standards and considering my [specific qualifications], I was hoping we could discuss a salary of $X."</p>

        <h3>Be Specific</h3>
        <p>Don't say "I was hoping for more." Instead, provide a specific number based on your research.</p>

        <h2>6. Common Negotiation Strategies</h2>

        <h3>The Anchoring Strategy</h3>
        <p>Start with a number slightly higher than what you want, giving room for compromise.</p>

        <h3>The Package Approach</h3>
        <p>If they can't budge on salary, ask for other benefits that have value to you.</p>

        <h3>The Future Value Approach</h3>
        <p>"I understand this is the standard starting salary. Could we discuss a performance review at 6 months with the possibility of a salary adjustment?"</p>

        <h2>7. What NOT to Do</h2>
        <ul>
          <li>Don't make it personal ("I need more money for rent")</li>
          <li>Don't compare to friends' salaries</li>
          <li>Don't negotiate via email for the initial discussion</li>
          <li>Don't give ultimatums</li>
          <li>Don't negotiate multiple times for the same position</li>
          <li>Don't lie about competing offers</li>
        </ul>

        <h2>8. Handling Common Responses</h2>

        <h3>"This is our standard starting salary"</h3>
        <p>Response: "I understand. Given my [specific qualifications], is there flexibility in other areas of the compensation package?"</p>

        <h3>"We don't have budget for more"</h3>
        <p>Response: "I appreciate the transparency. Could we explore non-monetary benefits or discuss a timeline for salary review?"</p>

        <h3>"We need to think about it"</h3>
        <p>Response: "Of course. When would be a good time to follow up on this discussion?"</p>

        <h2>9. When to Accept and When to Walk Away</h2>

        <h3>Accept if:</h3>
        <ul>
          <li>The offer is within market range</li>
          <li>The company offers excellent learning opportunities</li>
          <li>The role aligns with your career goals</li>
          <li>You've negotiated some improvements to the package</li>
        </ul>

        <h3>Consider walking away if:</h3>
        <ul>
          <li>The offer is significantly below market rate</li>
          <li>The company is inflexible on all aspects of compensation</li>
          <li>You have better alternatives</li>
          <li>The negotiation process reveals red flags about company culture</li>
        </ul>

        <h2>10. After the Negotiation</h2>
        <ul>
          <li>Get everything in writing</li>
          <li>Express gratitude regardless of the outcome</li>
          <li>Maintain professionalism</li>
          <li>If you accept, be prepared to deliver on your promises</li>
        </ul>

        <h2>Sample Scripts</h2>

        <h3>Initial Negotiation</h3>
        <p>"Thank you for the offer of $55,000. I'm excited about joining the team. Based on my research and considering my internship experience at [Company] and my specialization in [Area], I was hoping we could discuss a starting salary of $60,000."</p>

        <h3>Alternative Benefits</h3>
        <p>"I understand the salary range is fixed. Would it be possible to discuss additional vacation days or a professional development budget for conferences and training?"</p>

        <h2>Final Thoughts</h2>
        <p>Remember, negotiation is a normal part of the hiring process. Employers expect it, and approaching it professionally can actually increase their respect for you. The worst they can say is no, and you'll be in the same position you started in.</p>

        <p>Most importantly, view this as the beginning of a professional relationship, not a one-time transaction. Your goal is to reach a mutually beneficial agreement that sets you up for success in your new role.</p>
      `
    },
    '5': {
      title: 'Building a Portfolio That Showcases Your Skills',
      author: 'Lisa Wang',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Portfolio',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <p>In today's competitive job market, a well-crafted portfolio can be the difference between landing your dream job and getting lost in a pile of resumes. Whether you're in tech, design, marketing, or any creative field, a portfolio showcases your skills in action and provides tangible proof of your capabilities.</p>

        <h2>1. Understanding the Purpose of Your Portfolio</h2>
        <p>Your portfolio serves multiple purposes:</p>
        <ul>
          <li><strong>Demonstrates practical skills:</strong> Shows what you can actually do, not just what you know</li>
          <li><strong>Tells your story:</strong> Reveals your thought process and problem-solving approach</li>
          <li><strong>Differentiates you:</strong> Sets you apart from other candidates with similar qualifications</li>
          <li><strong>Builds credibility:</strong> Provides concrete evidence of your abilities</li>
          <li><strong>Shows growth:</strong> Illustrates your learning journey and improvement over time</li>
        </ul>

        <h2>2. Choosing the Right Platform</h2>
        <p>Select a platform that best suits your field and technical comfort level:</p>

        <h3>For Developers:</h3>
        <ul>
          <li><strong>GitHub Pages:</strong> Free, integrates with your code repositories</li>
          <li><strong>Netlify/Vercel:</strong> Easy deployment for modern web applications</li>
          <li><strong>Personal website:</strong> Custom domain shows professionalism</li>
        </ul>

        <h3>For Designers:</h3>
        <ul>
          <li><strong>Behance:</strong> Industry-standard platform with great discoverability</li>
          <li><strong>Dribbble:</strong> Popular among UI/UX designers</li>
          <li><strong>Adobe Portfolio:</strong> Integrates well with Creative Cloud</li>
        </ul>

        <h3>For General Use:</h3>
        <ul>
          <li><strong>Squarespace/Wix:</strong> User-friendly with professional templates</li>
          <li><strong>WordPress:</strong> Highly customizable with many themes</li>
          <li><strong>Notion:</strong> Simple, clean, and increasingly popular</li>
        </ul>

        <h2>3. Essential Elements of a Strong Portfolio</h2>

        <h3>Homepage/Landing Page</h3>
        <ul>
          <li>Clear, professional headline stating who you are</li>
          <li>Brief summary of your skills and what you do</li>
          <li>High-quality professional photo</li>
          <li>Easy navigation to your work</li>
          <li>Contact information prominently displayed</li>
        </ul>

        <h3>About Page</h3>
        <ul>
          <li>Your professional story and background</li>
          <li>What drives and motivates you</li>
          <li>Your skills and expertise areas</li>
          <li>Personal interests that relate to your work</li>
          <li>Call-to-action for potential employers</li>
        </ul>

        <h3>Work/Projects Section</h3>
        <ul>
          <li>3-6 of your best projects</li>
          <li>Variety of project types and skills</li>
          <li>Clear project descriptions and your role</li>
          <li>Technologies or tools used</li>
          <li>Results and impact when possible</li>
        </ul>

        <h2>4. Selecting and Presenting Your Projects</h2>

        <h3>Quality Over Quantity</h3>
        <p>It's better to have 4-5 excellent projects than 10 mediocre ones. Choose projects that:</p>
        <ul>
          <li>Showcase different skills and technologies</li>
          <li>Demonstrate problem-solving abilities</li>
          <li>Show progression and growth</li>
          <li>Are relevant to your target roles</li>
          <li>You're genuinely proud of</li>
        </ul>

        <h3>Project Case Studies</h3>
        <p>For each project, include:</p>
        <ul>
          <li><strong>Problem statement:</strong> What challenge were you solving?</li>
          <li><strong>Your approach:</strong> How did you tackle the problem?</li>
          <li><strong>Technologies used:</strong> What tools and languages did you use?</li>
          <li><strong>Challenges faced:</strong> What obstacles did you overcome?</li>
          <li><strong>Results:</strong> What was the outcome or impact?</li>
          <li><strong>Lessons learned:</strong> What would you do differently?</li>
        </ul>

        <blockquote>
          <p>"Employers want to see your thought process, not just the final product. Show them how you think and solve problems." - Senior Developer at Google</p>
        </blockquote>

        <h2>5. Field-Specific Portfolio Tips</h2>

        <h3>Software Development</h3>
        <ul>
          <li>Include live demos and GitHub links</li>
          <li>Show clean, well-commented code</li>
          <li>Demonstrate different programming languages and frameworks</li>
          <li>Include both personal and collaborative projects</li>
          <li>Show your testing and deployment processes</li>
        </ul>

        <h3>UI/UX Design</h3>
        <ul>
          <li>Show your design process from research to final product</li>
          <li>Include wireframes, prototypes, and user testing results</li>
          <li>Demonstrate understanding of user-centered design</li>
          <li>Show before and after comparisons</li>
          <li>Include mobile and responsive designs</li>
        </ul>

        <h3>Data Science</h3>
        <ul>
          <li>Include Jupyter notebooks with clear explanations</li>
          <li>Show data visualization and storytelling skills</li>
          <li>Demonstrate different types of analysis (predictive, descriptive, etc.)</li>
          <li>Include real-world datasets when possible</li>
          <li>Show your statistical and machine learning knowledge</li>
        </ul>

        <h3>Marketing/Content</h3>
        <ul>
          <li>Show measurable results and ROI</li>
          <li>Include different content types (blog posts, social media, campaigns)</li>
          <li>Demonstrate understanding of different audiences</li>
          <li>Show your analytical and strategic thinking</li>
          <li>Include any tools and platforms you've used</li>
        </ul>

        <h2>6. Making Your Portfolio Stand Out</h2>

        <h3>Tell a Story</h3>
        <p>Don't just show what you did—explain why you did it and how you approached the problem. Employers want to understand your thinking process.</p>

        <h3>Show Personality</h3>
        <p>Let your personality shine through your writing and design choices. This helps employers envision you as part of their team.</p>

        <h3>Keep It Updated</h3>
        <p>Regularly add new projects and remove outdated ones. Your portfolio should reflect your current skill level.</p>

        <h3>Make It Interactive</h3>
        <p>Where appropriate, include interactive elements, animations, or live demos that engage visitors.</p>

        <h2>7. Technical Considerations</h2>

        <h3>Performance</h3>
        <ul>
          <li>Ensure fast loading times</li>
          <li>Optimize images and media files</li>
          <li>Test on different devices and browsers</li>
        </ul>

        <h3>Mobile Responsiveness</h3>
        <ul>
          <li>Design for mobile-first</li>
          <li>Test on various screen sizes</li>
          <li>Ensure touch-friendly navigation</li>
        </ul>

        <h3>SEO and Discoverability</h3>
        <ul>
          <li>Use relevant keywords in your content</li>
          <li>Include meta descriptions and titles</li>
          <li>Submit to search engines</li>
          <li>Share on professional networks</li>
        </ul>

        <h2>8. Common Portfolio Mistakes to Avoid</h2>
        <ul>
          <li><strong>Too much content:</strong> Overwhelming visitors with too many projects</li>
          <li><strong>Poor navigation:</strong> Making it hard to find information</li>
          <li><strong>Outdated work:</strong> Showing projects that no longer represent your skills</li>
          <li><strong>No context:</strong> Showing work without explaining your role or process</li>
          <li><strong>Broken links:</strong> Links that don't work or lead to error pages</li>
          <li><strong>Generic content:</strong> Using template text without customization</li>
          <li><strong>No contact information:</strong> Making it hard for employers to reach you</li>
        </ul>

        <h2>9. Getting Feedback and Iterating</h2>
        <p>Your portfolio is never truly finished. Regularly seek feedback from:</p>
        <ul>
          <li>Professors and mentors</li>
          <li>Industry professionals</li>
          <li>Peers and classmates</li>
          <li>Career counselors</li>
          <li>Online communities and forums</li>
        </ul>

        <h2>10. Promoting Your Portfolio</h2>
        <ul>
          <li>Include the link in your resume and email signature</li>
          <li>Share on LinkedIn and other professional networks</li>
          <li>Submit to portfolio galleries and showcases</li>
          <li>Include in job applications and cover letters</li>
          <li>Present during interviews and networking events</li>
        </ul>

        <h2>Portfolio Checklist</h2>
        <p>Before launching your portfolio, ensure you have:</p>
        <ul>
          <li>✓ Clear navigation and user-friendly design</li>
          <li>✓ Professional photo and compelling bio</li>
          <li>✓ 4-6 high-quality project case studies</li>
          <li>✓ Contact information and social links</li>
          <li>✓ Mobile-responsive design</li>
          <li>✓ Fast loading times</li>
          <li>✓ Proofread content with no typos</li>
          <li>✓ Working links and functional features</li>
          <li>✓ Updated and relevant content</li>
          <li>✓ Clear call-to-action for employers</li>
        </ul>

        <h2>Final Thoughts</h2>
        <p>Building a portfolio is an investment in your career that pays dividends over time. It's not just about showcasing your current skills—it's about demonstrating your potential and giving employers confidence in your abilities.</p>

        <p>Remember, your portfolio is a living document that should evolve with your career. Start with what you have, get it online, and continuously improve it as you gain more experience and skills.</p>

        <p>The key is to start now, even if you feel your work isn't "perfect" yet. A good portfolio that exists is infinitely better than a perfect portfolio that never gets built.</p>
      `
    },
    '6': {
      title: 'Remote Work: How to Find and Land Your First Remote Job',
      author: 'Alex Thompson',
      date: '2024-01-03',
      readTime: '10 min read',
      category: 'Remote Work',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: `
        <p>The remote work revolution has fundamentally changed the job market, creating unprecedented opportunities for new graduates to work for companies anywhere in the world. However, landing your first remote job requires a different approach than traditional job hunting. Here's your comprehensive guide to breaking into the remote work world.</p>

        <h2>1. Understanding the Remote Work Landscape</h2>
        <p>Remote work comes in several forms, and understanding these distinctions will help you target the right opportunities:</p>

        <h3>Types of Remote Work</h3>
        <ul>
          <li><strong>Fully Remote:</strong> Work from anywhere, no physical office required</li>
          <li><strong>Hybrid:</strong> Combination of remote and in-office work</li>
          <li><strong>Remote-First:</strong> Company culture built around remote work</li>
          <li><strong>Distributed:</strong> Team members spread across different locations</li>
          <li><strong>Flexible Remote:</strong> Option to work remotely occasionally</li>
        </ul>

        <h3>Industries Leading Remote Work</h3>
        <ul>
          <li>Technology and Software Development</li>
          <li>Digital Marketing and Content Creation</li>
          <li>Customer Service and Support</li>
          <li>Design and Creative Services</li>
          <li>Data Analysis and Research</li>
          <li>Education and Training</li>
          <li>Finance and Accounting</li>
          <li>Project Management</li>
        </ul>

        <h2>2. Essential Skills for Remote Work Success</h2>
        <p>Beyond technical skills, remote work requires specific soft skills that employers actively look for:</p>

        <h3>Communication Skills</h3>
        <ul>
          <li>Clear written communication</li>
          <li>Active listening in virtual meetings</li>
          <li>Ability to ask clarifying questions</li>
          <li>Regular status updates and check-ins</li>
          <li>Cross-cultural communication awareness</li>
        </ul>

        <h3>Self-Management</h3>
        <ul>
          <li>Time management and prioritization</li>
          <li>Self-motivation and discipline</li>
          <li>Goal setting and tracking</li>
          <li>Problem-solving independence</li>
          <li>Adaptability to changing priorities</li>
        </ul>

        <h3>Technical Proficiency</h3>
        <ul>
          <li>Video conferencing tools (Zoom, Teams, Google Meet)</li>
          <li>Collaboration platforms (Slack, Microsoft Teams, Discord)</li>
          <li>Project management tools (Asana, Trello, Notion)</li>
          <li>Cloud storage and file sharing</li>
          <li>Basic troubleshooting skills</li>
        </ul>

        <blockquote>
          <p>"Remote work isn't just about working from home—it's about being a proactive, communicative team member who can deliver results independently." - Remote Team Lead at Buffer</p>
        </blockquote>

        <h2>3. Where to Find Remote Job Opportunities</h2>

        <h3>Specialized Remote Job Boards</h3>
        <ul>
          <li><strong>Remote.co:</strong> Curated remote job listings across industries</li>
          <li><strong>We Work Remotely:</strong> Large database of remote positions</li>
          <li><strong>FlexJobs:</strong> Vetted flexible and remote opportunities</li>
          <li><strong>AngelList:</strong> Startup remote positions</li>
          <li><strong>Remotive:</strong> Tech-focused remote jobs</li>
          <li><strong>NoDesk:</strong> Remote work opportunities and resources</li>
        </ul>

        <h3>Traditional Job Boards with Remote Filters</h3>
        <ul>
          <li>LinkedIn (use "Remote" location filter)</li>
          <li>Indeed (search "remote" in location)</li>
          <li>Glassdoor (filter by remote work)</li>
          <li>ZipRecruiter (remote job category)</li>
        </ul>

        <h3>Company Career Pages</h3>
        <p>Many companies now have dedicated remote work sections on their career pages. Research companies known for remote-first culture:</p>
        <ul>
          <li>GitLab, Buffer, Zapier (fully remote)</li>
          <li>Shopify, Twitter, Spotify (remote-friendly)</li>
          <li>Automattic, InVision, Basecamp (distributed teams)</li>
        </ul>

        <h2>4. Crafting Your Remote-Ready Application</h2>

        <h3>Resume Optimization</h3>
        <ul>
          <li><strong>Highlight remote experience:</strong> Even if it's just online coursework or virtual internships</li>
          <li><strong>Emphasize self-direction:</strong> Projects you completed independently</li>
          <li><strong>Show digital collaboration:</strong> Group projects using online tools</li>
          <li><strong>Include relevant tools:</strong> List collaboration and productivity software you know</li>
          <li><strong>Quantify achievements:</strong> Use metrics to show your impact</li>
        </ul>

        <h3>Cover Letter for Remote Positions</h3>
        <p>Your cover letter should address remote work specifically:</p>
        <ul>
          <li>Explain why you want to work remotely</li>
          <li>Describe your home office setup</li>
          <li>Highlight relevant remote work experience</li>
          <li>Show understanding of remote work challenges</li>
          <li>Demonstrate communication skills through your writing</li>
        </ul>

        <h2>5. Building Remote Work Experience</h2>
        <p>If you lack remote work experience, here's how to build it:</p>

        <h3>While Still in School</h3>
        <ul>
          <li>Take online courses and earn certifications</li>
          <li>Participate in virtual hackathons and competitions</li>
          <li>Join online study groups and collaborative projects</li>
          <li>Volunteer for remote opportunities with nonprofits</li>
          <li>Freelance on platforms like Upwork or Fiverr</li>
        </ul>

        <h3>Entry-Level Remote Opportunities</h3>
        <ul>
          <li>Virtual internships</li>
          <li>Remote customer service roles</li>
          <li>Content creation and social media management</li>
          <li>Online tutoring and teaching</li>
          <li>Data entry and research positions</li>
        </ul>

        <h2>6. Acing the Remote Job Interview</h2>

        <h3>Technical Preparation</h3>
        <ul>
          <li>Test your internet connection and backup options</li>
          <li>Ensure your camera and microphone work properly</li>
          <li>Choose a professional, well-lit background</li>
          <li>Have the interviewer's contact information ready</li>
          <li>Close unnecessary applications to avoid distractions</li>
        </ul>

        <h3>Common Remote Work Interview Questions</h3>
        <ul>
          <li>"How do you stay motivated when working alone?"</li>
          <li>"Describe your ideal home office setup."</li>
          <li>"How do you handle communication across time zones?"</li>
          <li>"Tell me about a time you had to solve a problem independently."</li>
          <li>"How do you prioritize tasks when working remotely?"</li>
          <li>"What tools do you use for project management and communication?"</li>
        </ul>

        <h3>Questions to Ask Employers</h3>
        <ul>
          <li>"What does a typical day look like for this remote role?"</li>
          <li>"How does the team collaborate and communicate?"</li>
          <li>"What tools and software will I be expected to use?"</li>
          <li>"How do you measure success for remote employees?"</li>
          <li>"What support is available for remote workers?"</li>
          <li>"Are there opportunities for in-person team meetings?"</li>
        </ul>

        <h2>7. Setting Up for Remote Work Success</h2>

        <h3>Home Office Essentials</h3>
        <ul>
          <li><strong>Reliable internet:</strong> High-speed connection with backup options</li>
          <li><strong>Dedicated workspace:</strong> Separate area for work, even if small</li>
          <li><strong>Ergonomic setup:</strong> Proper chair, desk height, and monitor position</li>
          <li><strong>Good lighting:</strong> Natural light or quality desk lamp</li>
          <li><strong>Noise management:</strong> Quiet space or noise-canceling headphones</li>
        </ul>

        <h3>Essential Software and Tools</h3>
        <ul>
          <li>Video conferencing: Zoom, Google Meet, Microsoft Teams</li>
          <li>Communication: Slack, Microsoft Teams, Discord</li>
          <li>Project management: Asana, Trello, Monday.com</li>
          <li>File sharing: Google Drive, Dropbox, OneDrive</li>
          <li>Time tracking: Toggl, RescueTime, Clockify</li>
          <li>Password management: 1Password, LastPass, Bitwarden</li>
        </ul>

        <h2>8. Overcoming Common Remote Work Challenges</h2>

        <h3>Isolation and Loneliness</h3>
        <ul>
          <li>Join virtual coworking sessions</li>
          <li>Participate in online communities</li>
          <li>Schedule regular video calls with colleagues</li>
          <li>Work from coffee shops or libraries occasionally</li>
          <li>Attend virtual networking events</li>
        </ul>

        <h3>Work-Life Balance</h3>
        <ul>
          <li>Set clear work hours and stick to them</li>
          <li>Create physical boundaries between work and personal space</li>
          <li>Take regular breaks and lunch away from your desk</li>
          <li>Develop end-of-workday rituals</li>
          <li>Use separate devices or accounts for work and personal use</li>
        </ul>

        <h3>Communication Challenges</h3>
        <ul>
          <li>Over-communicate rather than under-communicate</li>
          <li>Use video calls for important discussions</li>
          <li>Document decisions and action items</li>
          <li>Be mindful of time zones when scheduling</li>
          <li>Ask for clarification when needed</li>
        </ul>

        <h2>9. Building Your Remote Work Network</h2>

        <h3>Online Communities</h3>
        <ul>
          <li>Remote Work Association</li>
          <li>Nomad List (for digital nomads)</li>
          <li>Remote Year community</li>
          <li>Industry-specific Slack groups</li>
          <li>LinkedIn remote work groups</li>
        </ul>

        <h3>Virtual Networking Strategies</h3>
        <ul>
          <li>Attend online conferences and webinars</li>
          <li>Participate in Twitter chats</li>
          <li>Join virtual meetups and events</li>
          <li>Engage with content on LinkedIn</li>
          <li>Contribute to online forums and discussions</li>
        </ul>

        <h2>10. Red Flags to Watch Out For</h2>
        <p>Not all remote job opportunities are legitimate. Watch for these warning signs:</p>
        <ul>
          <li>Requests for upfront payment or personal financial information</li>
          <li>Vague job descriptions or unrealistic salary promises</li>
          <li>Poor communication or unprofessional correspondence</li>
          <li>Pressure to make quick decisions</li>
          <li>No clear company information or website</li>
          <li>Requests to use your personal accounts or equipment</li>
        </ul>

        <h2>Future of Remote Work</h2>
        <p>Remote work is here to stay, with trends pointing toward:</p>
        <ul>
          <li>Increased hybrid work models</li>
          <li>Better remote work tools and technologies</li>
          <li>More companies adopting remote-first policies</li>
          <li>Greater focus on results over hours worked</li>
          <li>Improved work-life balance expectations</li>
        </ul>

        <h2>Action Plan for Landing Your First Remote Job</h2>
        <ol>
          <li><strong>Week 1-2:</strong> Assess your skills and identify target roles</li>
          <li><strong>Week 3-4:</strong> Set up your home office and learn remote work tools</li>
          <li><strong>Week 5-6:</strong> Optimize your resume and LinkedIn profile for remote work</li>
          <li><strong>Week 7-8:</strong> Start applying to remote positions and building your network</li>
          <li><strong>Week 9-10:</strong> Practice virtual interviewing and follow up on applications</li>
          <li><strong>Ongoing:</strong> Continue learning, networking, and refining your approach</li>
        </ol>

        <h2>Final Thoughts</h2>
        <p>Landing your first remote job may take time and persistence, but the opportunities are vast and growing. Focus on developing the skills that make remote workers successful: communication, self-management, and technical proficiency.</p>

        <p>Remember that remote work isn't just about the freedom to work from anywhere—it's about being a valuable team member who can contribute effectively regardless of location. Approach your remote job search with professionalism, preparation, and patience, and you'll be well on your way to joining the remote work revolution.</p>

        <p>The key is to start where you are, use what you have, and do what you can. Your first remote job is just the beginning of a career that offers flexibility, global opportunities, and the chance to work with amazing teams from around the world.</p>
      `
    }
  };

  const post = blogPosts[postId];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <button
              onClick={onBack}
              className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </button>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          
          <div className="p-8">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Tag className="h-3 w-3" />
                <span>{post.category}</span>
              </span>
              <div className="flex items-center space-x-1 text-gray-500 text-sm">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500 text-sm">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Article Label */}
            <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
              <BookOpen className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-gray-600 text-sm">Article</span>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-justify text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.8',
                fontSize: '17px',
                letterSpacing: '0.3px'
              }}
            />

            {/* Call to Action */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Ready to Create Your Professional Resume?</h3>
              <p className="text-blue-700 mb-4">
                Use our free AI-powered resume builder to create a professional resume that follows all the best practices mentioned in this article.
              </p>
              <button
                onClick={onBack}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Build My Resume Free
              </button>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
};

export default BlogPost;