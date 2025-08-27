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
  CurrencyDollarIcon,
  UserIcon,
  ChartBarIcon,
  EyeIcon,
  PencilIcon,
  ArrowDownTrayIcon,
 ArrowUpTrayIcon,
  BellIcon
} from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { mockTeacherData } from '../MockData/MockDashboardData';



const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { 
    profile, 
    courses, 
    upcomingSessions, 
    assignments, 
    submissions, 
    analytics, 
    communityQuestions, 
    notes 
  } = mockTeacherData;

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
      case 'pending_review': return 'bg-yellow-100 text-yellow-700';
      case 'graded': return 'bg-green-100 text-green-700';
      case 'active': return 'bg-green-100 text-green-700';
      case 'in-progress': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: ChartBarIcon },
    { id: 'courses', label: 'My Courses', icon: BookOpenIcon },
    { id: 'assignments', label: 'Assignments', icon: DocumentTextIcon },
    { id: 'submissions', label: 'Submissions', icon: CheckCircleIcon },
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
                Good evening, {profile.name} 👨‍🏫
              </h1>
              <p className="text-teal-100 mb-4">
                You have {upcomingSessions.length} classes today
              </p>
              <div className="flex items-center space-x-6 text-teal-100">
                <div className="flex items-center">
                  <BookOpenIcon className="w-5 h-5 mr-2" />
                  <span>{profile.totalCourses} courses</span>
                </div>
                <div className="flex items-center">
                  <UserIcon className="w-5 h-5 mr-2" />
                  <span>{profile.totalStudents} students</span>
                </div>
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 mr-2" />
                  <span>{profile.rating} rating</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">${profile.monthlyEarnings.toLocaleString()}</div>
              <div className="text-teal-100">This Month</div>
              <div className="text-2xl font-semibold mt-2">${profile.totalEarnings.toLocaleString()}</div>
              <div className="text-teal-100">Total Earnings</div>
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
                {/* Analytics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Students</p>
                        <p className="text-2xl font-bold text-gray-900">{analytics.monthlyStats.totalStudents}</p>
                      </div>
                      <UserIcon className="w-8 h-8 text-teal-500" />
                    </div>
                    <p className="text-sm text-green-600 mt-2">+12% from last month</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Avg. Attendance</p>
                        <p className="text-2xl font-bold text-gray-900">{analytics.monthlyStats.averageAttendance}%</p>
                      </div>
                      <ChartBarIcon className="w-8 h-8 text-blue-500" />
                    </div>
                    <p className="text-sm text-green-600 mt-2">+5% from last month</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Completion Rate</p>
                        <p className="text-2xl font-bold text-gray-900">{analytics.monthlyStats.completionRate}%</p>
                      </div>
                      <CheckCircleIcon className="w-8 h-8 text-green-500" />
                    </div>
                    <p className="text-sm text-green-600 mt-2">+8% from last month</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Avg. Rating</p>
                        <p className="text-2xl font-bold text-gray-900">{analytics.monthlyStats.averageRating}</p>
                      </div>
                      <StarIcon className="w-8 h-8 text-yellow-500" />
                    </div>
                    <p className="text-sm text-green-600 mt-2">+0.2 from last month</p>
                  </div>
                </div>

                {/* Earnings Chart */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Monthly Earnings</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={analytics.earningsChart}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, 'Earnings']} />
                      <Line 
                        type="monotone" 
                        dataKey="earnings" 
                        stroke="#0d9488" 
                        strokeWidth={3}
                        dot={{ fill: '#0d9488', strokeWidth: 2, r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Upcoming Sessions */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Sessions</h2>
                  <div className="space-y-4">
                    {upcomingSessions.map(session => (
                      <div key={session.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <PlayIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{session.title}</h3>
                          <p className="text-sm text-gray-600">{session.course}</p>
                          <p className="text-sm text-teal-600">{formatDate(session.date)} • {session.duration} min</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">{getTimeUntil(session.date)}</div>
                          <div className="text-sm text-gray-600">{session.studentsEnrolled} students</div>
                          <Link
                            to={session.meetingLink}
                            className="inline-flex items-center text-teal-600 hover:text-teal-700 text-sm font-medium mt-1"
                          >
                            Start Session
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student Performance */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Performance by Course</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analytics.studentPerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="course" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="averageScore" fill="#0d9488" name="Average Score" />
                      <Bar dataKey="attendance" fill="#2563eb" name="Attendance %" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-3 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors">
                      <PlusIcon className="w-5 h-5" />
                      <span>Create New Course</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                      <ArrowUpTrayIcon className="w-5 h-5" />
                      <span>Upload Materials</span>
                    </button>
                    <Link
                      to="/community"
                      className="w-full flex items-center space-x-3 p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <BellIcon className="w-5 h-5" />
                      <span>Post Announcement</span>
                    </Link>
                  </div>
                </div>

                {/* Pending Submissions */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Pending Reviews</h3>
                    <button
                      onClick={() => setActiveTab('submissions')}
                      className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {submissions.filter(s => s.status === 'pending_review').slice(0, 3).map(submission => (
                      <div key={submission.id} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                        <img
                          src={submission.studentAvatar}
                          alt={submission.studentName}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-sm">{submission.studentName}</p>
                          <p className="text-xs text-gray-600">{submission.assignmentTitle}</p>
                        </div>
                        <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Community Questions */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Questions</h3>
                  <div className="space-y-4">
                    {communityQuestions.slice(0, 3).map(question => (
                      <div key={question.id} className="border-l-4 border-teal-500 pl-4">
                        <h4 className="font-medium text-gray-900 text-sm">{question.title}</h4>
                        <p className="text-xs text-gray-600">by {question.student} • {question.timeAgo}</p>
                        <div className="flex items-center space-x-3 mt-2">
                          <span className="text-xs text-gray-500">{question.upvotes} upvotes</span>
                          <span className="text-xs text-gray-500">{question.answers} answers</span>
                          <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs">
                            {question.subject}
                          </span>
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
              {courses.map(course => (
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
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(course.status)}`}>
                        {course.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Students:</span>
                        <p className="font-medium">{course.students}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Rating:</span>
                        <div className="flex items-center">
                          <StarIcon className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="font-medium">{course.rating}</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Earnings:</span>
                        <p className="font-medium">${course.earnings.toLocaleString()}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Engagement:</span>
                        <p className="font-medium">{course.engagement}%</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>Course Progress</span>
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-blue-600 h-2 rounded-full"
                          style={{ width: `${(course.completedLessons / course.totalLessons) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors">
                        <EyeIcon className="w-4 h-4" />
                        <span>View</span>
                      </button>
                      <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                        <PencilIcon className="w-4 h-4" />
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'assignments' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Assignment Manager</h2>
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all">
                  Create New Assignment
                </button>
              </div>

              {assignments.map(assignment => (
                <motion.div
                  key={assignment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{assignment.title}</h3>
                      <p className="text-gray-600 mb-2">{assignment.course}</p>
                      <p className="text-sm text-gray-700 mb-4">{assignment.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Due Date:</span>
                          <p className="font-medium">{formatDate(assignment.dueDate)}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Total Students:</span>
                          <p className="font-medium">{assignment.totalStudents}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Submitted:</span>
                          <p className="font-medium text-green-600">{assignment.submitted}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Pending:</span>
                          <p className="font-medium text-yellow-600">{assignment.pending}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm">
                          <span className="text-gray-500">Graded:</span>
                          <span className="font-medium ml-1">{assignment.graded}/{assignment.submitted}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Average Grade:</span>
                          <span className="font-medium ml-1">{assignment.averageGrade}%</span>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                          View Submissions
                        </button>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Download All
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'submissions' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Student Submissions</h2>
                <div className="flex space-x-3">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
                    <option>All Courses</option>
                    <option>Advanced JavaScript</option>
                    <option>Node.js Backend</option>
                    <option>Full Stack Development</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500">
                    <option>All Status</option>
                    <option>Pending Review</option>
                    <option>Graded</option>
                  </select>
                </div>
              </div>

              {submissions.map(submission => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={submission.studentAvatar}
                      alt={submission.studentName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{submission.assignmentTitle}</h3>
                          <p className="text-gray-600">by {submission.studentName}</p>
                          <p className="text-sm text-gray-500">{submission.course}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(submission.status)}`}>
                          {submission.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">
                          Submitted: {formatDate(submission.submittedDate)}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">Files:</span>
                          {submission.files.map((file, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                              {file}
                            </span>
                          ))}
                        </div>
                      </div>

                      {submission.status === 'graded' && (
                        <div className="bg-green-50 rounded-lg p-4 mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-green-900">Grade: {submission.grade}/100</span>
                            <span className="text-2xl font-bold text-green-600">{submission.grade}%</span>
                          </div>
                          <p className="text-sm text-green-800">{submission.feedback}</p>
                        </div>
                      )}

                      <div className="flex space-x-3">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors">
                          <EyeIcon className="w-4 h-4" />
                          <span>Review</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                          < ArrowDownTrayIcon className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                        {submission.status === 'pending_review' && (
                          <button className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                            <CheckCircleIcon className="w-4 h-4" />
                            <span>Grade</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Study Materials</h2>
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all">
                  Upload New Material
                </button>
              </div>

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
                        <span className="text-gray-500">Downloads:</span>
                        <span className="font-medium">{note.downloads}</span>
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
                        <PencilIcon className="w-4 h-4" />
                        <span>Edit</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherDashboard;