import React, { useState } from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Box, Typography, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useSnackbar } from 'notistack';

import { MealCard } from '../components/Meal_Admin/MealCard';
import { EditMealDialog } from '../components/Meal_Admin/EditMealDialog';
import { AddMealDialog } from '../components/Meal_Admin/AddMealDialog';
import { DeleteConfirmationDialog } from '../components/Meal_Admin/DeleteConfirmationDialog';

interface MealItem {
  id: number;
  title: string;
  image: string;
}

export const Meal: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [mealTimes, setMealTimes] = useState<MealItem[]>([
    { id: 1, title: 'Breakfast', image: '/breakfast.png' },
    { id: 2, title: 'Lunch', image: '/lunch.png' },
    { id: 3, title: 'Dinner', image: '/dinner.png' },
  ]);

  const [mealTypes, setMealTypes] = useState<MealItem[]>([
    { id: 1, title: 'Veg', image: '/veg.png' },
    { id: 2, title: 'Fish', image: '/fish.png' },
    { id: 3, title: 'Chicken', image: '/chick.png' },
  ]);

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const [currentItem, setCurrentItem] = useState<MealItem | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newImage, setNewImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleEditClick = (item: MealItem) => {
    setCurrentItem(item);
    setNewTitle(item.title);
    setImagePreview(item.image);
    setOpenEditDialog(true);
  };

  const handleDeleteClick = (item: MealItem) => {
    setCurrentItem(item);
    setOpenDeleteDialog(true);
  };

  const handleAddClick = () => {
    setNewTitle('');
    setImagePreview(null);
    setNewImage(null);
    setOpenAddDialog(true);
  };

  const handleSaveEdit = () => {
    if (currentItem && newTitle) {
      const updatedMeals =
        mealTimes.map((meal) =>
          meal.id === currentItem.id ? { ...meal, title: newTitle, image: imagePreview || meal.image } : meal
        ) || [];
      setMealTimes(updatedMeals);
      enqueueSnackbar(`${newTitle} updated successfully!`, { variant: 'success' });
    }
    setOpenEditDialog(false);
  };

  const handleAddNew = () => {
    if (newTitle && newImage) {
      const newMeal: MealItem = {
        id: Date.now(),
        title: newTitle,
        image: URL.createObjectURL(newImage),
      };
      setMealTimes([...mealTimes, newMeal]);
      enqueueSnackbar(`${newTitle} added successfully!`, { variant: 'success' });
    }
    setOpenAddDialog(false);
  };

  const handleDelete = () => {
    if (currentItem) {
      const updatedMeals = mealTimes.filter((meal) => meal.id !== currentItem.id);
      setMealTimes(updatedMeals);
      enqueueSnackbar(`${currentItem.title} deleted successfully!`, { variant: 'success' });
    }
    setOpenDeleteDialog(false);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setNewImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderCards = (items: MealItem[]) =>
    items.map((item) => (
      <Grid item xs={2.4} sm={2.4} md={2.4} key={item.id}>
        <MealCard item={item} onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} />
      </Grid>
    ));
  return (
    <DashboardLayout>
      <Box sx={{ padding: 3 }}>
        {/* Meal Times Section */}
        <Box >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="h5" fontWeight="bold" color="black">
              Meal Times
            </Typography>
          </Box>
          <Button
              variant="contained"
              color="primary"
              endIcon={<AddIcon />}
              onClick={handleAddClick}
              sx={{ mb: 4 }}
            >
              Add New
            </Button>
          <Grid container spacing={3} sx={{ mb: 2 }}>
            {renderCards(mealTimes)}
          </Grid>
        </Box>

        {/* Meal Types Section */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="h5" fontWeight="bold" color="black">
              Meal Types
            </Typography>
          </Box>
          <Button
              variant="contained"
              color="primary"
              endIcon={<AddIcon />}
              onClick={handleAddClick}
              sx={{ mb: 4 }}
            >
              Add New
            </Button>
          <Grid container spacing={3}>
            {renderCards(mealTypes)}
          </Grid>
        </Box>

        {/* Dialogs */}
        <EditMealDialog
          open={openEditDialog}
          onClose={() => setOpenEditDialog(false)}
          onSave={handleSaveEdit}
          title={newTitle}
          setTitle={setNewTitle}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          handleImageChange={handleImageChange}
        />

        <AddMealDialog
          open={openAddDialog}
          onClose={() => setOpenAddDialog(false)}
          onAdd={handleAddNew}
          title={newTitle}
          setTitle={setNewTitle}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          handleImageChange={handleImageChange}
        />

        <DeleteConfirmationDialog
          open={openDeleteDialog}
          onClose={() => setOpenDeleteDialog(false)}
          onDelete={handleDelete}
          item={currentItem}
        />
      </Box>
    </DashboardLayout>
  );
};
