import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { MaintenanceReportTable } from '../../components/reports/MaintenanceReportTable';

export const MaintenanceReport = () => {
  return (
    <DashboardLayout>
      <Breadcrumb paths={[
        { name: 'Reports', path: '/reports' },
        { name: 'Maintenance Report' }
      ]} />
      <MaintenanceReportTable />
    </DashboardLayout>
  );
};