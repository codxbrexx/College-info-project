import React from 'react';
import CountUp from 'react-countup';
import { DollarSign, TrendingUp, Download } from 'lucide-react';

interface PlacementStatsCardProps {
  title: string;
  value: number;
  unit?: string;
  icon: React.ElementType;
  colorClass: string;
  decimalPlaces?: number;
}

const PlacementStatsCard: React.FC<PlacementStatsCardProps> = ({
  title,
  value,
  unit = '',
  icon: Icon,
  colorClass,
  decimalPlaces = 0,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 flex items-center space-x-4 transition-all duration-300 hover:shadow-lg"> {/* Changed shadow-sm to shadow-md, added hover */}
      <div className={`p-3 rounded-full ${colorClass.replace('text-', 'bg-')}/10`}>
        <Icon className={`h-6 w-6 ${colorClass}`} />
      </div>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
          <CountUp end={value} duration={2.5} decimals={decimalPlaces} prefix={unit === '₹' ? '₹' : ''} suffix={unit === 'LPA' ? ' LPA' : unit} />
        </h3>
      </div>
    </div>
  );
};

export default PlacementStatsCard;
