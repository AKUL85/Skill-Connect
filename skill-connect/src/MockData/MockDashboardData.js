// Mock data for dashboards
export const mockStudentData = {
  profile: {
    id: 1,
    name: 'Akul Biswas',
    email: 'akul@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'student',
    joinedDate: '2024-09-15',
    totalCoursesEnrolled: 4,
    completedCourses: 1,
    totalHoursLearned: 45,
    currentStreak: 7
  },
  enrolledCourses: [
    {
      id: 101,
      title: 'Complete React Development Bootcamp',
      teacher: 'Sarah Wilson',
      teacherAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      progress: 65,
      totalLessons: 45,
      completedLessons: 29,
      nextLesson: 'React Router Implementation',
      nextLessonDate: '2025-01-20T14:00:00Z',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Programming',
      enrolledDate: '2024-12-01'
    },
    {
      id: 201,
      title: 'Python for Data Science',
      teacher: 'Michael Chen',
      teacherAvatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      progress: 30,
      totalLessons: 38,
      completedLessons: 11,
      nextLesson: 'Pandas DataFrames',
      nextLessonDate: '2025-01-21T10:00:00Z',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Data Science',
      enrolledDate: '2024-11-15'
    },
    {
      id: 301,
      title: 'UI/UX Design Fundamentals',
      teacher: 'Emily Rodriguez',
      teacherAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      progress: 80,
      totalLessons: 32,
      completedLessons: 26,
      nextLesson: 'User Testing Methods',
      nextLessonDate: '2025-01-22T16:00:00Z',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Design',
      enrolledDate: '2024-10-20'
    }
  ],
  upcomingClasses: [
    {
      id: 1,
      title: 'React Hooks Deep Dive',
      teacher: 'Sarah Wilson',
      teacherAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2025-01-20T14:00:00Z',
      duration: 90,
      type: 'live',
      meetingLink: '/classroom/1',
      course: 'Complete React Development Bootcamp'
    },
    {
      id: 2,
      title: 'Data Visualization with Matplotlib',
      teacher: 'Michael Chen',
      teacherAvatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2025-01-21T10:00:00Z',
      duration: 60,
      type: 'live',
      meetingLink: '/classroom/2',
      course: 'Python for Data Science'
    },
    {
      id: 3,
      title: 'Design System Workshop',
      teacher: 'Emily Rodriguez',
      teacherAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: '2025-01-22T16:00:00Z',
      duration: 120,
      type: 'workshop',
      meetingLink: '/classroom/3',
      course: 'UI/UX Design Fundamentals'
    }
  ],
  assignments: [
    {
      id: 1,
      title: 'Build a Todo App with React',
      course: 'Complete React Development Bootcamp',
      teacher: 'Sarah Wilson',
      dueDate: '2025-01-25T23:59:00Z',
      status: 'pending',
      description: 'Create a fully functional todo application using React hooks and local storage.',
      maxPoints: 100,
      submissionFormat: ['PDF', 'ZIP', 'GitHub Link']
    },
    {
      id: 2,
      title: 'Data Analysis Report',
      course: 'Python for Data Science',
      teacher: 'Michael Chen',
      dueDate: '2025-01-28T23:59:00Z',
      status: 'submitted',
      description: 'Analyze the provided dataset and create a comprehensive report with visualizations.',
      maxPoints: 150,
      submissionFormat: ['PDF', 'Jupyter Notebook'],
      submittedDate: '2025-01-18T15:30:00Z',
      grade: 85,
      feedback: 'Great analysis! Your visualizations are clear and insightful. Consider adding more statistical tests for deeper insights.'
    },
    {
      id: 3,
      title: 'User Interface Redesign',
      course: 'UI/UX Design Fundamentals',
      teacher: 'Emily Rodriguez',
      dueDate: '2025-01-30T23:59:00Z',
      status: 'graded',
      description: 'Redesign the user interface of a mobile app following modern design principles.',
      maxPoints: 120,
      submissionFormat: ['Figma Link', 'PDF'],
      submittedDate: '2025-01-17T20:15:00Z',
      grade: 95,
      feedback: 'Excellent work! Your design is modern, user-friendly, and follows all the principles we discussed. The color scheme is particularly well chosen.'
    }
  ],
  notes: [
    {
      id: 1,
      title: 'React Fundamentals Cheat Sheet',
      course: 'Complete React Development Bootcamp',
      teacher: 'Sarah Wilson',
      uploadDate: '2025-01-15T10:00:00Z',
      fileType: 'PDF',
      fileSize: '2.5 MB',
      downloadUrl: '#',
      category: 'Reference'
    },
    {
      id: 2,
      title: 'Python Data Types and Operations',
      course: 'Python for Data Science',
      teacher: 'Michael Chen',
      uploadDate: '2025-01-14T14:30:00Z',
      fileType: 'PDF',
      fileSize: '1.8 MB',
      downloadUrl: '#',
      category: 'Lecture Notes'
    },
    {
      id: 3,
      title: 'Design Principles Video Tutorial',
      course: 'UI/UX Design Fundamentals',
      teacher: 'Emily Rodriguez',
      uploadDate: '2025-01-13T16:45:00Z',
      fileType: 'MP4',
      fileSize: '45.2 MB',
      downloadUrl: '#',
      category: 'Video'
    }
  ],
  communityHighlights: [
    {
      id: 1,
      title: 'Best React Hooks Practices',
      author: 'Sarah Wilson',
      likes: 45,
      comments: 12,
      category: 'Programming',
      timeAgo: '2h ago'
    },
    {
      id: 2,
      title: 'Data Science Career Path Guide',
      author: 'Michael Chen',
      likes: 67,
      comments: 23,
      category: 'Data Science',
      timeAgo: '4h ago'
    }
  ],
  recommendations: {
    courses: [
      {
        id: 401,
        title: 'Advanced JavaScript Concepts',
        teacher: 'David Kumar',
        rating: 4.8,
        students: 234,
        price: 199,
        image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        id: 402,
        title: 'Machine Learning Basics',
        teacher: 'Lisa Wang',
        rating: 4.9,
        students: 156,
        price: 249,
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300'
      }
    ],
    teachers: [
      {
        id: 5,
        name: 'David Kumar',
        subject: 'Advanced JavaScript',
        rating: 4.8,
        students: 89,
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
      }
    ]
  }
};

