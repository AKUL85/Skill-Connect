import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon,
  CalendarIcon,
  ClockIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  PlusIcon,
  PlayIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  StarIcon,
  TrophyIcon,
  FireIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import { mockStudentData } from '../MockData/MockDashboardData';


const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { profile, enrolledCourses, upcomingClasses, assignments, notes, communityHighlights, recommendations } = mockStudentData;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeUntil = (dateString) => {
    const now = new Date();
    const target = new Date(dateString);
    const diffInHours = Math.floor((target - now) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Starting soon';
    if (diffInHours < 24) return `In ${diffInHours}h`;
    return `In ${Math.floor(diffInHours / 24)}d`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'submitted': return 'bg-blue-100 text-blue-700';
      case 'graded': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpenIcon },
    { id: 'courses', label: 'My Courses', icon: BookOpenIcon },
    { id: 'assignments', label: 'Assignments', icon: DocumentTextIcon },
    { id: 'notes', label: 'Study Materials', icon: DocumentTextIcon }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Hi {profile.name.split(' ')[0]} 👋, ready to continue learning?
              </h1>
              <div className="flex items-center space-x-6 text-teal-100">
                <div className="flex items-center">
                  <BookOpenIcon className="w-5 h-5 mr-2" />
                  <span>{profile.totalCoursesEnrolled} courses enrolled</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-5 h-5 mr-2" />
                  <span>{profile.totalHoursLearned} hours learned</span>
                </div>
                <div className="flex items-center">
                  <FireIcon className="w-5 h-5 mr-2" />
                  <span>{profile.currentStreak} day streak</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">{Math.round((enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length))}%</div>
              <div className="text-teal-100">Average Progress</div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* My Courses Preview */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
                    <button
                      onClick={() => setActiveTab('courses')}
                      className="text-teal-600 hover:text-teal-700 font-medium"
                    >
                      View All
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {enrolledCourses.slice(0, 2).map(course => (
                      <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-3 mb-3">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 line-clamp-1">{course.title}</h3>
                            <p className="text-sm text-gray-600">by {course.teacher}</p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-teal-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            {course.completedLessons}/{course.totalLessons} lessons
                          </span>
                          <Link
                            to={`/course/${course.id}`}
                            className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Classes */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Classes</h2>
                  <div className="space-y-4">
                    {upcomingClasses.slice(0, 3).map(class_ => (
                      <div key={class_.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <PlayIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{class_.title}</h3>
                          <p className="text-sm text-gray-600">with {class_.teacher}</p>
                          <p className="text-sm text-teal-600">{formatDate(class_.date)}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">{getTimeUntil(class_.date)}</div>
                          <Link
                            to={class_.meetingLink}
                            className="inline-flex items-center text-teal-600 hover:text-teal-700 text-sm font-medium mt-1"
                          >
                            Join Class
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Community Highlights */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Community Highlights</h2>
                    <Link
                      to="/community"
                      className="text-teal-600 hover:text-teal-700 font-medium"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {communityHighlights.map(post => (
                      <div key={post.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{post.title}</h3>
                          <p className="text-sm text-gray-600">by {post.author} • {post.timeAgo}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-sm text-gray-500">{post.likes} likes</span>
                            <span className="text-sm text-gray-500">{post.comments} comments</span>
                            <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs">
                              {post.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link
                      to="/courses"
                      className="flex items-center space-x-3 p-3 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors"
                    >
                      <PlusIcon className="w-5 h-5" />
                      <span>Browse Courses</span>
                    </Link>
                    <Link
                      to="/messages"
                      className="flex items-center space-x-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <ChatBubbleLeftRightIcon className="w-5 h-5" />
                      <span>Message Teacher</span>
                    </Link>
                    <Link
                      to="/community"
                      className="flex items-center space-x-3 p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <PaperAirplaneIcon className="w-5 h-5" />
                      <span>Ask Question</span>
                    </Link>
                  </div>
                </div>

                {/* Assignments Summary */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Assignments</h3>
                    <button
                      onClick={() => setActiveTab('assignments')}
                      className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {assignments.filter(a => a.status === 'pending').slice(0, 2).map(assignment => (
                      <div key={assignment.id} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                        <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-sm">{assignment.title}</p>
                          <p className="text-xs text-gray-600">Due {formatDate(assignment.dueDate)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended for You</h3>
                  <div className="space-y-4">
                    {recommendations.courses.slice(0, 2).map(course => (
                      <div key={course.id} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center space-x-3">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-10 h-10 rounded object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm line-clamp-1">{course.title}</h4>
                            <p className="text-xs text-gray-600">by {course.teacher}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex items-center">
                                <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                                <span className="text-xs text-gray-600 ml-1">{course.rating}</span>
                              </div>
                              <span className="text-xs text-gray-600">${course.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map(course => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {course.progress}% Complete
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <div className="flex items-center space-x-2 mb-4">
                      <img
                        src={course.teacherAvatar}
                        alt={course.teacher}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-600">by {course.teacher}</span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-blue-600 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Next Lesson:</p>
                      <p className="font-medium text-gray-900">{course.nextLesson}</p>
                      <p className="text-sm text-teal-600">{formatDate(course.nextLessonDate)}</p>
                    </div>

                    <div className="flex space-x-3">
                      <Link
                        to={`/course/${course.id}`}
                        className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all"
                      >
                        Continue Learning
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'assignments' && (
            <div className="space-y-6">
              {assignments.map(assignment => (
                <motion.div
                  key={assignment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{assignment.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(assignment.status)}`}>
                          {assignment.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{assignment.course}</p>
                      <p className="text-sm text-gray-700 mb-4">{assignment.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Due Date:</span>
                          <p className="font-medium">{formatDate(assignment.dueDate)}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Max Points:</span>
                          <p className="font-medium">{assignment.maxPoints}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Format:</span>
                          <p className="font-medium">{assignment.submissionFormat.join(', ')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {assignment.status === 'pending' && (
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center space-x-4">
                        <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all">
                          Submit Assignment
                        </button>
                        <span className="text-sm text-gray-500">
                          {Math.ceil((new Date(assignment.dueDate) - new Date()) / (1000 * 60 * 60 * 24))} days remaining
                        </span>
                      </div>
                    </div>
                  )}

                  {assignment.status === 'submitted' && (
                    <div className="border-t border-gray-200 pt-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                          <span className="font-medium text-blue-900">Submitted on {formatDate(assignment.submittedDate)}</span>
                        </div>
                        <p className="text-sm text-blue-700">Waiting for teacher review...</p>
                      </div>
                    </div>
                  )}

                  {assignment.status === 'graded' && (
                    <div className="border-t border-gray-200 pt-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <TrophyIcon className="w-5 h-5 text-green-600" />
                            <span className="font-medium text-green-900">Grade: {assignment.grade}/{assignment.maxPoints}</span>
                          </div>
                          <span className="text-2xl font-bold text-green-600">
                            {Math.round((assignment.grade / assignment.maxPoints) * 100)}%
                          </span>
                        </div>
                        {assignment.feedback && (
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Teacher Feedback:</p>
                            <p className="text-sm text-gray-800 bg-white p-3 rounded border">{assignment.feedback}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map(note => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <DocumentTextIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{note.title}</h3>
                      <p className="text-sm text-gray-600">{note.course}</p>
                      <p className="text-xs text-gray-500">by {note.teacher}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Type:</span>
                      <span className="font-medium">{note.fileType}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Size:</span>
                      <span className="font-medium">{note.fileSize}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Category:</span>
                      <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs">{note.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Uploaded:</span>
                      <span className="font-medium">{formatDate(note.uploadDate)}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors">
                      <EyeIcon className="w-4 h-4" />
                      <span>View</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                      <ArrowDownTrayIcon className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default StudentDashboard;