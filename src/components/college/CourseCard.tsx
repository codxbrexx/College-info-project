import React from 'react';
import type { Course } from '../../types/college';
import { DollarSign, Clock, Users, BookOpen } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {course.name}
        </h3>
        <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
          {course.program} - {course.department} ({course.type})
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {course.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <span>Duration: {course.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <span>Annual Fee: ₹{course.annualFee.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <span>Seat Intake: {course.seatIntake}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <span>Entrance: {course.entranceExam.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
