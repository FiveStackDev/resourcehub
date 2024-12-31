import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const RoleSwitch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(location.pathname === '/dashboard');

  useEffect(() => {
    setIsAdmin(location.pathname === '/dashboard');
  }, [location.pathname]);

  const handleRoleChange = () => {
    const newIsAdmin = !isAdmin;
    setIsAdmin(newIsAdmin);
    navigate(newIsAdmin ? '/dashboard' : '/user-dashboard');
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`text-sm ${!isAdmin ? 'text-white' : 'text-gray-400'}`}>User</span>
      <button
        onClick={handleRoleChange}
        className="relative w-12 h-6 rounded-full bg-white/10 cursor-pointer transition-colors"
        aria-label={`Switch to ${isAdmin ? 'user' : 'admin'} mode`}
      >
        <div
          className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
            isAdmin ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-sm ${isAdmin ? 'text-white' : 'text-gray-400'}`}>Admin</span>
    </div>
  );
};