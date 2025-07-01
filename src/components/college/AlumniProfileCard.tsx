import React from 'react';
import type { Alumni } from '../../types/college';
import  { Linkedin, Building2, Briefcase } from 'lucide-react';

interface AlumniProfileCardProps {
  alumni: Alumni;
}

const AlumniProfileCard: React.FC<AlumniProfileCardProps> = ({ alumni }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-6 text-center">
        <img
          src={alumni.profileImage}
          alt={alumni.name}
          className="h-24 w-24 rounded-full object-cover mx-auto mb-4 border-4 border-primary-500"
        />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {alumni.name}
        </h3>
        <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
          {alumni.designation}
        </p>
        <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
          <Building2 className="h-4 w-4" />
          <span>{alumni.currentCompany}</span>
        </div>
        {alumni.venture && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Founder of {alumni.venture}
          </p>
        )}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Batch: {alumni.batch}
        </p>
        {alumni.linkedinUrl && (
          <a
            href={alumni.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        )}
        {alumni.testimonial && (
          <p className="text-gray-600 dark:text-gray-300 italic mt-4 text-sm">
            "{alumni.testimonial}"
          </p>
        )}
      </div>
    </div>
  );
};

export default AlumniProfileCard;
