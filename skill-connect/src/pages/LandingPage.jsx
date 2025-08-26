// src/pages/LandingPage.jsx
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  // ✅ Local Button Component
  const Button = ({ children, variant = "primary", size = "md", className = "", ...props }) => {
    const base =
      "inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-white text-indigo-700 font-bold hover:bg-gray-100",
      outline:
        "border border-white text-white hover:bg-white hover:text-indigo-700",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-3 text-lg",
    };

    return (
      <button
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  // ✅ Local Card Component
  const Card = ({ children, className = "" }) => (
    <div
      className={`bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition ${className}`}
    >
      {children}
    </div>
  );

  const CardContent = ({ children, className = "" }) => (
    <div className={`p-6 ${className}`}>{children}</div>
  );

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 to-white text-gray-800">
      {/* 🌟 Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          Learn. Teach. Connect.
        </motion.h1>
        <p className="text-lg max-w-2xl mb-8">
          A social-first skill exchange platform where students and teachers
          connect, chat, and learn together in an interactive way.
        </p>
        <div className="flex gap-4">
          <Button size="lg" variant="primary">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Browse Skills
          </Button>
        </div>
      </section>

      {/* ⚡ How It Works */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Search",
              desc: "Find teachers or peers by subject, rating, or interest.",
            },
            {
              title: "Connect",
              desc: "Chat, schedule classes, and join learning sessions.",
            },
            {
              title: "Learn Together",
              desc: "Enjoy interactive live sessions with tools and resources.",
            },
          ].map((step, i) => (
            <Card key={i}>
              <CardContent className="text-center">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 🌍 Features */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Smart Search & Filters",
            "One-to-One Messaging",
            "Scheduling & Calendar",
            "Interactive Online Classroom",
            "Ratings & Reviews",
            "Batch Courses & Group Learning",
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-indigo-600">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 👥 Testimonials */}
      <section className="py-20 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Sarah, Student",
              review:
                "I found amazing teachers and peers to study with. It's more engaging than any other platform.",
            },
            {
              name: "James, Teacher",
              review:
                "This platform helps me reach motivated learners and build my teaching community.",
            },
          ].map((t, i) => (
            <Card key={i}>
              <CardContent>
                <p className="text-gray-600 italic mb-4">“{t.review}”</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-indigo-700">
                    {t.name}
                  </span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="gold" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 🚀 Final CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Learn or Teach?
        </h2>
        <p className="mb-8 text-lg">
          Join SkillConnect today and grow your skills with a global community.
        </p>
        <Link to="/signup"><Button size="lg" variant="primary">
          Sign Up Free
        </Button></Link>
      </section>

      
    </div>
  );
}
