import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { MealReportTable } from '../../components/reports/MealReportTable';

export const MealReport = () => {
  return (
    <DashboardLayout>
      <Breadcrumb paths={[
        { name: 'Reports', path: '/reports' },
        { name: 'Meal Report' }
      ]} />
      <MealReportTable />
    </DashboardLayout>
  );
};