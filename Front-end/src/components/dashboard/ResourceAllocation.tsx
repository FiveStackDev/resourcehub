import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['IT Equipment', 'Office Supplies', 'Furniture', 'Miscellaneous'],
  datasets: [
    {
      data: [40, 25, 20, 15],
      backgroundColor: [
        'rgb(59, 130, 246)',
        'rgb(16, 185, 129)',
        'rgb(245, 158, 11)',
        'rgb(239, 68, 68)',
      ],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
};

export const ResourceAllocation = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Resource Allocation</h2>
      <p className="text-gray-600 text-sm mb-6">Current resource distribution</p>
      <Doughnut data={data} options={options} />
    </div>
  );
};