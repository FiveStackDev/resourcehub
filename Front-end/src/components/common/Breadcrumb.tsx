import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbPath {
  name: string;
  path?: string;
}

interface BreadcrumbProps {
  current?: string;
  paths?: BreadcrumbPath[];
}

export const Breadcrumb = ({ current, paths }: BreadcrumbProps) => {
  const breadcrumbItems = paths || (current ? [{ name: current }] : []);

  return (
    <div className="flex items-center gap-2 mb-6">
      <Link to="/dashboard" className="text-gray-600 hover:text-blue-500">
        <Home size={20} />
      </Link>
      {breadcrumbItems.map((item, index) => (
        <div key={item.name} className="flex items-center gap-2">
          <ChevronRight size={16} className="text-gray-400" />
          {item.path ? (
            <Link to={item.path} className="text-gray-600 hover:text-blue-500">
              {item.name}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.name}</span>
          )}
        </div>
      ))}
    </div>
  );
};