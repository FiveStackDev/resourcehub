import { LucideIcon } from 'lucide-react';

interface QuickActionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  onClick: () => void;
}

export const QuickAction = ({ icon: Icon, title, description, iconColor, onClick }: QuickActionProps) => {
  return (
    <button 
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left w-full"
    >
      <Icon className={`${iconColor} mb-2`} size={24} />
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </button>
  );
};