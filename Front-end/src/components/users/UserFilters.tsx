import { 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel 
} from '@mui/material';
import { Search } from 'lucide-react';

interface UserFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedRole: string;
  onRoleChange: (value: string) => void;
  selectedDepartment: string;
  onDepartmentChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (value: string) => void;
}

export const UserFilters = ({
  searchQuery,
  onSearchChange,
  selectedRole,
  onRoleChange,
  selectedDepartment,
  onDepartmentChange,
  selectedStatus,
  onStatusChange
}: UserFiltersProps) => {
  const roles = ['', 'Admin', 'Manager', 'Employee'];
  const departments = ['', 'IT', 'HR', 'Finance', 'Operations', 'Marketing'];
  const statuses = ['', 'active', 'inactive'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <TextField
          fullWidth
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            className: 'pl-10'
          }}
        />
      </div>

      <FormControl fullWidth>
        <InputLabel>Role</InputLabel>
        <Select
          value={selectedRole}
          label="Role"
          onChange={(e) => onRoleChange(e.target.value)}
        >
          {roles.map((role) => (
            <MenuItem key={role} value={role}>
              {role || 'All Roles'}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Department</InputLabel>
        <Select
          value={selectedDepartment}
          label="Department"
          onChange={(e) => onDepartmentChange(e.target.value)}
        >
          {departments.map((dept) => (
            <MenuItem key={dept} value={dept}>
              {dept || 'All Departments'}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          value={selectedStatus}
          label="Status"
          onChange={(e) => onStatusChange(e.target.value)}
        >
          {statuses.map((status) => (
            <MenuItem key={status} value={status}>
              {status || 'All Statuses'}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};