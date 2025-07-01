import React, { useState } from 'react';
import { useCollegeData } from '../hooks/useCollegeData';
import PlacementStatsCard from '../components/college/PlacementStatsCard';
import PlacementChart from '../components/college/PlacementChart';
import Loading from '../components/common/Loading';
import { Briefcase, DollarSign, TrendingUp, Download } from 'lucide-react';

const PlacementsPage: React.FC = () => {
  const { placementStats } = useCollegeData();
  const [selectedYear, setSelectedYear] = useState<number | 'latest'>('latest');

  const years = placementStats.map(stat => stat.year).sort((a, b) => b - a);
  const latestYear = years[0];

  const currentPlacementStat = selectedYear === 'latest'
    ? placementStats.find(stat => stat.year === latestYear)
    : placementStats.find(stat => stat.year === selectedYear);

  if (!placementStats || placementStats.length === 0) {
    return <Loading text="Loading placement data..." />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 dark:bg-secondary-900/20 rounded-full mb-4">
          <Briefcase className="h-8 w-8 text-secondary-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Placements & Career Opportunities
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Our strong industry connections ensure excellent career prospects for our graduates.
        </p>
      </div>

      {/* Year Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-md border border-gray-200 dark:border-gray-700"> {/* Changed shadow-sm to shadow-md */}
          <button
            onClick={() => setSelectedYear('latest')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedYear === 'latest'
                ? 'bg-primary-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Latest ({latestYear})
          </button>
          {years.filter(year => year !== latestYear).map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedYear === year
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {currentPlacementStat ? (
        <>
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <PlacementStatsCard
              title={`Average Package (${currentPlacementStat.year})`}
              value={currentPlacementStat.averagePackage}
              unit="LPA"
              icon={DollarSign}
              colorClass="text-primary-600"
              decimalPlaces={1}
            />
            <PlacementStatsCard
              title={`Highest Package (${currentPlacementStat.year})`}
              value={currentPlacementStat.highestPackage}
              unit="LPA"
              icon={TrendingUp}
              colorClass="text-secondary-600"
              decimalPlaces={1}
            />
          </div>

          {/* Top Recruiters */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700"> {/* Changed shadow-sm to shadow-md */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Top Recruiters {currentPlacementStat.year}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {currentPlacementStat.topRecruiters.map((company, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>

          {/* Department-wise Placement Chart */}
          <div className="mb-8">
            <PlacementChart placementStat={currentPlacementStat} />
          </div>

          {/* Download Report */}
          {currentPlacementStat.reportPdfUrl && (
            <div className="text-center mt-8">
              <a
                href={currentPlacementStat.reportPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md"
              >
                <Download className="h-5 w-5" />
                <span>Download Placement Report {currentPlacementStat.year}</span>
              </a>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 text-gray-600 dark:text-gray-400">
          <p className="text-lg">No placement data available for the selected year.</p>
        </div>
      )}
    </div>
  );
};

export default PlacementsPage;
