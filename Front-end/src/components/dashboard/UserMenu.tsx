import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center gap-3">
          <img
            src="https://ui-avatars.com/api/?name=John+Doe"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="text-sm font-medium">John Doe</div>
            <div className="text-xs text-gray-300">john@example.com</div>
          </div>
        </div>
        <ChevronDown size={20} />
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};