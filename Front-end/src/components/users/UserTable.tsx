import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  TablePagination,
  Button,
} from '@mui/material';
import { Pencil, Trash2 } from 'lucide-react';
import { User } from '../../pages/Users';
import { EditUserDialog } from './EditUserDialog';
import { DeleteConfirmDialog } from './DeleteConfirmDialog';

interface UserTableProps {
  users: User[];
  onEditUser: (user: User) => void;
  onDeleteUsers: (userIds: string[]) => void;
}

export const UserTable = ({ users, onEditUser, onDeleteUsers }: UserTableProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(users.map(user => user.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, id];
    } else {
      newSelected = selected.filter(item => item !== id);
    }

    setSelected(newSelected);
  };

  const handleDelete = () => {
    onDeleteUsers(selected);
    setSelected([]);
    setIsDeleteDialogOpen(false);
  };

  return (
    <>
      <Paper className="relative">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={users.length > 0 && selected.length === users.length}
                    indeterminate={selected.length > 0 && selected.length < users.length}
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>User</TableCell>
                <TableCell>User Type</TableCell>
                <TableCell>Additional Details</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(user => (
                  <TableRow key={user.id} hover>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selected.includes(user.id)}
                        onChange={() => handleSelect(user.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={user.profilePicture}
                          alt={user.email}
                          className="w-8 h-8 rounded-full"
                        />
                        {user.email}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        user.userType === 'Admin' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.userType}
                      </span>
                    </TableCell>
                    <TableCell>{user.additionalDetails}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => setEditUser(user)}>
                        <Pencil size={20} />
                      </IconButton>
                      <IconButton 
                        onClick={() => {
                          setSelected([user.id]);
                          setIsDeleteDialogOpen(true);
                        }}
                      >
                        <Trash2 size={20} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <TablePagination
          component="div"
          count={users.length}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }}
        />

        {selected.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-red-50 p-2 flex justify-between items-center">
            <span className="text-red-800">{selected.length} users selected</span>
            <Button
              variant="contained"
              color="error"
              startIcon={<Trash2 size={20} />}
              onClick={() => setIsDeleteDialogOpen(true)}
            >
              Delete Selected
            </Button>
          </div>
        )}
      </Paper>

      {editUser && (
        <EditUserDialog
          user={editUser}
          open={!!editUser}
          onClose={() => setEditUser(null)}
          onSave={(editedUser) => {
            onEditUser(editedUser);
            setEditUser(null);
          }}
        />
      )}

      <DeleteConfirmDialog
        open={isDeleteDialogOpen}
        userCount={selected.length}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};