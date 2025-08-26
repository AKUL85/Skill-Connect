import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ShareIcon,
  BookmarkIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  PlusIcon,
  FireIcon,
  ClockIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';
import {
  HeartIcon as HeartSolidIcon,
  BookmarkIcon as BookmarkSolidIcon
} from '@heroicons/react/24/solid';

import { mockPosts, mockTrendingTags, mockSuggestedTeachers, mockUpcomingClasses } from '../MockData/MockComunityData';

const CommunityFeed = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [showCreatePost, setShowCreatePost] = useState(false);

  const categories = [
    { value: 'all', label: 'All Posts', icon: '📝' },
    { value: 'question', label: 'Questions', icon: '❓' },
    { value: 'tip', label: 'Study Tips', icon: '📖' },
    { value: 'tutorial', label: 'Tutorials', icon: '🎥' },
    { value: 'announcement', label: 'Announcements', icon: '📢' }
  ];

  const sortOptions = [
    { value: 'latest', label: 'Latest', icon: <ClockIcon className="w-4 h-4" /> },
    { value: 'trending', label: 'Trending', icon: <FireIcon className="w-4 h-4" /> },
    { value: 'upvoted', label: 'Most Upvoted', icon: <ArrowUpIcon className="w-4 h-4" /> }
  ];

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  const handleBookmark = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isBookmarked: !post.isBookmarked,
            bookmarks: post.isBookmarked ? post.bookmarks - 1 : post.bookmarks + 1
          }
        : post
    ));
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Community Feed
          </h1>
          <p className="text-xl text-gray-600">
            Share knowledge, ask questions, and connect with fellow learners
          </p>
        </motion.div>

        {/* Community Guidelines Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
        >
          <p className="text-blue-800 text-sm">
            <strong>Community Guidelines:</strong> Keep posts respectful and educational. 
            No spam or plagiarism. Help create a positive learning environment for everyone! 🌟
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-6"
            >
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                {/* Search */}
                <div className="relative flex-1">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search posts, topics, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full text-gray-500 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                {/* Create Post Button */}
                <button
                  onClick={() => setShowCreatePost(true)}
                  className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2"
                >
                  <PlusIcon className="w-5 h-5" />
                  <span>Create Post</span>
                </button>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mb-4">
                {categories.map(category => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category.value
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.icon} {category.label}
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                {sortOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm transition-all ${
                      sortBy === option.value
                        ? 'bg-teal-100 text-teal-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {option.icon}
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Posts */}
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Post Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start space-x-4">
                      <div className="relative group">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        
                        {/* Profile Hover Card */}
                        <div className="absolute left-0 top-14 w-64 bg-white rounded-lg shadow-xl border p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                          <div className="flex items-center space-x-3 mb-3">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">{post.author.name}</h4>
                              <p className="text-sm text-teal-600">{post.author.role}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{post.author.bio}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {post.author.skills.map((skill, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                          <button className="w-full bg-teal-500 text-white py-2 rounded-lg text-sm hover:bg-teal-600 transition-colors">
                            View Profile
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            post.author.role === 'Teacher' 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {post.author.role}
                          </span>
                          {post.author.badges.map((badge, idx) => (
                            <span key={idx} className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                              {badge}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">{formatTimeAgo(post.createdAt)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="px-6 pb-4">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                    <p className="text-gray-700 mb-4 whitespace-pre-line">{post.content}</p>
                    
                    {post.image && (
                      <img
                        src={post.image}
                        alt="Post content"
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post Actions */}
                  <div className="px-6 py-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <button
                          onClick={() => handleLike(post.id)}
                          className={`flex items-center space-x-2 transition-colors ${
                            post.isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                          }`}
                        >
                          {post.isLiked ? (
                            <HeartSolidIcon className="w-5 h-5" />
                          ) : (
                            <HeartIcon className="w-5 h-5" />
                          )}
                          <span className="text-sm">{post.likes}</span>
                        </button>

                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                          <ChatBubbleOvalLeftIcon className="w-5 h-5" />
                          <span className="text-sm">{post.comments}</span>
                        </button>

                        <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                          <ShareIcon className="w-5 h-5" />
                          <span className="text-sm">{post.shares}</span>
                        </button>
                      </div>

                      <button
                        onClick={() => handleBookmark(post.id)}
                        className={`transition-colors ${
                          post.isBookmarked ? 'text-yellow-500' : 'text-gray-600 hover:text-yellow-500'
                        }`}
                      >
                        {post.isBookmarked ? (
                          <BookmarkSolidIcon className="w-5 h-5" />
                        ) : (
                          <BookmarkIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Trending Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔥 Trending Tags</h3>
              <div className="space-y-2">
                {mockTrendingTags.map((tag, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-teal-600 hover:text-teal-700 cursor-pointer">
                      #{tag.name}
                    </span>
                    <span className="text-sm text-gray-500">{tag.count}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Suggested Teachers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">👨‍🏫 Suggested Teachers</h3>
              <div className="space-y-4">
                {mockSuggestedTeachers.map((teacher, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={teacher.avatar}
                      alt={teacher.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{teacher.name}</h4>
                      <p className="text-sm text-gray-600">{teacher.subject}</p>
                    </div>
                    <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Classes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📅 Upcoming Classes</h3>
              <div className="space-y-4">
                {mockUpcomingClasses.map((class_, index) => (
                  <div key={index} className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-medium text-gray-900">{class_.title}</h4>
                    <p className="text-sm text-gray-600">by {class_.teacher}</p>
                    <p className="text-sm text-teal-600">{class_.time}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeed;