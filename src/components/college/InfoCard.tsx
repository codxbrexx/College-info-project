import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number | string[];
  colorClass?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, value, colorClass = 'text-primary-600' }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 flex items-start space-x-4 transition-all duration-300 hover:shadow-lg"> {/* Added hover effect */}
      <div className={`p-3 rounded-full bg-primary-100 dark:bg-primary-900/20 ${colorClass}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {title}
        </h3>
        {Array.isArray(value) ? (
          <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
            {value.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 dark:text-gray-300 text-base">
            {value}
          </p>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
