import { DashboardLayout } from '../layouts/DashboardLayout';  // Your custom layout
import { Breadcrumb } from '../components/common/Breadcrumb';  // Breadcrumb component
import { ClipboardList, Package, Wrench } from 'lucide-react';  // Icons for reports
import { Link } from 'react-router-dom';  // Link component from react-router-dom

export const Reports = () => {
  // Define the report types with title, description, icon, and path
  const reportTypes = [
    {
      title: 'Meal Reports',
      description: 'View and generate meal service reports',
      icon: ClipboardList,
      path: '/reports/meal',  // Path to Meal Reports (you can implement MealReport component similarly)
    },
    {
      title: 'Asset Reports',
      description: 'Track asset allocation and status',
      icon: Package,
      path: '/reports/AssetReport',  // Path to Asset Report
    },
    {
      title: 'Maintenance Reports',
      description: 'Monitor maintenance requests and resolutions',
      icon: Wrench,
      path: '/reports/maintenance',  // Path to Maintenance Reports (you can implement MaintenanceReport similarly)
    },
  ];

  return (
    <DashboardLayout>
      <Breadcrumb current="Reports" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportTypes.map((report) => (
          <Link
            key={report.path}
            to={report.path}  // Link to the corresponding report page
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <report.icon className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
                <p className="text-sm text-gray-500">{report.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  );
};