export const mockTeacherData = {
  profile: {
    id: 2,
    name: 'Prof. Akul Sharma',
    email: 'prof.akul@example.com',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'teacher',
    joinedDate: '2024-06-10',
    totalCourses: 3,
    totalStudents: 156,
    totalEarnings: 12450,
    monthlyEarnings: 2890,
    rating: 4.9,
    totalReviews: 89,
    responseTime: '< 2 hours'
  },
  courses: [
    {
      id: 501,
      title: 'Advanced JavaScript Mastery',
      students: 67,
      totalLessons: 42,
      completedLessons: 42,
      status: 'active',
      rating: 4.8,
      reviews: 34,
      earnings: 6700,
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=300',
      createdDate: '2024-08-15',
      lastUpdated: '2025-01-10',
      engagement: 85
    },
    {
      id: 502,
      title: 'Node.js Backend Development',
      students: 45,
      totalLessons: 38,
      completedLessons: 38,
      status: 'active',
      rating: 4.9,
      reviews: 28,
      earnings: 4500,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=300',
      createdDate: '2024-09-20',
      lastUpdated: '2025-01-08',
      engagement: 92
    },
    {
      id: 503,
      title: 'Full Stack Web Development',
      students: 44,
      totalLessons: 55,
      completedLessons: 32,
      status: 'in-progress',
      rating: 4.7,
      reviews: 27,
      earnings: 4400,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300',
      createdDate: '2024-11-01',
      lastUpdated: '2025-01-15',
      engagement: 78
    }
  ],
  upcomingSessions: [
    {
      id: 1,
      title: 'Advanced Async/Await Patterns',
      course: 'Advanced JavaScript Mastery',
      date: '2025-01-20T15:00:00Z',
      duration: 90,
      studentsEnrolled: 23,
      type: 'live',
      meetingLink: '/classroom/teacher/1'
    },
    {
      id: 2,
      title: 'Express.js Middleware Deep Dive',
      course: 'Node.js Backend Development',
      date: '2025-01-21T11:00:00Z',
      duration: 75,
      studentsEnrolled: 18,
      type: 'live',
      meetingLink: '/classroom/teacher/2'
    },
    {
      id: 3,
      title: 'Database Integration Workshop',
      course: 'Full Stack Web Development',
      date: '2025-01-22T14:00:00Z',
      duration: 120,
      studentsEnrolled: 31,
      type: 'workshop',
      meetingLink: '/classroom/teacher/3'
    }
  ],
  assignments: [
    {
      id: 1,
      title: 'Build a REST API',
      course: 'Node.js Backend Development',
      dueDate: '2025-01-25T23:59:00Z',
      totalStudents: 45,
      submitted: 32,
      pending: 13,
      graded: 28,
      averageGrade: 87,
      description: 'Create a complete REST API with authentication and CRUD operations.'
    },
    {
      id: 2,
      title: 'JavaScript Design Patterns',
      course: 'Advanced JavaScript Mastery',
      dueDate: '2025-01-28T23:59:00Z',
      totalStudents: 67,
      submitted: 45,
      pending: 22,
      graded: 40,
      averageGrade: 91,
      description: 'Implement common design patterns in JavaScript with real-world examples.'
    },
    {
      id: 3,
      title: 'Full Stack Project',
      course: 'Full Stack Web Development',
      dueDate: '2025-02-05T23:59:00Z',
      totalStudents: 44,
      submitted: 12,
      pending: 32,
      graded: 8,
      averageGrade: 89,
      description: 'Build a complete full-stack application with frontend and backend.'
    }
  ],
  submissions: [
    {
      id: 1,
      assignmentTitle: 'Build a REST API',
      studentName: 'John Doe',
      studentAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      submittedDate: '2025-01-18T14:30:00Z',
      status: 'pending_review',
      files: ['api-project.zip', 'documentation.pdf'],
      course: 'Node.js Backend Development'
    },
    {
      id: 2,
      assignmentTitle: 'JavaScript Design Patterns',
      studentName: 'Sarah Johnson',
      studentAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      submittedDate: '2025-01-17T20:15:00Z',
      status: 'graded',
      grade: 95,
      feedback: 'Excellent implementation of design patterns. Code is clean and well-documented.',
      files: ['patterns-project.zip'],
      course: 'Advanced JavaScript Mastery'
    },
    {
      id: 3,
      assignmentTitle: 'Full Stack Project',
      studentName: 'Mike Wilson',
      studentAvatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      submittedDate: '2025-01-19T10:45:00Z',
      status: 'pending_review',
      files: ['fullstack-app.zip', 'deployment-guide.md'],
      course: 'Full Stack Web Development'
    }
  ],
  analytics: {
    monthlyStats: {
      totalStudents: 156,
      activeStudents: 134,
      averageAttendance: 87,
      completionRate: 78,
      averageRating: 4.8
    },
    earningsChart: [
      { month: 'Aug', earnings: 1200 },
      { month: 'Sep', earnings: 1800 },
      { month: 'Oct', earnings: 2100 },
      { month: 'Nov', earnings: 2400 },
      { month: 'Dec', earnings: 2650 },
      { month: 'Jan', earnings: 2890 }
    ],
    studentPerformance: [
      { course: 'Advanced JavaScript', averageScore: 88, attendance: 92 },
      { course: 'Node.js Backend', averageScore: 85, attendance: 89 },
      { course: 'Full Stack Development', averageScore: 82, attendance: 85 }
    ]
  },
  communityQuestions: [
    {
      id: 1,
      title: 'How to handle async errors in Node.js?',
      student: 'Alex Chen',
      subject: 'Node.js',
      timeAgo: '2h ago',
      upvotes: 12,
      answers: 3
    },
    {
      id: 2,
      title: 'Best practices for React state management?',
      student: 'Emma Davis',
      subject: 'JavaScript',
      timeAgo: '4h ago',
      upvotes: 8,
      answers: 1
    },
    {
      id: 3,
      title: 'Database design for e-commerce app?',
      student: 'Ryan Kumar',
      subject: 'Full Stack',
      timeAgo: '6h ago',
      upvotes: 15,
      answers: 0
    }
  ],
  notes: [
    {
      id: 1,
      title: 'JavaScript ES6+ Features Guide',
      course: 'Advanced JavaScript Mastery',
      uploadDate: '2025-01-15T10:00:00Z',
      fileType: 'PDF',
      fileSize: '3.2 MB',
      downloads: 45,
      category: 'Reference'
    },
    {
      id: 2,
      title: 'Node.js Best Practices',
      course: 'Node.js Backend Development',
      uploadDate: '2025-01-14T14:30:00Z',
      fileType: 'PDF',
      fileSize: '2.1 MB',
      downloads: 38,
      category: 'Lecture Notes'
    },
    {
      id: 3,
      title: 'Full Stack Architecture Patterns',
      course: 'Full Stack Web Development',
      uploadDate: '2025-01-13T16:45:00Z',
      fileType: 'PPT',
      fileSize: '8.7 MB',
      downloads: 29,
      category: 'Presentation'
    }
  ]
};