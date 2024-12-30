import { useState } from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
  Snackbar,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddIcon from '@mui/icons-material/Add'; // Import Add icon
import { useSnackbar } from 'notistack';

export const Meal = () => {
  const { enqueueSnackbar } = useSnackbar();

  const mealTimes = [
    { id: 1, title: 'Breakfast', image: '/breakfast.png' },
    { id: 2, title: 'Lunch', image: '/lunch.png' },
    { id: 3, title: 'Dinner', image: '/dinner.png' },
  ];

  const mealTypes = [
    { id: 1, title: 'Veg', image: '/veg.png' },
    { id: 2, title: 'Fish', image: '/fish.png' },
    { id: 3, title: 'Chicken', image: '/chick.png' },
  ];

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentItem, setCurrentItem] = useState(null); // Track item being edited or deleted
  const [newTitle, setNewTitle] = useState('');
  const [newImage, setNewImage] = useState(null);

  const handleEditClick = (item) => {
    setCurrentItem(item);
    setNewTitle(item.title);
    setOpenEditDialog(true);
  };

  const handleDeleteClick = (item) => {
    setCurrentItem(item);
    setOpenDeleteDialog(true);
  };

  const handleEditClose = () => {
    setOpenEditDialog(false);
  };

  const handleDeleteClose = () => {
    setOpenDeleteDialog(false);
  };

  const handleSaveEdit = () => {
    // Simulate saving the updated item
    if (newTitle && currentItem) {
      // Update the item with the new title and image (in reality, you would update state or make an API call)
      enqueueSnackbar(`${newTitle} updated successfully!`, { variant: 'success' });
    }
    setOpenEditDialog(false);
  };

  const handleDelete = () => {
    // Simulate deleting the item
    if (currentItem) {
      // Remove the item (in reality, you would update state or make an API call to delete)
      enqueueSnackbar(`${currentItem.title} deleted successfully!`, { variant: 'success' });
    }
    setOpenDeleteDialog(false);
  };

  const renderCards = (items) =>
    items.map((item) => (
      <Grid item xs={12} sm={6} md={4} key={item.id}>
        <Card sx={{ borderRadius: 2, boxShadow: 3, width: 232, height: 252 }}>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt={item.title}
          />
          <CardContent>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              textAlign="center"
              sx={{
                mt: -2,
                mb: -5,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {item.title}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center', gap: 0.5, paddingBottom: 2 }}>
            <Button
              variant="outlined"
              startIcon={<EditOutlinedIcon />}
              color="primary"
              onClick={() => handleEditClick(item)}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              startIcon={<DeleteOutlineOutlinedIcon />}
              color="error"
              onClick={() => handleDeleteClick(item)}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));

  return (
    <DashboardLayout>
      <Box sx={{ padding: 3 }}>
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="h5" fontWeight="bold" color="black">
              Meal Times
            </Typography>
          </Box>
          <Box sx={{ mt: 2, mb: 5 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              endIcon={<AddIcon />}
            >
              Add New
            </Button>
          </Box>
          <Grid container spacing={3}>
            {renderCards(mealTimes)}
          </Grid>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="h5" fontWeight="bold" color="black">
              Meal Types
            </Typography>
          </Box>
          <Box sx={{ mt: 2, mb: 5 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              endIcon={<AddIcon />}
            >
              Add New
            </Button>
          </Box>
          <Grid container spacing={3}>
            {renderCards(mealTypes)}
          </Grid>
        </Box>

        {/* Edit Dialog */}
        <Dialog open={openEditDialog} onClose={handleEditClose}>
          <DialogTitle>Edit Meal</DialogTitle>
          <DialogContent>
            <TextField
              label="Meal Title"
              fullWidth
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Image URL"
                fullWidth
                value={newImage || ''}
                onChange={(e) => setNewImage(e.target.value)}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditClose}>Cancel</Button>
            <Button onClick={handleSaveEdit} color="primary">Save</Button>
          </DialogActions>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog open={openDeleteDialog} onClose={handleDeleteClose}>
          <DialogTitle>Delete Meal</DialogTitle>
          <DialogContent>
            <Typography>Are you sure you want to delete {currentItem?.title}?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteClose}>Cancel</Button>
            <Button onClick={handleDelete} color="error">Delete</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </DashboardLayout>
  );
};
