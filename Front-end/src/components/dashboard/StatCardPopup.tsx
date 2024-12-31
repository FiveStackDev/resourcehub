import { Line } from 'react-chartjs-2';
import { X } from 'lucide-react';
import { Dialog } from '@mui/material';

interface StatCardPopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  value: string | number;
  chartData?: {
    labels: string[];
    data: number[];
  };
}

export const StatCardPopup = ({ 
  open, 
  onClose, 
  title, 
  subtitle, 
  value,
  chartData 
}: StatCardPopupProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: chartData?.labels || [],
    datasets: [
      {
        data: chartData?.data || [],
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4,
      },
    ],
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-8">
          <div className="text-sm text-gray-600 mb-2">Current Value</div>
          <div className="text-3xl font-bold">{value}</div>
        </div>

        {chartData && (
          <div className="h-64">
            <Line options={options} data={data} />
          </div>
        )}
      </div>
    </Dialog>
  );
};
