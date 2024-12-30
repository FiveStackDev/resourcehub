import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Breakfast',
      data: [75, 72, 68, 64, 60, 55, 50],
      borderColor: 'rgb(59, 130, 246)',
      tension: 0.4,
    },
    {
      label: 'Lunch',
      data: [40, 25, 30, 35, 32, 28, 30],
      borderColor: 'rgb(239, 68, 68)',
      tension: 0.4,
    },
    {
      label: 'Dinner',
      data: [80, 82, 85, 88, 90, 92, 95],
      borderColor: 'rgb(34, 197, 94)',
      tension: 0.4,
    },
  ],
};

export const MealDistributionChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Meal Distribution</h2>
      <p className="text-gray-600 text-sm mb-6">Weekly meal service trends</p>
      <Line options={options} data={data} />
    </div>
  );
};