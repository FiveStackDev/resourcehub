import { Activity } from '../../types/activity';

interface RecentActivitiesProps {
  activities: Activity[];
}

export const RecentActivities = ({ activities }: RecentActivitiesProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b">
            <span className="text-gray-600">{activity.action}</span>
            <span className="text-sm text-gray-400">{activity.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};