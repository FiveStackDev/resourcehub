import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { AlertTriangle } from 'lucide-react';

interface DeleteConfirmDialogProps {
  open: boolean;
  userCount: number;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteConfirmDialog = ({
  open,
  userCount,
  onClose,
  onConfirm,
}: DeleteConfirmDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle className="flex items-center gap-2 text-red-600">
        <AlertTriangle />
        Confirm Deletion
      </DialogTitle>
      <DialogContent>
        Are you sure you want to delete {userCount} user{userCount !== 1 ? 's' : ''}? This action
        cannot be undone.
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="error" variant="contained" onClick={onConfirm}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};