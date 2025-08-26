import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  StarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const BrowseTeachers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = 'rating';
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  // Mock teacher data
  const teachers = [
    {
      id: 1,
      name: 'Sarah Wilson',
      subject: 'JavaScript',
      specialties: ['React', 'Node.js', 'TypeScript'],
      rating: 4.9,
      reviews: 127,
      price: 45,
      experience: '5+ years',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      isOnline: true,
      nextAvailable: '2:00 PM Today'
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
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300',
      isOnline: false,
      nextAvailable: 'Tomorrow 10:00 AM'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      subject: 'UI/UX Design',
      specialties: ['Figma', 'Adobe XD', 'Prototyping'],
      rating: 4.9,
      reviews: 156,
      price: 40,
      experience: '4+ years',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      isOnline: true,
      nextAvailable: '4:30 PM Today'
    },
    {
      id: 4,
      name: 'David Kumar',
      subject: 'Mathematics',
      specialties: ['Calculus', 'Statistics', 'Linear Algebra'],
      rating: 4.7,
      reviews: 203,
      price: 35,
      experience: '8+ years',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      isOnline: true,
      nextAvailable: '1:00 PM Today'
    }
  ];

  const subjects = ['All', 'JavaScript', 'Python', 'UI/UX Design', 'Mathematics', 'English', 'Science'];

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          teacher.specialties.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSubject = selectedSubject === 'all' || 
                           teacher.subject.toLowerCase() === selectedSubject.toLowerCase();
    
    const matchesPrice = priceRange === 'all' || 
                         (priceRange === '0-30' && teacher.price <= 30) ||
                         (priceRange === '30-50' && teacher.price > 30 && teacher.price <= 50) ||
                         (priceRange === '50+' && teacher.price > 50);

    return matchesSearch && matchesSubject && matchesPrice;
  });

  const sortedTeachers = filteredTeachers.sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'reviews') {
      return b.reviews - a.reviews;
    }
    return 0;
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
            Find Your Perfect Teacher
          </h1>
          <p className="text-xl text-gray-600">
            Browse through {teachers.length}+ verified teachers and start learning today
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-8 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search teachers, subjects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-gray-700 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Subject Filter */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 text-gray-600 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject === 'All' ? 'all' : subject}>
                  {subject}
                </option>
              ))}
            </select>

            {/* Price Range */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 text-gray-600 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="all">Any Price</option>
              <option value="0-30">$0 - $30</option>
              <option value="30-50">$30 - $50</option>
              <option value="50+">$50+</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 text-gray-600 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="rating">Highest Rated</option>
              <option value="price">Price: Low to High</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>
        </motion.div>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {sortedTeachers.length} teachers
          </p>
          <button onClick={() => setShowMoreFilters(true)} className="flex items-center text-gray-600 hover:text-teal-600">
            <AdjustmentsHorizontalIcon className="w-5 text-gray-600 h-5 mr-2" />
            More Filters
          </button>
        </div>

        {/* Teacher Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTeachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"

            >
              <div className="p-6">
                {/* Avatar and Status */}
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={teacher.avatar}
                      alt={teacher.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${
                      teacher.isOnline ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{teacher.name}</h3>
                    <p className="text-teal-600 font-medium">{teacher.subject}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-yellow-400 mb-1">
                      <StarIcon className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-900">
                        {teacher.rating}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">({teacher.reviews} reviews)</p>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <UserIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{teacher.experience} experience</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CurrencyDollarIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">${teacher.price}/hour</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">Next: {teacher.nextAvailable}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Link
                    to={`/teacher/${teacher.id}`}
                    className="flex-1 text-center py-2 px-4 border border-teal-500 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
                  >
                    View Profile
                  </Link>
                  <Link
                    to={`/book/${teacher.id}`}
                    className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg border border-teal-500 hover:bg-teal-50 transition-colors">
            Load More Teachers
          </button>
        </div>

        {/* More Filters Modal */}
        {showMoreFilters && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl text-gray-900 font-bold">More Filters</h3>
                <button
                  onClick={() => setShowMoreFilters(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <p className="text-gray-600">Add more filter options here, such as:</p>
              <ul className="list-disc text-green-400 list-inside mt-2 space-y-1">
                <li>Experience Level (e.g., beginner, intermediate, expert)</li>
                <li>Online Status (currently online)</li>
                <li>Availability (e.g., specific dates/times)</li>
                <li>Language spoken</li>
              </ul>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowMoreFilters(false)}
                  className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseTeachers;