import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import { UploadFile } from "@mui/icons-material";

interface EditMealDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  title: string;
  setTitle: (value: string) => void;
  imagePreview: string | null;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EditMealDialog: React.FC<EditMealDialogProps> = ({
  open,
  onClose,
  onSave,
  title,
  setTitle,
  imagePreview,
  handleImageChange,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle align="center">Edit Meal</DialogTitle>
      <DialogContent>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {/* Display Current Photo */}
          {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    width: '100%',
                    maxWidth: '160px',
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: 4,
                    paddingTop:20
                  }}
                />
              ) : (
                <Typography variant="caption" color="textSecondary">
                  No image selected
                </Typography>
              )}

          {/* Upload Component */}
          <Grid item xs={12} textAlign="center">
            <label htmlFor="image-upload">
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
              >
                <UploadFile fontSize="large" color="primary" />
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ textDecoration: "underline" }}
                >
                  Upload New Image
                </Typography>
              </Box>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </label>
          </Grid>

          {/* Meal Title Field */}
          <Grid item xs={12}>
            <TextField
              label="Meal Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>

          {/* Buttons */}
          <Grid item xs={12} textAlign="center">
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button onClick={onClose} variant="outlined">
                Cancel
              </Button>
              <Button onClick={onSave} variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
