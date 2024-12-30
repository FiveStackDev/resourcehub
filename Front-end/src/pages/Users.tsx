import { useState } from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { UserTable } from '../components/users/UserTable';
import { AddUserDialog } from '../components/users/AddUserDialog';
import { Button } from '@mui/material';
import { UserPlus } from 'lucide-react';

export interface User {
  id: string;
  email: string;
  userType: 'Admin' | 'User';
  additionalDetails: string;
  profilePicture: string;
}

export const Users = () => {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      email: 'admin@example.com',
      userType: 'Admin',
      additionalDetails: 'Main admin',
      profilePicture: 'https://ui-avatars.com/api/?name=Admin',
    },
    {
      id: '2',
      email: 'user1@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User1',
    },
    {
      id: '3',
      email: 'user2@example.com',
      userType: 'User',
      additionalDetails: 'New user',
      profilePicture: 'https://ui-avatars.com/api/?name=User2',
    },
  ]);

  const handleAddUser = (newUser: Omit<User, 'id'>) => {
    setUsers([...users, { ...newUser, id: Date.now().toString() }]);
    setIsAddUserOpen(false);
  };

  const handleEditUser = (editedUser: User) => {
    setUsers(users.map(user => user.id === editedUser.id ? editedUser : user));
  };

  const handleDeleteUsers = (userIds: string[]) => {
    setUsers(users.filter(user => !userIds.includes(user.id)));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">User Management</h1>
          <Button
            variant="contained"
            startIcon={<UserPlus size={20} />}
            onClick={() => setIsAddUserOpen(true)}
          >
            Add User
          </Button>
        </div>

        <UserTable
          users={users}
          onEditUser={handleEditUser}
          onDeleteUsers={handleDeleteUsers}
        />

        <AddUserDialog
          open={isAddUserOpen}
          onClose={() => setIsAddUserOpen(false)}
          onAdd={handleAddUser}
        />
      </div>
    </DashboardLayout>
  );
};