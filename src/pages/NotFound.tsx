import React from 'react';
import { Link } from 'react-router-dom';
import { Frown } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-128px)] flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-4 py-12">
      <Frown className="h-24 w-24 text-primary-500 mb-6" />
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        404
      </h1>
      <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Page Not Found
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
