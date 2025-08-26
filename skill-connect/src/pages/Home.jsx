import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import {
  UserGroupIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import techAnimation from '../../public/Tech.json';
const Home = () => {
  // // Lottie animation path (from public folder)
  // const heroAnimation = `${process.env.PUBLIC_URL}/tech.json`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Learn from the{' '}
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Best Teachers
                </span>{' '}
                Worldwide
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with passionate educators, master new skills, and transform your learning journey
                with personalized one-on-one sessions and interactive courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-200 text-center shadow-lg"
                >
                  Start Learning Today
                </Link>
                <Link
                  to="/browse"
                  className="border-2 border-teal-500 text-teal-600 px-8 py-4 rounded-2xl font-semibold hover:bg-teal-500 hover:text-white transition-all duration-200 text-center"
                >
                  Browse Teachers
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-96 h-96">
                <Lottie
                  animationData={techAnimation}
                  loop={true}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How SkillConnect Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in just three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: UserGroupIcon,
                step: "01",
                title: "Find Your Perfect Teacher",
                description: "Browse through hundreds of verified teachers, filter by subject, price, and availability."
              },
              {
                icon: BookOpenIcon,
                step: "02",
                title: "Book Your Session",
                description: "Choose a convenient time slot and book your personalized learning session instantly."
              },
              {
                icon: ChatBubbleLeftRightIcon,
                step: "03",
                title: "Learn Live",
                description: "Join interactive sessions with whiteboard, chat, and screen sharing capabilities."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600">
              Powerful tools and features to enhance your learning experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Whiteboard",
                description: "Collaborate in real-time with digital whiteboards and drawing tools.",
                icon: "🎨"
              },
              {
                title: "HD Video Calls",
                description: "Crystal clear video and audio for seamless communication.",
                icon: "📹"
              },
              {
                title: "Screen Sharing",
                description: "Share screens to demonstrate concepts and solve problems together.",
                icon: "💻"
              },
              {
                title: "Session Recording",
                description: "Record sessions for later review and better retention.",
                icon: "📹"
              },
              {
                title: "File Sharing",
                description: "Share documents, assignments, and resources effortlessly.",
                icon: "📎"
              },
              {
                title: "Progress Tracking",
                description: "Monitor your learning progress with detailed analytics.",
                icon: "📊"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of successful learners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Developer",
                content: "SkillConnect helped me master React in just 3 months. The teachers are incredibly knowledgeable and patient.",
                rating: 5,
                avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
              },
              {
                name: "Michael Chen",
                role: "Business Analyst",
                content: "The personalized approach and flexible scheduling made it perfect for my busy lifestyle. Highly recommended!",
                rating: 5,
                avatar: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150"
              },
              {
                name: "Emily Rodriguez",
                role: "Designer",
                content: "Amazing platform! The interactive sessions and recording feature helped me learn UI/UX design effectively.",
                rating: 5,
                avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Join thousands of students and teachers on SkillConnect today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-teal-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Get Started Free
              </Link>
              <Link
                to="/browse"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-teal-600 transition-all duration-200"
              >
                Explore Teachers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
