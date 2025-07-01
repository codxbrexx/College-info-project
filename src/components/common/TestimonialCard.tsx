import React from 'react';
import type { Testimonial } from '../../types/college';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col h-full border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg"> {/* Added border and hover */}
      <Quote className="h-8 w-8 text-primary-500 mb-4" />
      <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-6 flex-grow">
        "{testimonial.text}"
      </p>
      <div className="flex items-center mt-auto">
        {testimonial.image && (
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-gray-200 dark:border-gray-700" /* Added border */
          />
        )}
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">
            {testimonial.author}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
