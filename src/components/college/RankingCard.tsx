import React from 'react';
import type { Ranking } from '../../types/college';
import { Award, CalendarDays, Building2 } from 'lucide-react';

interface RankingCardProps {
  ranking: Ranking;
}

const RankingCard: React.FC<RankingCardProps> = ({ ranking }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 flex items-start space-x-4 transition-all duration-300 hover:shadow-lg"> {/* Changed shadow-sm to shadow-md, added hover */}
      <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600">
        <Award className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {ranking.organization} {ranking.category ? `(${ranking.category})` : ''}
        </h3>
        <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
          {ranking.rank}
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <CalendarDays className="h-4 w-4" />
          <span>{ranking.year}</span>
        </div>
      </div>
    </div>
  );
};

export default RankingCard;
