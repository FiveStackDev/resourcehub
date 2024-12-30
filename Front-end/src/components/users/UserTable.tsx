import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TablePagination,
  Button,
  Tooltip,
} from "@mui/material";
import { Pencil, Trash2 } from "lucide-react";
import { User } from "../../pages/Users";
import { EditUserDialog } from "./EditUserDialog";
import { DeleteConfirmDialog } from "./DeleteConfirmDialog";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

interface UserTableProps {
  users: User[];
  onEditUser: (user: User) => void;
  onDeleteUsers: (userIds: string[]) => void;
}

export const UserTable = ({
  users,
  onEditUser,
  onDeleteUsers,
}: UserTableProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortColumn, setSortColumn] = useState<"email" | "userType" | "additionalDetails">("email");

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(users.map((user) => user.id));
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
      newSelected = selected.filter((item) => item !== id);
    }

    setSelected(newSelected);
  };

  const handleDelete = () => {
    onDeleteUsers(selected);
    setSelected([]);
    setIsDeleteDialogOpen(false);
  };

  // Sorting function
  const handleSort = (column: "email" | "userType" | "additionalDetails") => {
    const isSameColumn = column === sortColumn;
    const newSortDirection = isSameColumn && sortDirection === "asc" ? "desc" : "asc";

    setSortColumn(column);
    setSortDirection(newSortDirection);
  };

  // Sort the users based on the selected column and direction
  const sortedUsers = [...users].sort((a, b) => {
    const aValue = a[sortColumn as keyof User];
    const bValue = b[sortColumn as keyof User];

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <>
      <Paper className="relative">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "#e0e0e0", color: "#333" }}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={users.length > 0 && selected.length === users.length}
                    indeterminate={selected.length > 0 && selected.length < users.length}
                    onChange={handleSelectAll}
                  />
                </TableCell>
                {/* Add sorting to the User column */}
                <TableCell onClick={() => handleSort("email")}>
                  User
                  {sortColumn === "email" && (
                    <span>{sortDirection === "asc" ? <ArrowUpward /> : <ArrowDownward />}</span>
                  )}
                </TableCell>
                {/* Add sorting to the User Type column */}
                <TableCell onClick={() => handleSort("userType")}>
                  User Type
                  {sortColumn === "userType" && (
                    <span>{sortDirection === "asc" ? <ArrowUpward /> : <ArrowDownward />}</span>
                  )}
                </TableCell>
                {/* Add sorting to the Additional Details column */}
                <TableCell onClick={() => handleSort("additionalDetails")}>
                  Additional Details
                  {sortColumn === "additionalDetails" && (
                    <span>{sortDirection === "asc" ? <ArrowUpward /> : <ArrowDownward />}</span>
                  )}
                </TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <TableRow
                    key={user.id}
                    hover
                    style={{
                      backgroundColor: selected.includes(user.id) ? "#c6e2f3" : "#fff", // Lighter hover effect with a darker selected background
                      borderBottom: "1px solid #e0e0e0", // Soft borders
                    }}
                  >
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
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${user.userType === "Admin"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                          }`}
                      >
                        {user.userType}
                      </span>
                    </TableCell>
                    <TableCell>{user.additionalDetails}</TableCell>
                    <TableCell align="center">
                      <div className="flex justify-center gap-2">
                        <Tooltip title="Edit User">
                          <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<Pencil size={20} />}
                            onClick={() => setEditUser(user)}
                          >
                            Edit
                          </Button>
                        </Tooltip>
                        <Tooltip title="Delete User">
                          <Button
                            variant="outlined"
                            color="error"
                            startIcon={<Trash2 size={20} />}
                            onClick={() => {
                              setSelected([user.id]);
                              setIsDeleteDialogOpen(true);
                            }}
                          >
                            Delete
                          </Button>
                        </Tooltip>
                      </div>
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
          <div className="absolute bottom-0 left-0 right-0 bg-blue-50 p-2 flex justify-between items-center">
            <span className="text-blue-800">{selected.length} users selected</span>
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
