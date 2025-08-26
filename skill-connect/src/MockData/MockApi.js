// Mock API data and functions
export const mockTeachers = [
  {
    id: 1,
    name: 'Sarah Wilson',
    subject: 'JavaScript',
    specialties: ['React', 'Node.js', 'TypeScript'],
    rating: 4.9,
    reviews: 127,
    price: 45,
    experience: '5+ years',
    bio: 'Passionate JavaScript developer with expertise in modern frameworks. I love helping students master web development through hands-on projects.',
    education: 'Computer Science, MIT',
    languages: ['English', 'Spanish'],
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    isOnline: true,
    nextAvailable: '2:00 PM Today',
    totalStudents: 45,
    completedSessions: 234,
    responseTime: '< 1 hour',
    achievements: ['Top Rated', 'Rising Talent', 'Expert Verified'],
    courses: [
      { id: 101, title: 'React Fundamentals', students: 23, rating: 4.8 },
      { id: 102, title: 'Advanced JavaScript', students: 18, rating: 4.9 }
    ]
  },
  {
    id: 2,
    name: 'Michael Chen',
    subject: 'Python',
    specialties: ['Django', 'Machine Learning', 'Data Science'],
    rating: 4.8,
    reviews: 89,
    price: 50,
    experience: '7+ years',
    bio: 'Senior Data Scientist with extensive experience in Python and machine learning. I specialize in making complex concepts simple and practical.',
    education: 'PhD in Computer Science, Stanford',
    languages: ['English', 'Mandarin'],
    avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300',
    isOnline: false,
    nextAvailable: 'Tomorrow 10:00 AM',
    totalStudents: 62,
    completedSessions: 312,
    responseTime: '< 2 hours',
    achievements: ['Expert Verified', 'Best Seller'],
    courses: [
      { id: 201, title: 'Python for Beginners', students: 35, rating: 4.7 },
      { id: 202, title: 'Machine Learning Basics', students: 27, rating: 4.9 }
    ]
  }
];

export const mockCourses = [
  {
    id: 101,
    title: 'React Fundamentals',
    teacherId: 1,
    teacherName: 'Sarah Wilson',
    description: 'Master the fundamentals of React including components, state, props, and hooks.',
    category: 'JavaScript',
    level: 'Beginner',
    duration: '8 weeks',
    price: 299,
    rating: 4.8,
    students: 23,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500',
    syllabus: [
      'Introduction to React',
      'Components and JSX',
      'State and Props',
      'Event Handling',
      'Hooks',
      'Routing',
      'State Management',
      'Project Building'
    ],
    whatYouWillLearn: [
      'Build modern web applications with React',
      'Understand component-based architecture',
      'Master React hooks and state management',
      'Create interactive user interfaces'
    ]
  },
  {
    id: 201,
    title: 'Python for Beginners',
    teacherId: 2,
    teacherName: 'Michael Chen',
    description: 'Complete Python programming course from basics to advanced concepts.',
    category: 'Python',
    level: 'Beginner',
    duration: '10 weeks',
    price: 249,
    rating: 4.7,
    students: 35,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500',
    syllabus: [
      'Python Basics',
      'Data Types and Variables',
      'Control Structures',
      'Functions',
      'Object-Oriented Programming',
      'File Handling',
      'Libraries and Modules',
      'Final Project'
    ],
    whatYouWillLearn: [
      'Write clean and efficient Python code',
      'Understand programming fundamentals',
      'Build real-world applications',
      'Prepare for advanced topics'
    ]
  }
];

export const mockBookings = [
  {
    id: 1,
    teacherId: 1,
    teacherName: 'Sarah Wilson',
    subject: 'JavaScript',
    date: '2025-01-20',
    time: '14:00',
    duration: 60,
    status: 'confirmed',
    price: 45,
    sessionLink: '/classroom/1'
  },
  {
    id: 2,
    teacherId: 2,
    teacherName: 'Michael Chen',
    subject: 'Python',
    date: '2025-01-22',
    time: '10:00',
    duration: 60,
    status: 'pending',
    price: 50,
    sessionLink: '/classroom/2'
  }
];

// Mock API functions
export const fetchTeachers = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockTeachers), 500);
  });
};

export const fetchTeacherById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const teacher = mockTeachers.find(t => t.id === parseInt(id));
      resolve(teacher);
    }, 300);
  });
};

export const fetchCourses = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockCourses), 500);
  });
};

export const fetchCourseById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const course = mockCourses.find(c => c.id === parseInt(id));
      resolve(course);
    }, 300);
  });
};

export const createBooking = (bookingData) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const newBooking = {
        id: Date.now(),
        ...bookingData,
        status: 'confirmed'
      };
      resolve(newBooking);
    }, 1000);
  });
};