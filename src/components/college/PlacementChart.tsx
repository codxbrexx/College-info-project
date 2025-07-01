import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import type { PlacementStat } from '../../types/college';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface PlacementChartProps {
  placementStat: PlacementStat;
}

const PlacementChart: React.FC<PlacementChartProps> = ({ placementStat }) => {
  const departments = placementStat.departmentStats.map(stat => stat.department);
  const percentages = placementStat.departmentStats.map(stat => stat.percentage);

  const data = {
    labels: departments,
    datasets: [
      {
        label: 'Placement Percentage (%)',
        data: percentages,
        backgroundColor: 'rgba(59, 130, 246, 0.6)', // primary-500 with opacity
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgb(107, 114, 128)', // gray-500
        },
      },
      title: {
        display: true,
        text: `Department-wise Placement Percentage - ${placementStat.year}`,
        color: 'rgb(17, 24, 39)', // gray-900
        font: {
          size: 18,
          weight: 'bold' as const,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + '%';
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'rgb(107, 114, 128)', // gray-500
        },
        grid: {
          color: 'rgba(229, 231, 235, 0.2)', // gray-200 with opacity
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: 'rgb(107, 114, 128)', // gray-500
          callback: function(value: any) {
            return value + '%';
          }
        },
        grid: {
          color: 'rgba(229, 231, 235, 0.2)', // gray-200 with opacity
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"> {/* Changed shadow-sm to shadow-md */}
      <div className="h-80"> {/* Fixed height for the chart */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PlacementChart;
