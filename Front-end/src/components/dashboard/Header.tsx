import { Bell, Search } from 'lucide-react';
import { Logo } from '../Logo';
import { UserMenu } from './UserMenu';

export const Header = () => {
  return (
    <header className="bg-navy-900 text-white px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5">
            <img src="/wso2-logo.png" alt="WSO2" className="h-6" />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="bg-white/10 rounded-full pl-10 pr-4 py-1.5 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="relative">
            <Bell size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};