import * as React from 'react';
import { DashboardLayout } from '../../layouts/DashboardLayout';
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
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// Columns for Asset table
const columns = [
  { id: 'name', label: 'Asset Name', minWidth: 170 },
  { id: 'quantity', label: 'Quantity', minWidth: 100 },
  { id: 'condition', label: 'Condition', minWidth: 120 },
  { id: 'location', label: 'Location', minWidth: 170 },
];

// Sample Data
function createData(name, quantity, condition, location) {
  return { name, quantity, condition, location };
}

const rows = [
  createData('Laptop', 10, 'Good', 'New York'),
  createData('Printer', 5, 'Fair', 'Los Angeles'),
  createData('Desk', 20, 'Excellent', 'Chicago'),
  createData('Chair', 15, 'Good', 'San Francisco'),
  createData('Projector', 8, 'Poor', 'Houston'),
  createData('Monitor', 12, 'Good', 'Dallas'),
  createData('Keyboard', 30, 'Excellent', 'Austin'),
  createData('Mouse', 25, 'Fair', 'Seattle'),
  createData('Scanner', 10, 'Good', 'Miami'),
  createData('Headphones', 8, 'Excellent', 'Boston'),
];

export const Assets = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCondition, setSelectedCondition] = React.useState('');
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

  const handleConditionChange = (event) => {
    setSelectedCondition(event.target.value);
  };

  React.useEffect(() => {
    const filtered = rows.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCondition ? row.condition === selectedCondition : true)
      );
    });
    setFilteredRows(filtered);
  }, [searchTerm, selectedCondition]);

  return (
    <DashboardLayout>
      <Box sx={{ padding: 3 }}>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <Typography variant="h5" fontWeight="bold" color="black">
              Asset Report
            </Typography>
          </div>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, alignItems: 'center' }}>
            <TextField
              label="Search Assets"
              variant="outlined"
              size="small"
              sx={{ mr: 2 }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <FormControl sx={{ width: '200px' }} size="small">
              <InputLabel>Condition</InputLabel>
              <Select
                value={selectedCondition}
                onChange={handleConditionChange}
                label="Condition"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Good">Good</MenuItem>
                <MenuItem value="Fair">Fair</MenuItem>
                <MenuItem value="Excellent">Excellent</MenuItem>
                <MenuItem value="Poor">Poor</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        {/* Table Section */}
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
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

        {/* Generate Report Button */}
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary">
            Generate Report
          </Button>
        </Box>
      </Box>
    </DashboardLayout>
  );
};
