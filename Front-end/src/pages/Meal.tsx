import { DashboardLayout } from '../layouts/DashboardLayout';

export const Meal = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Meal Management</h1>
        </div>
      </div>
    </DashboardLayout>
  );
};