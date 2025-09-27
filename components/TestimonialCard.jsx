'use client';

import Image from "next/image";
import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-80 mx-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group hover:-translate-y-2">
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="h-6 w-6 text-blue-600/60" />
      </div>

      {/* Rating & Band Score */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">
            Band {testimonial.bandScore}
          </span>
          <span className="text-xs text-gray-500">
            in {testimonial.timeframe}
          </span>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 leading-relaxed mb-6 text-sm">
        "{testimonial.text}"
      </p>

      {/* Achievement */}
      <div className="mb-4">
        <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
          🎉 {testimonial.achievement}
        </span>
      </div>

      {/* Author Info */}
      <div className="flex items-center">
        {testimonial.avatar ? (
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[linear-gradient(135deg,hsl(200_98%_39%),hsl(220_91%_50%))] flex items-center justify-center text-white font-bold text-sm mr-3">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div className="flex-1">
          <div className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </div>
          <div className="text-xs text-gray-500">
            {testimonial.role} • {testimonial.location}
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
    </div>
  );
};

export default TestimonialCard;
