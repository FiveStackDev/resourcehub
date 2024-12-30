import { ReactNode, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { StatCardPopup } from './StatCardPopup';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  chartData?: {
    labels: string[];
    data: number[];
  };
}

export const StatCard = ({ title, value, icon, chartData }: StatCardProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const getSubtitle = () => {
    switch (title) {
      case 'Total Employees':
        return 'Active employees in the system';
      case 'Today Total meals':
        return 'Meals served today';
      case 'Due Assets':
        return 'Assets pending return';
      case 'New Maintenance':
        return 'New maintenance requests';
      default:
        return '';
    }
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setIsPopupOpen(true)}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-600 text-sm font-medium flex items-center gap-2">
            {title}
            <ChevronDown size={16} className="text-gray-400" />
          </h3>
          {icon}
        </div>
        <p className="text-3xl font-bold">{value}</p>
      </div>

      <StatCardPopup
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={title}
        subtitle={getSubtitle()}
        value={value}
        chartData={chartData}
      />
    </>
  );
};