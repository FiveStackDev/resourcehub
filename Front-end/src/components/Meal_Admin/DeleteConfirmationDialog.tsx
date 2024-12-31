import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import { AlertTriangle } from 'lucide-react';

interface DeleteConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  item?: { id: number; title: string };
}

export const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({
  open,
  onClose,
  onDelete,
  item,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
            <DialogTitle className="flex items-center gap-2 text-red-600">
        <AlertTriangle />
        Confirm Deletion
      </DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete "{item?.title}"?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant='contained' color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
