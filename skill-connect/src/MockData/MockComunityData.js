// Mock data for community feed and courses
export const mockPosts = [
  {
    id: 1,
    author: {
      id: 1,
      name: 'Sarah Wilson',
      role: 'Teacher',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      badges: ['Top Tutor', 'Expert Verified'],
      bio: 'JavaScript expert with 5+ years of teaching experience',
      skills: ['React', 'Node.js', 'TypeScript']
    },
    category: 'tutorial',
    title: 'Free Python Resources for Beginners',
    content: 'I\'ve compiled a comprehensive PDF with Python basics, exercises, and projects. Perfect for anyone starting their coding journey! 🐍',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500',
    tags: ['Python', 'Beginner', 'Resources'],
    likes: 45,
    comments: 12,
    shares: 8,
    bookmarks: 23,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    isLiked: false,
    isBookmarked: true
  },
  {
    id: 2,
    author: {
      id: 2,
      name: 'Alex Chen',
      role: 'Student',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      badges: ['Active Learner'],
      bio: 'Computer Science student passionate about web development',
      skills: ['JavaScript', 'React', 'CSS']
    },
    category: 'question',
    title: 'Can someone explain recursion with a simple example?',
    content: 'I\'m struggling to understand recursion in programming. Could someone provide a simple example with explanation? Thanks! 🤔',
    tags: ['Programming', 'Help', 'Recursion'],
    likes: 23,
    comments: 18,
    shares: 3,
    bookmarks: 15,
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    isLiked: true,
    isBookmarked: false
  },
  {
    id: 3,
    author: {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      role: 'Teacher',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      badges: ['PhD Verified', 'Top Tutor'],
      bio: 'Mathematics professor with 10+ years of experience',
      skills: ['Calculus', 'Statistics', 'Linear Algebra']
    },
    category: 'tip',
    title: '5 Study Tips for Better Math Understanding',
    content: 'Here are my top 5 tips for mastering mathematics:\n\n1. Practice daily, even if just 15 minutes\n2. Understand concepts before memorizing formulas\n3. Work through problems step by step\n4. Don\'t skip the "easy" problems\n5. Teach someone else what you\'ve learned\n\nWhat works best for you? 📚',
    tags: ['Math', 'StudyTips', 'Learning'],
    likes: 67,
    comments: 24,
    shares: 15,
    bookmarks: 42,
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    isLiked: false,
    isBookmarked: false
  },
  {
    id: 4,
    author: {
      id: 4,
      name: 'Michael Kumar',
      role: 'Teacher',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      badges: ['Rising Star'],
      bio: 'UI/UX Designer and teacher',
      skills: ['Figma', 'Adobe XD', 'Design Systems']
    },
    category: 'announcement',
    title: 'Free Design Workshop This Weekend!',
    content: 'Join me this Saturday for a free 2-hour workshop on "Design Thinking Fundamentals". We\'ll cover user research, wireframing, and prototyping. Limited spots available! 🎨',
    tags: ['Design', 'Workshop', 'Free'],
    likes: 89,
    comments: 31,
    shares: 22,
    bookmarks: 56,
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    isLiked: true,
    isBookmarked: true
  }
];

export const mockComments = {
  1: [
    {
      id: 1,
      postId: 1,
      author: {
        name: 'John Doe',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        role: 'Student'
      },
      content: 'This is exactly what I needed! Thank you so much for sharing.',
      likes: 5,
      createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
      replies: []
    },
    {
      id: 2,
      postId: 1,
      author: {
        name: 'Lisa Wang',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
        role: 'Student'
      },
      content: 'Could you also share some advanced Python resources?',
      likes: 3,
      createdAt: new Date(Date.now() - 30 * 60 * 1000),
      replies: [
        {
          id: 3,
          author: {
            name: 'Sarah Wilson',
            avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
            role: 'Teacher'
          },
          content: 'I\'ll create an advanced guide next week! Stay tuned.',
          likes: 2,
          createdAt: new Date(Date.now() - 15 * 60 * 1000)
        }
      ]
    }
  ],
  2: [
    {
      id: 4,
      postId: 2,
      author: {
        name: 'David Kim',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
        role: 'Teacher'
      },
      content: 'Great question! Think of recursion like Russian dolls - each function call contains a smaller version of itself until you reach the base case.',
      likes: 12,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
      replies: []
    }
  ]
};

