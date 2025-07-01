import React from 'react';
import { useCollegeData } from '../hooks/useCollegeData';
import AlumniProfileCard from '../components/college/AlumniProfileCard';
import Loading from '../components/common/Loading';
import { Users } from 'lucide-react';

const AlumniPage: React.FC = () => {
  const { alumni } = useCollegeData();

  if (!alumni) {
    return <Loading text="Loading alumni profiles..." />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-4">
          <Users className="h-8 w-8 text-purple-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Distinguished Alumni
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Meet the successful graduates who are making a significant impact across various industries worldwide.
        </p>
      </div>

      {alumni.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map(member => (
            <AlumniProfileCard key={member.id} alumni={member} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-600 dark:text-gray-400">
          <p className="text-lg">No alumni profiles available yet.</p>
        </div>
      )}
    </div>
  );
};

export default AlumniPage;
