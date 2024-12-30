import {
  LayoutDashboard,
  Utensils,
  Box,
  Wrench, // Changed from Tool to Wrench
  Users,
  FileText,
  Settings,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Utensils, label: 'Meal', path: '/meal' },
  { icon: Box, label: 'Assets', path: '/assets' },
  { icon: Wrench, label: 'Maintenance', path: '/maintenance' }, // Updated icon
  { icon: Users, label: 'Users', path: '/users' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white min-h-[calc(100vh-64px)] shadow-sm">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};