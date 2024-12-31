import { DashboardLayout } from '../layouts/DashboardLayout';
import { StatCard } from '../components/dashboard/StatCard';
import { ResourceCard } from '../components/dashboard/ResourceCard';
import { MealDistributionChart } from '../components/dashboard/MealDistributionChart';
import { ResourceAllocation } from '../components/dashboard/ResourceAllocation';
import { Users, Utensils, Box, Wrench } from 'lucide-react';

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen space-y-6 p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Employees"
            value="452"
            icon={<Users className="text-blue-500" />}
            chartData={{
              labels: monthLabels,
              data: [420, 435, 440, 448, 452],
            }}
          />
          <StatCard
            title="Today Total meals"
            value="360"
            icon={<Utensils className="text-green-500" />}
            chartData={{
              labels: monthLabels,
              data: [380, 410, 425, 440, 460],
            }}
          />
          <StatCard
            title="Due Assets"
            value="30"
            icon={<Box className="text-yellow-500" />}
            chartData={{
              labels: monthLabels,
              data: [25, 28, 32, 35, 30],
            }}
          />
          <StatCard
            title="New Maintenance"
            value="10"
            icon={<Wrench className="text-red-500" />}
            chartData={{
              labels: monthLabels,
              data: [8, 12, 15, 11, 10],
            }}
          />
        </div>

        {/* Rest of the dashboard content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* MealDistributionChart takes up 2 columns on large screens, ResourceAllocation takes up 1 column */}
          <div className="lg:col-span-2">
            <MealDistributionChart />
          </div>

          <div className="lg:col-span-1">
            <ResourceAllocation />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard
            title="Materials And IT"
            total={50}
            highPriority={12}
            progress={75}
          />
          <ResourceCard
            title="Stationary"
            total={30}
            highPriority={8}
            progress={60}
          />
          <ResourceCard
            title="Wellness"
            total={40}
            highPriority={15}
            progress={85}
          />
          <ResourceCard
            title="Facilities"
            total={25}
            highPriority={5}
            progress={45}
          />
          <ResourceCard
            title="Maintenance Tools"
            total={60}
            highPriority={20}
            progress={70}
          />
          <ResourceCard
            title="Extra Items"
            total={15}
            highPriority={3}
            progress={30}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};
