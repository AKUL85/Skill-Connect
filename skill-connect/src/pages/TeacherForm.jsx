// src/App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import CourseDetailsForm from "../components/Form/CourseDetailsForm";
import TeacherDetailsForm from "../components/Form/TeacherDetailsForm";


export default function TeacherForm() {
  const [formData, setFormData] = useState({
    // Course
    courseTitle: "",
    courseDescription: "",
    courseSubject: "",
    courseRating: "",
    courseStudents: "",
    coursePrice: "",

    // Teacher
    teacherName: "",
    teacherSubject: "",
    teacherSpecialties: "",
    teacherRating: "",
    teacherReviews: "",
    teacherPrice: "",
    teacherExperience: "",
    teacherBio: "",
    teacherEducation: "",
    teacherLanguages: "",
    teacherAvatar: "",
    teacherIsOnline: false,
    teacherNextAvailable: "",
    teacherTotalStudents: "",
    teacherCompletedSessions: "",
    teacherResponseTime: "",
    teacherAchievements: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Course & Teacher data submitted!");
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.08 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6 flex items-center justify-center font-sans">
      <motion.form
        onSubmit={handleSubmit}
        className="relative w-full max-w-4xl rounded-2xl p-0.5 bg-gradient-to-br from-red-500 via-yellow-500 to-indigo-600 shadow-2xl"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-gray-800 rounded-2xl p-8 sm:p-10 flex flex-col gap-8">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 text-center">
            Create New Course & Teacher Info
          </h2>

          <CourseDetailsForm formData={formData} handleChange={handleChange} />
          <TeacherDetailsForm formData={formData} handleChange={handleChange} />

          <motion.button
            type="submit"
            className="w-full py-3 px-6 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform active:scale-95 shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit Course & Teacher Data
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}
