import React from 'react';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12',
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="h-full w-full border-4 border-gray-200 dark:border-gray-700 border-t-primary-600 rounded-full"></div>
      </div>
      {text && (
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
          {text}
        </p>
      )}
    </div>
  );
};

export default Loading;
