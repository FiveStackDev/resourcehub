import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  TextField,
  IconButton,
  Typography,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

interface AddMealDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: () => void;
  title: string;
  setTitle: (value: string) => void;
  imagePreview: string | null;
  setImagePreview: (value: string | null) => void;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddMealDialog: React.FC<AddMealDialogProps> = ({
  open,
  onClose,
  onAdd,
  title,
  setTitle,
  imagePreview,
  setImagePreview,
  handleImageChange,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Meal</DialogTitle>
      <DialogContent sx={{ textAlign: 'center' }}>
        <Box sx={{ mb: 3 }}>
          <input
            accept="image/*"
            id="add-image-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <label htmlFor="add-image-upload">
            <IconButton color="primary" component="span">
              <PhotoCameraIcon />
            </IconButton>
          </label>
          <Typography variant="body2" color="textSecondary">
            Upload an image
          </Typography>
        </Box>
        <TextField
          label="Meal Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
