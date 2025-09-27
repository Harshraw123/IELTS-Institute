'use client'

import { Award, TrendingUp, Star } from "lucide-react";
import TestimonialCard from "@/app/_landingComponents/TestimonialCard";
import { testimonials, testimonialsStats } from "@/lib/data/testimonials";

const Testimonials = () => {
  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-8 w-8 text-blue-600 mr-3" />
            <span className="text-lg font-semibold gradient-text  uppercase tracking-wider">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            Real Students,{" "}
            <span className="gradient-text font-bold leading-tight text-shadow">Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join 50,000+ successful IELTS candidates who transformed their lives 
            with our AI-powered platform. See their incredible journeys.
          </p>
          
          {/* Stats Bar */}
          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="flex items-center bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-sm">
              <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">{testimonialsStats.successRate} Success Rate</span>
            </div>
            <div className="flex items-center bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-sm">
              <Star className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">{testimonialsStats.averageRating}/5 Average Rating</span>
            </div>
          </div>
        </div>

        {/* Horizontal Marquee */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Marquee container */}
          <div className="flex animate-marquee hover:pause-marquee">
            {allTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white/60 backdrop-blur-sm border  border-gray-200 rounded-3xl p-8 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-shadow  gradient-text">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands who transformed their IELTS scores with our AI-powered platform. 
              Your success story could be next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className=" bg-[linear-gradient(135deg,hsl(200_98%_39%),hsl(220_91%_50%))] text-white font-semibold px-10 py-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="border-2 border-gray-300 text-gray-700 font-semibold px-10 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                View All Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl pointer-events-none opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl pointer-events-none opacity-30"></div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        .pause-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;