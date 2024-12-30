import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { AssetReportTable } from '../../components/reports/AssetReportTable';

export const AssetReport = () => {
  return (
    <DashboardLayout>
      <Breadcrumb paths={[
        { name: 'Reports', path: '/reports' },
        { name: 'Asset Report' }
      ]} />
      <AssetReportTable />
    </DashboardLayout>
  );
};