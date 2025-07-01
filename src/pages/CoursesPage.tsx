import React, { useState } from 'react';
import { useCollegeData } from '../hooks/useCollegeData';
import CourseCard from '../components/college/CourseCard';
import Loading from '../components/common/Loading';
import { BookText, Filter } from 'lucide-react';

const CoursesPage: React.FC = () => {
  const { courses } = useCollegeData();
  const [selectedType, setSelectedType] = useState<'UG' | 'PG' | 'All'>('All');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const programTypes = ['All', 'UG', 'PG'];
  const departments = ['All', ...new Set(courses.map(course => course.department))];

  const filteredCourses = courses.filter(course => {
    const typeMatch = selectedType === 'All' || course.type === selectedType;
    const departmentMatch = selectedDepartment === 'All' || course.department === selectedDepartment;
    return typeMatch && departmentMatch;
  });

  if (!courses) {
    return <Loading text="Loading courses data..." />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full mb-4">
          <BookText className="h-8 w-8 text-primary-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Programs & Courses Offered
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore our diverse range of undergraduate and postgraduate programs designed to shape future leaders.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700"> {/* Changed shadow-sm to shadow-md */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          <span>Filter Courses</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="programType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Program Type
            </label>
            <div className="flex flex-wrap gap-2">
              {programTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type as 'UG' | 'PG' | 'All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedType === type
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Department
            </label>
            <div className="flex flex-wrap gap-2">
              {departments.map(department => (
                <button
                  key={department}
                  onClick={() => setSelectedDepartment(department)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedDepartment === department
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {department}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course List */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-600 dark:text-gray-400">
          <p className="text-lg">No courses found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
