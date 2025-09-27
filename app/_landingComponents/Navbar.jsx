'use client'

import { useState, useEffect } from "react";
import { Menu, X, GraduationCap, Sparkles, Play } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-white/20 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg ">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
            
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold gradient-text text-shadow-xs leading-tight">
                IELTS Elite
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                AI-Powered Learning
              </span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {[
              { name: "Home", href: "#home" },
              { name: "Features", href: "#features" },
              { name: "Success Stories", href: "#testimonials" },
              { name: "Contact", href: "#contact" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2.5 rounded-xl backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/30 text-gray-700 dark:text-gray-300 hover:bg-white/30 hover:border-white/50 transition-all duration-300 font-medium group flex items-center">
              <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start Free Trial
            </button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-xl backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/30 group"
            >
              <div className="relative w-6 h-6 text-gray-700 dark:text-gray-300">
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`} />
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
          <div className="backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/30 rounded-2xl p-6 mt-4 space-y-6">
            {[
              { name: "Home", href: "#home" },
              { name: "Features", href: "#features" },
              { name: "Success Stories", href: "#testimonials" },
              { name: "Contact", href: "#contact" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all duration-200 py-2 border-b border-white/10 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="space-y-3 pt-4">
              <button className="w-full justify-center px-6 py-2.5 rounded-xl backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/30 text-gray-700 dark:text-gray-300 hover:bg-white/30 hover:border-white/50 transition-all duration-300 font-medium group flex items-center">
                <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
              <button className="w-full px-6 py-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;