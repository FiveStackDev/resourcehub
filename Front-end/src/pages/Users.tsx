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
    {
      id: '4',
      email: 'user3@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User3',
    },
    {
      id: '5',
      email: 'user4@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User4',
    },
    {
      id: '6',
      email: 'user5@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User5',
    },
    {
      id: '7',
      email: 'user6@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User6',
    },
    {
      id: '8',
      email: 'user7@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User7',
    },
    {
      id: '9',
      email: 'user8@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User8',
    },
    {
      id: '10',
      email: 'user9@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User9',
    },
    {
      id: '11',
      email: 'user10@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User10',
    },
    {
      id: '12',
      email: 'user11@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User11',
    },
    {
      id: '13',
      email: 'user12@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User12',
    },
    {
      id: '14',
      email: 'user13@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User13',
    },
    {
      id: '15',
      email: 'user14@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User14',
    },
    {
      id: '16',
      email: 'user15@example.com',
      userType: 'User',
      additionalDetails: 'Regular user',
      profilePicture: 'https://ui-avatars.com/api/?name=User15',
    },
    {
      id: '17',
      email: 'admin2@example.com',
      userType: 'Admin',
      additionalDetails: 'Secondary admin',
      profilePicture: 'https://ui-avatars.com/api/?name=Admin2',
    },
    {
      id: '18',
      email: 'admin3@example.com',
      userType: 'Admin',
      additionalDetails: 'Support admin',
      profilePicture: 'https://ui-avatars.com/api/?name=Admin3',
    },
    {
      id: '19',
      email: 'admin4@example.com',
      userType: 'Admin',
      additionalDetails: 'Backup admin',
      profilePicture: 'https://ui-avatars.com/api/?name=Admin4',
    }
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