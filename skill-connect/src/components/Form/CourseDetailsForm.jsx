// src/components/CourseDetailsForm.jsx
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function CourseDetailsForm({ formData, handleChange }) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-700 p-6 rounded-lg shadow-inner border border-gray-600"
    >
      <h3 className="text-2xl font-semibold text-blue-300 mb-5">
        Course Details 📚
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Course Title
          </label>
          <input
            type="text"
            name="courseTitle"
            value={formData.courseTitle}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., React Fundamentals"
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Course Subject
          </label>
          <input
            type="text"
            name="courseSubject"
            value={formData.courseSubject}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., JavaScript, Web Development"
            required
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-green-300 mb-1">
            Description
          </label>
          <textarea
            name="courseDescription"
            value={formData.courseDescription}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="A comprehensive course covering modern React..."
            required
          ></textarea>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Course Rating
          </label>
          <input
            type="number"
            name="courseRating"
            value={formData.courseRating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
          />
        </div>

        {/* Students */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Students Enrolled
          </label>
          <input
            type="number"
            name="courseStudents"
            value={formData.courseStudents}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Course Price ($)
          </label>
          <input
            type="number"
            name="coursePrice"
            value={formData.coursePrice}
            onChange={handleChange}
            min="0"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            required
          />
        </div>
      </div>
    </motion.div>
  );
}
