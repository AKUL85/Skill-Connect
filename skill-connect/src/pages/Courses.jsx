import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  StarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserIcon,
  PlayIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';
import { mockCourseData } from '../MockData/MockComunityData';


const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const categories = ['All', 'Programming', 'Data Science', 'Design', 'Mathematics', 'Languages', 'Business'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = mockCourseData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           course.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesLevel = selectedLevel === 'all' || 
                        course.level.toLowerCase() === selectedLevel.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'popularity':
        return b.students - a.students;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find the Right Course for You
          </h1>
          <p className="text-xl text-gray-600">
            Explore {mockCourseData.length}+ courses from expert teachers
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative md:col-span-2">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses or teachers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-gray-500 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 text-gray-500 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category === 'All' ? 'all' : category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 text-gray-500 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              {levels.map(level => (
                <option key={level} value={level === 'All' ? 'all' : level}>
                  {level}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 text-gray-500 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="rating">Highest Rated</option>
              <option value="price">Price: Low to High</option>
              <option value="popularity">Most Popular</option>
            </select>
          </div>
        </motion.div>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {sortedCourses.length} courses
          </p>
          <button className="flex items-center text-gray-600 hover:text-teal-600">
            <AdjustmentsHorizontalIcon className="w-5 h-5 mr-2" />
            More Filters
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Course Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {course.lessons} lessons
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Course Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>

                {/* Teacher Info */}
                <div className="flex items-center mb-4">
                  <img
                    src={course.teacher.avatar}
                    alt={course.teacher.name}
                    className="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{course.teacher.name}</p>
                    <p className="text-xs text-gray-600">{course.category}</p>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-yellow-400">
                    <StarIcon className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900">
                      {course.rating}
                    </span>
                    <span className="ml-1 text-xs text-gray-500">
                      ({course.reviews})
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <UserIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">{course.students}</span>
                  </div>
                </div>

                {/* Course Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpenIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{course.lessons} lessons</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                    {course.originalPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                  {course.originalPrice && (
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                      Save ${course.originalPrice - course.price}
                    </span>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Link
                    to={`/course/${course.id}`}
                    className="flex-1 text-center py-2 px-4 border border-teal-500 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
                  >
                    View Course
                  </Link>
                  <button className="flex-1 py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg border border-teal-500 hover:bg-teal-50 transition-colors">
            Load More Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;