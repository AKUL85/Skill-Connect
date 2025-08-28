// src/components/TeacherDetailsForm.jsx
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function TeacherDetailsForm({ formData, handleChange }) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-700 p-6 rounded-lg shadow-inner border border-gray-600"
    >
      <h3 className="text-2xl font-semibold text-purple-300 mb-5">
        Teacher Details 🧑‍🏫
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Teacher Name
          </label>
          <input
            type="text"
            name="teacherName"
            value={formData.teacherName}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., Sarah Wilson"
          />
        </div>

        {/* Main Subject */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Main Subject
          </label>
          <input
            type="text"
            name="teacherSubject"
            value={formData.teacherSubject}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., JavaScript"
          />
        </div>

        {/* Specialties */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-green-300 mb-1">
            Specialties (comma-separated)
          </label>
          <input
            type="text"
            name="teacherSpecialties"
            value={formData.teacherSpecialties}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., React, Node.js, TypeScript"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Rating (0–5)
          </label>
          <input
            type="number"
            name="teacherRating"
            value={formData.teacherRating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., 4.9"
          />
        </div>

        {/* Reviews */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Reviews Count
          </label>
          <input
            type="number"
            name="teacherReviews"
            value={formData.teacherReviews}
            onChange={handleChange}
            min="0"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., 127"
          />
        </div>

        {/* Rate */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Standard Rate ($)
          </label>
          <input
            type="number"
            name="teacherPrice"
            value={formData.teacherPrice}
            onChange={handleChange}
            min="0"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., 45"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Experience
          </label>
          <input
            type="text"
            name="teacherExperience"
            value={formData.teacherExperience}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., 5+ years"
          />
        </div>

        {/* Bio */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-green-300 mb-1">
            Bio
          </label>
          <textarea
            name="teacherBio"
            value={formData.teacherBio}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="Passionate developer with expertise in..."
          ></textarea>
        </div>

        {/* Education */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Education
          </label>
          <input
            type="text"
            name="teacherEducation"
            value={formData.teacherEducation}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., Computer Science, MIT"
          />
        </div>

        {/* Languages */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Languages (comma-separated)
          </label>
          <input
            type="text"
            name="teacherLanguages"
            value={formData.teacherLanguages}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., English, Spanish"
          />
        </div>

        {/* Avatar */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-green-300 mb-1">
            Avatar URL
          </label>
          <input
            type="url"
            name="teacherAvatar"
            value={formData.teacherAvatar}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="https://images.pexels.com/photos/..."
          />
        </div>

        {/* Online Status */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="teacherIsOnline"
            checked={formData.teacherIsOnline}
            onChange={handleChange}
            className="mr-2 h-5 w-5 text-blue-600 bg-gray-700 border-gray-600 rounded"
          />
          <label className="text-sm font-medium text-green-300">Is Online</label>
        </div>

        {/* Next Available */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Next Available
          </label>
          <input
            type="text"
            name="teacherNextAvailable"
            value={formData.teacherNextAvailable}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., 2:00 PM Today"
          />
        </div>

        {/* Total Students */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Total Students
          </label>
          <input
            type="number"
            name="teacherTotalStudents"
            value={formData.teacherTotalStudents}
            onChange={handleChange}
            min="0"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., 45"
          />
        </div>

        {/* Completed Sessions */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Completed Sessions
          </label>
          <input
            type="number"
            name="teacherCompletedSessions"
            value={formData.teacherCompletedSessions}
            onChange={handleChange}
            min="0"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., 234"
          />
        </div>

        {/* Response Time */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Response Time
          </label>
          <input
            type="text"
            name="teacherResponseTime"
            value={formData.teacherResponseTime}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., &lt; 1 hour"
          />
        </div>

        {/* Achievements */}
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
            Achievements (comma-separated)
          </label>
          <input
            type="text"
            name="teacherAchievements"
            value={formData.teacherAchievements}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600"
            placeholder="e.g., Top Rated, Rising Talent"
          />
        </div>
      </div>
    </motion.div>
  );
}
