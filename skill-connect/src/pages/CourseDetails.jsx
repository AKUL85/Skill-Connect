import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  StarIcon,
  ClockIcon,
  UserIcon,
  BookOpenIcon,
  PlayIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  CalendarIcon,
  LanguageIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import { mockCourseData } from '../MockData/MockComunityData';


const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundCourse = mockCourseData.find(c => c.id === parseInt(id));
      setCourse(foundCourse);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h2>
          <Link to="/courses" className="text-teal-600 hover:text-teal-700">
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-teal-100">{course.category}</span>
                </div>
                
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-teal-100 mb-6">{course.description}</p>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <StarSolidIcon 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-teal-100 ml-1">({course.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center">
                    <UserIcon className="w-5 h-5 mr-2" />
                    <span>{course.students} students</span>
                  </div>
                  
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <img
                    src={course.teacher.avatar}
                    alt={course.teacher.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Created by {course.teacher.name}</p>
                    <p className="text-teal-100">Last updated {course.lastUpdated}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Course Preview Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-8">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all">
                      <PlayIcon className="w-8 h-8 text-teal-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-gray-900">${course.price}</span>
                      {course.originalPrice && (
                        <span className="ml-2 text-lg text-gray-500 line-through">
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>
                    {course.originalPrice && (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                        {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-200 mb-4">
                    Enroll Now
                  </button>
                  
                  <button className="w-full border border-teal-500 text-teal-600 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors mb-6">
                    Add to Wishlist
                  </button>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Lessons</span>
                      <span className="font-medium">{course.lessons}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Level</span>
                      <span className="font-medium">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Language</span>
                      <span className="font-medium">{course.language}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Certificate</span>
                      <span className="font-medium">{course.certificate ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-teal-500 text-teal-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* What You'll Learn */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h3>
                    <ul className="space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Description</h3>
                    <p className="text-gray-700 leading-relaxed">{course.description}</p>
                  </div>
                </div>
              )}

              {activeTab === 'syllabus' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Syllabus</h3>
                  <div className="space-y-4">
                    {course.syllabus.map((week, index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-gray-900">
                              Week {week.week}: {week.title}
                            </h4>
                            <span className="text-sm text-gray-600">{week.duration}</span>
                          </div>
                        </div>
                        <div className="px-6 py-4">
                          <ul className="space-y-2">
                            {week.lessons.map((lesson, lessonIndex) => (
                              <li key={lessonIndex} className="flex items-center space-x-3">
                                <PlayIcon className="w-4 h-4 text-teal-500" />
                                <span className="text-gray-700">{lesson}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'instructor' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Instructor</h3>
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-start space-x-6">
                      <img
                        src={course.teacher.avatar}
                        alt={course.teacher.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {course.teacher.name}
                        </h4>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center">
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="ml-1 text-sm font-medium">{course.teacher.rating}</span>
                          </div>
                          <div className="flex items-center">
                            <UserIcon className="w-4 h-4 text-gray-400" />
                            <span className="ml-1 text-sm text-gray-600">{course.teacher.students} students</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Experienced {course.category.toLowerCase()} instructor with a passion for teaching and helping students achieve their goals.
                        </p>
                        <Link
                          to={`/teacher/${course.teacher.id}`}
                          className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                        >
                          View Full Profile
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h3>
                  <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-4xl font-bold text-gray-900">{course.rating}</div>
                      <div>
                        <div className="flex items-center mb-1">
                          {[...Array(5)].map((_, i) => (
                            <StarSolidIcon 
                              key={i} 
                              className={`w-5 h-5 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{course.reviews} reviews</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sample Reviews */}
                  <div className="space-y-6">
                    {[
                      {
                        name: 'John Smith',
                        rating: 5,
                        date: '2 weeks ago',
                        comment: 'Excellent course! The instructor explains everything clearly and the projects are very practical.'
                      },
                      {
                        name: 'Sarah Johnson',
                        rating: 4,
                        date: '1 month ago',
                        comment: 'Great content and well-structured. Would recommend to anyone starting with this topic.'
                      }
                    ].map((review, index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-700">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h5 className="font-medium text-gray-900">{review.name}</h5>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <StarSolidIcon 
                                    key={i} 
                                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Features */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">This course includes:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <BookOpenIcon className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-700">{course.lessons} lessons</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ClockIcon className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-700">{course.duration} of content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GlobeAltIcon className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-700">Lifetime access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AcademicCapIcon className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-700">Certificate of completion</span>
                </div>
                {course.hasSubtitles && (
                  <div className="flex items-center space-x-3">
                    <LanguageIcon className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-700">Subtitles available</span>
                  </div>
                )}
              </div>
            </div>

            {/* Related Courses */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Related Courses</h4>
              <div className="space-y-4">
                {mockCourseData.filter(c => c.id !== course.id && c.category === course.category).slice(0, 2).map(relatedCourse => (
                  <Link
                    key={relatedCourse.id}
                    to={`/course/${relatedCourse.id}`}
                    className="block hover:bg-gray-50 rounded-lg p-3 transition-colors"
                  >
                    <div className="flex space-x-3">
                      <img
                        src={relatedCourse.image}
                        alt={relatedCourse.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h5 className="text-sm font-medium text-gray-900 line-clamp-2">
                          {relatedCourse.title}
                        </h5>
                        <p className="text-xs text-gray-600">{relatedCourse.teacher.name}</p>
                        <div className="flex items-center mt-1">
                          <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600 ml-1">{relatedCourse.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;