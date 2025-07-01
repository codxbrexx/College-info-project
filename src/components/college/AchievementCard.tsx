import React from 'react';
import type { Achievement } from '../../types/college';
import { Trophy, Lightbulb, ScrollText, Calendar, Sparkles } from 'lucide-react';

interface AchievementCardProps {
  achievement: Achievement;
}

const getIcon = (type: Achievement['type']) => {
  switch (type) {
    case 'Award': return Trophy;
    case 'Honor': return ScrollText;
    case 'Patent': return Lightbulb;
    case 'Innovation': return Sparkles;
    default: return Trophy;
  }
};

const getColorClass = (type: Achievement['type']) => {
  switch (type) {
    case 'Award': return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400';
    case 'Honor': return 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400';
    case 'Patent': return 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400';
    case 'Innovation': return 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400';
    default: return 'bg-gray-100 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400';
  }
};

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const Icon = getIcon(achievement.type);
  const colorClass = getColorClass(achievement.type);
  
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transform hover:-translate-y-1">
      <div className="flex items-start space-x-4 mb-4">
        <div className={`p-3 rounded-xl ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {achievement.title}
          </h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md font-medium">
              {achievement.type}
            </span>
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{achievement.year}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {achievement.description}
      </p>
    </div>
  );
};


export default AchievementCard;
