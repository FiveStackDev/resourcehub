import { Utensils, Box, Wrench } from 'lucide-react';
import { QuickAction } from './QuickAction';

export const QuickActions = () => {
  const handleAction = (action: string) => {
    console.log(`Handling ${action} action`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <QuickAction
        icon={Utensils}
        title="Book Meal"
        description="Reserve your next meal"
        iconColor="text-green-500"
        onClick={() => handleAction('meal')}
      />
      <QuickAction
        icon={Box}
        title="Request Asset"
        description="Submit new asset request"
        iconColor="text-yellow-500"
        onClick={() => handleAction('asset')}
      />
      <QuickAction
        icon={Wrench}
        title="Report Issue"
        description="Submit maintenance request"
        iconColor="text-red-500"
        onClick={() => handleAction('maintenance')}
      />
    </div>
  );
};