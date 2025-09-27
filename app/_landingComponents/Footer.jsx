'use client';

import { GraduationCap, ArrowRight } from "lucide-react";
import { 
  quickLinks, 
  resources, 
  contact, 
  socialLinks, 
  businessHours, 
  footerText 
} from "@/lib/data/footer";

const Footer = () => {
  
    return (
      <footer id="contact" className="relative pt-24 pb-8 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Newsletter Section */}
          <div className="backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/30 rounded-3xl p-8 mb-16 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 gradient-text text-shadow-xs leading-tight">
                  Get IELTS Tips & Updates
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Subscribe to our newsletter for expert IELTS tips, practice materials, 
                  and exclusive offers delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
              <input
  type="email"
  placeholder="Enter your email"
  className="flex-1 px-6 py-4 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm"
/>
                <button className="px-6 py-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg rounded-xl group flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
  
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text text-shadow-xs leading-tight">
                  IELTS Elite
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {footerText.description}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/30 rounded-xl hover:scale-110 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-500" />
                  </a>
                ))}
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-100">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-100">
                Resources
              </h4>
              <ul className="space-y-4">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-100">
                Contact Us
              </h4>
              <ul className="space-y-4">
                {contact.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              {/* Business Hours */}
              <div className="mt-6 p-4 backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border border-white/30 rounded-xl">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Business Hours
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Mon - Fri: {businessHours.weekdays}<br />
                  Sat - Sun: {businessHours.weekends}
                </div>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-600 dark:text-gray-400 text-sm gradient-text text-shadow-xs">
                {footerText.copyright}
              </div>
              <div className="flex space-x-6 text-sm">
                {footerText.policies.map((policy, index) => (
                  <a
                    key={index}
                    href={policy.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    {policy.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      </footer>
    );
  };
  
  export default Footer;