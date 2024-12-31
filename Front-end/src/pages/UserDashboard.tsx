import { DashboardLayout } from '../layouts/DashboardLayout';
import { StatCard } from '../components/dashboard/StatCard';
import { Utensils, Box, Wrench } from 'lucide-react';
import { RecentActivities } from '../components/user/RecentActivities';
import { QuickActions } from '../components/user/QuickActions';
import { Activity } from '../types/activity';

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

const recentActivities: Activity[] = [
  { date: '2024-02-20', action: 'Requested maintenance for laptop' },
  { date: '2024-02-19', action: 'Checked out office supplies' },
  { date: '2024-02-18', action: 'Booked lunch meal' },
];

export const UserDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="My Meals Today"
            value="2"
            icon={<Utensils className="text-green-500" />}
            chartData={{
              labels: monthLabels,
              data: [1, 2, 2, 1, 2],
            }}
          />
          <StatCard
            title="My Assets"
            value="3"
            icon={<Box className="text-yellow-500" />}
            chartData={{
              labels: monthLabels,
              data: [2, 3, 3, 3, 3],
            }}
          />
          <StatCard
            title="My Maintenance Requests"
            value="1"
            icon={<Wrench className="text-red-500" />}
            chartData={{
              labels: monthLabels,
              data: [0, 1, 2, 1, 1],
            }}
          />
        </div>

        {/* Recent Activities */}
        <RecentActivities activities={recentActivities} />

        {/* Quick Actions */}
        <QuickActions />
      </div>
    </DashboardLayout>
  );
};