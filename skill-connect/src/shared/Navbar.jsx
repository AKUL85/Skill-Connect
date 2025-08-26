import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop dropdown index
  const [mobileOpenIdx, setMobileOpenIdx] = useState(null); // mobile accordion index
  const navRef = useRef(null);

  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "Explore",
      dropdown: [
        { label: "Browse Teachers", path: "/browse" },
        { label: "Courses", path: "/courses" },
        { label: "Community Feed", path: "/community" },
      ],
    },
    {
      label: "Student",
      dropdown: [
        { label: "Dashboard", path: "/student/dashboard" },
        { label: "My Courses", path: "/student/courses" },
        { label: "Assignments & Notes", path: "/student/assignments" },
      ],
    },
    {
      label: "Teacher",
      dropdown: [
        { label: "Dashboard", path: "/teacher/dashboard" },
        { label: "Create Course", path: "/teacher/create-course" },
        { label: "Schedule Availability", path: "/teacher/schedule" },
        { label: "Earnings", path: "/teacher/earnings" },
      ],
    },
    {
      label: "More",
      dropdown: [
        { label: "About", path: "/about" },
        { label: "FAQ", path: "/faq" },
        { label: "Support", path: "/support" },
      ],
    },
  ];

  // Close desktop dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route click
  const handleNavClick = () => {
    setIsMobileOpen(false);
    setMobileOpenIdx(null);
  };

  return (
    <nav
      ref={navRef}
      className="bg-gradient-to-r from-green-300 via-purple-300 to-pink-300 text-white shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
              <BookOpenIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">SkillConnect</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {menuItems.map((item, idx) => {
              const isOpen = openDropdown === idx;
              const hasDropdown = !!item.dropdown;

              return (
                <div key={idx} className="relative">
                  {hasDropdown ? (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : idx)
                      }
                      className="flex items-center gap-1 hover:text-yellow-900/90 transition font-medium"
                      aria-haspopup="menu"
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="hover:text-yellow-900/90 transition font-medium"
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Panel */}
                  {hasDropdown && (
                    <div
                      className={`absolute left-0 top-full mt-2 min-w-[200px] rounded-lg shadow-xl bg-white text-gray-800 overflow-hidden transform transition-all duration-150 origin-top ${
                        isOpen
                          ? "opacity-100 scale-100 visible"
                          : "opacity-0 scale-95 invisible pointer-events-none"
                      } z-50`}
                      role="menu"
                    >
                      {item.dropdown.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 hover:bg-gray-100 hover:text-indigo-600"
                          role="menuitem"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              to="/login"
              className="ml-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="ml-2 bg-white text-indigo-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-[max-height,opacity] duration-300 ease-out bg-indigo-700 ${
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pb-4 pt-2 text-white space-y-1">
          {menuItems.map((item, idx) => {
            const hasDropdown = !!item.dropdown;
            const open = mobileOpenIdx === idx;

            if (!hasDropdown) {
              return (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={handleNavClick}
                  className="block py-2 font-semibold hover:text-yellow-300"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={idx} className="border-b border-white/10 py-1">
                <button
                  type="button"
                  onClick={() =>
                    setMobileOpenIdx(open ? null : idx)
                  }
                  className="w-full flex items-center justify-between py-2 font-semibold"
                  aria-expanded={open}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pl-3">
                    {item.dropdown.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        to={sub.path}
                        onClick={handleNavClick}
                        className="block py-2 text-sm hover:text-yellow-300"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mt-2 grid grid-cols-2 gap-2">
            <Link
              to="/login"
              onClick={handleNavClick}
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-300 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={handleNavClick}
              className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-semibold text-center hover:bg-gray-100 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