export const mockCourseData = [
  {
    id: 101,
    title: 'Complete React Development Bootcamp',
    teacher: {
      id: 1,
      name: 'Sarah Wilson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9,
      students: 1250
    },
    category: 'Programming',
    subject: 'JavaScript',
    level: 'Intermediate',
    rating: 4.8,
    reviews: 324,
    price: 299,
    originalPrice: 399,
    duration: '12 weeks',
    lessons: 45,
    students: 1250,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Master React from basics to advanced concepts. Build real-world projects and learn industry best practices.',
    whatYouWillLearn: [
      'Build modern web applications with React',
      'Understand component-based architecture',
      'Master React hooks and state management',
      'Create responsive and interactive UIs',
      'Deploy applications to production',
      'Work with APIs and external data'
    ],
    syllabus: [
      {
        week: 1,
        title: 'React Fundamentals',
        lessons: ['Introduction to React', 'JSX and Components', 'Props and State'],
        duration: '3 hours'
      },
      {
        week: 2,
        title: 'Advanced Components',
        lessons: ['Event Handling', 'Conditional Rendering', 'Lists and Keys'],
        duration: '4 hours'
      },
      {
        week: 3,
        title: 'React Hooks',
        lessons: ['useState Hook', 'useEffect Hook', 'Custom Hooks'],
        duration: '5 hours'
      },
      {
        week: 4,
        title: 'State Management',
        lessons: ['Context API', 'Redux Basics', 'Redux Toolkit'],
        duration: '6 hours'
      }
    ],
    requirements: [
      'Basic knowledge of HTML, CSS, and JavaScript',
      'Familiarity with ES6+ features',
      'A computer with internet connection'
    ],
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
    lastUpdated: '2025-01-15',
    language: 'English',
    hasSubtitles: true,
    certificate: true
  },
  {
    id: 102,
    title: 'Python for Data Science Masterclass',
    teacher: {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9,
      students: 890
    },
    category: 'Data Science',
    subject: 'Python',
    level: 'Beginner',
    rating: 4.7,
    reviews: 156,
    price: 249,
    originalPrice: 349,
    duration: '10 weeks',
    lessons: 38,
    students: 890,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Learn Python programming and data science from scratch. Master pandas, numpy, matplotlib, and machine learning basics.',
    whatYouWillLearn: [
      'Python programming fundamentals',
      'Data manipulation with pandas',
      'Data visualization with matplotlib and seaborn',
      'Statistical analysis and hypothesis testing',
      'Introduction to machine learning',
      'Real-world data science projects'
    ],
    syllabus: [
      {
        week: 1,
        title: 'Python Basics',
        lessons: ['Variables and Data Types', 'Control Structures', 'Functions'],
        duration: '4 hours'
      },
      {
        week: 2,
        title: 'Data Structures',
        lessons: ['Lists and Tuples', 'Dictionaries and Sets', 'File Handling'],
        duration: '4 hours'
      },
      {
        week: 3,
        title: 'NumPy Fundamentals',
        lessons: ['Arrays and Operations', 'Mathematical Functions', 'Broadcasting'],
        duration: '3 hours'
      }
    ],
    requirements: [
      'No prior programming experience required',
      'Basic mathematics knowledge',
      'Computer with Python installed'
    ],
    tags: ['Python', 'Data Science', 'Machine Learning', 'Analytics'],
    lastUpdated: '2025-01-10',
    language: 'English',
    hasSubtitles: true,
    certificate: true
  },
  {
    id: 103,
    title: 'UI/UX Design Complete Course',
    teacher: {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.8,
      students: 567
    },
    category: 'Design',
    subject: 'UI/UX',
    level: 'Beginner',
    rating: 4.9,
    reviews: 89,
    price: 199,
    originalPrice: 299,
    duration: '8 weeks',
    lessons: 32,
    students: 567,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Learn UI/UX design from scratch. Master Figma, design principles, and create stunning user interfaces.',
    whatYouWillLearn: [
      'Design thinking and user research',
      'Wireframing and prototyping',
      'Visual design principles',
      'Figma mastery',
      'User testing and iteration',
      'Portfolio development'
    ],
    syllabus: [
      {
        week: 1,
        title: 'Design Fundamentals',
        lessons: ['Design Thinking Process', 'User Research Methods', 'Personas and User Stories'],
        duration: '3 hours'
      },
      {
        week: 2,
        title: 'Wireframing',
        lessons: ['Low-fidelity Wireframes', 'Information Architecture', 'User Flow Diagrams'],
        duration: '4 hours'
      }
    ],
    requirements: [
      'No prior design experience required',
      'Computer with internet access',
      'Figma account (free)'
    ],
    tags: ['UI/UX', 'Design', 'Figma', 'User Experience'],
    lastUpdated: '2025-01-12',
    language: 'English',
    hasSubtitles: false,
    certificate: true
  }
];

export const mockTrendingTags = [
  { name: 'Python', count: 245 },
  { name: 'JavaScript', count: 189 },
  { name: 'React', count: 156 },
  { name: 'Math', count: 134 },
  { name: 'Design', count: 98 },
  { name: 'StudyTips', count: 87 },
  { name: 'WebDev', count: 76 },
  { name: 'DataScience', count: 65 }
];

export const mockSuggestedTeachers = [
  {
    id: 1,
    name: 'Sarah Wilson',
    subject: 'JavaScript',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4.9,
    students: 45
  },
  {
    id: 2,
    name: 'Michael Chen',
    subject: 'Python',
    avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4.8,
    students: 62
  }
];

export const mockUpcomingClasses = [
  {
    id: 1,
    title: 'React Hooks Deep Dive',
    teacher: 'Sarah Wilson',
    time: '2:00 PM Today',
    subject: 'JavaScript'
  },
  {
    id: 2,
    title: 'Python Data Analysis',
    teacher: 'Michael Chen',
    time: 'Tomorrow 10:00 AM',
    subject: 'Python'
  }
];