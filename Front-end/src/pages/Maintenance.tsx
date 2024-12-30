import * as React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Avatar,
  Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SendIcon from '@mui/icons-material/Send';

// Columns for Maintenance table
const columns = [
  { id: 'profile', label: 'User Profile', minWidth: 170 },
  { id: 'description', label: 'Description', minWidth: 170 },
  { id: 'priority', label: 'Priority Level', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 170 },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 170,
    align: 'center',
  },
];

// Sample Data for Maintenance with more entries
function createData(profile, description, priority, status) {
  return { profile, description, priority, status };
}

const rows = [
  createData(
    { name: 'John Doe', image: '/profile1.jpg' },
    'Fixing server issue',
    'High',
    'In Progress'
  ),
  createData(
    { name: 'Jane Smith', image: '/profile2.jpg' },
    'Database optimization',
    'Medium',
    'Completed'
  ),
  createData(
    { name: 'Mark Johnson', image: '/profile3.jpg' },
    'Server maintenance',
    'Low',
    'Pending'
  ),
  createData(
    { name: 'Sara Lee', image: '/profile4.jpg' },
    'Networking issue',
    'High',
    'In Progress'
  ),
  createData(
    { name: 'Paul Harris', image: '/profile5.jpg' },
    'Software upgrade',
    'Medium',
    'Completed'
  ),
  createData(
    { name: 'Chris Brown', image: '/profile6.jpg' },
    'Bug fixes',
    'High',
    'Pending'
  ),
  createData(
    { name: 'Olivia Green', image: '/profile7.jpg' },
    'Hardware replacement',
    'Low',
    'In Progress'
  ),
  createData(
    { name: 'David White', image: '/profile8.jpg' },
    'Firewall setup',
    'Medium',
    'Completed'
  ),
  createData(
    { name: 'Sophia Walker', image: '/profile9.jpg' },
    'Cloud storage setup',
    'High',
    'In Progress'
  ),
  createData(
    { name: 'William Lewis', image: '/profile10.jpg' },
    'Server room cleaning',
    'Low',
    'Pending'
  ),
  createData(
    { name: 'Mia King', image: '/profile11.jpg' },
    'Network diagnostics',
    'Medium',
    'Completed'
  ),
  createData(
    { name: 'Ethan Scott', image: '/profile12.jpg' },
    'Security patch update',
    'High',
    'In Progress'
  ),
];

export const Maintenance = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedStatus, setSelectedStatus] = React.useState('');
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  React.useEffect(() => {
    const filtered = rows.filter((row) => {
      return (
        row.profile.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedStatus ? row.status === selectedStatus : true)
      );
    });
    setFilteredRows(filtered);
  }, [searchTerm, selectedStatus]);

  return (
    <DashboardLayout>
      <Box sx={{ padding: 3 }}>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <Typography variant="h5" fontWeight="bold" color="black">
              Maintenance Management
            </Typography>
          </div>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, alignItems: 'center' }}>
            <TextField
              label="Search Maintenance"
              variant="outlined"
              size="small"
              sx={{ mr: 2 }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <FormControl sx={{ width: '200px' }} size="small">
              <InputLabel>Status</InputLabel>
              <Select
                value={selectedStatus}
                onChange={handleStatusChange}
                label="Status"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
            >
              Add New Maintenance
            </Button>
          </Box>
        </div>

        {/* Table Section */}
        <Paper sx={{ width: '100%', overflow: 'hidden', mt: 4 }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.profile.name}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === 'profile' ? (
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Avatar alt={value.name} src={value.image} sx={{ marginRight: 2 }} />
                                  <Typography>{value.name}</Typography>
                                </Box>
                              ) : column.id === 'status' ? (
                                <Chip
                                  label={value}
                                  color={value === 'Completed' ? 'success' : 'warning'}
                                />
                              ) : column.id === 'actions' ? (
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<EditOutlinedIcon />}
                                    sx={{ mr: 1 }}
                                  >
                                    Edit
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    color="error"
                                    startIcon={<DeleteOutlineOutlinedIcon />}
                                    sx={{ mr: 1 }}
                                  >
                                    Delete
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    color="success"
                                    startIcon={<SendIcon />}
                                  >
                                    Send
                                  </Button>
                                </Box>
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </DashboardLayout>
  );
};
