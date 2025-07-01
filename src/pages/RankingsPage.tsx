import React from 'react';
import { useCollegeData } from '../hooks/useCollegeData';
import RankingCard from '../components/college/RankingCard';
import AchievementCard from '../components/college/AchievementCard';
import Loading from '../components/common/Loading';
import { Award, Trophy } from 'lucide-react';

const RankingsPage: React.FC = () => {
  const { rankings, achievements } = useCollegeData();

  if (!rankings || !achievements) {
    return <Loading text="Loading rankings and achievements..." />;
  }

  // Sort achievements by year descending
  const sortedAchievements = [...achievements].sort((a, b) => b.year - a.year);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full mb-4">
          <Award className="h-8 w-8 text-yellow-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Rankings & Achievements
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Recognized for academic excellence, research, and innovation.
        </p>
      </div>

      {/* Rankings Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-3">
          <Award className="h-7 w-7 text-yellow-600" />
          <span>Our Rankings</span>
        </h2>
        {rankings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rankings.map(ranking => (
              <RankingCard key={ranking.id} ranking={ranking} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-600 dark:text-gray-400">
            <p className="text-lg">No ranking data available yet.</p>
          </div>
        )}
      </section>

      {/* Achievements Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-3">
          <Trophy className="h-7 w-7 text-green-600" />
          <span>Notable Achievements</span>
        </h2>
        {sortedAchievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedAchievements.map(achievement => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-600 dark:text-gray-400">
            <p className="text-lg">No achievements listed yet.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default RankingsPage;
