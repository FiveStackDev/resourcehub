import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useState } from 'react';
import { User } from '../../pages/Users';

interface AddUserDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (user: Omit<User, 'id'>) => void;
}

export const AddUserDialog = ({ open, onClose, onAdd }: AddUserDialogProps) => {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<'Admin' | 'User'>('User');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [emailError, setEmailError] = useState(false);

  // Regular expression for basic email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email format
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }

    // Call onAdd with user data if email is valid
    onAdd({
      email,
      userType,
      additionalDetails,
      profilePicture: `https://ui-avatars.com/api/?name=${email.split('@')[0]}`,
    });

    // Reset form
    setEmail('');
    setUserType('User');
    setAdditionalDetails('');
    setEmailError(false);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <div className="space-y-4 mt-2">
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              error={emailError} // Display error style if email is invalid
              helperText={emailError ? "Please enter a valid email address" : ""}
            />

            <FormControl fullWidth>
              <InputLabel>User Type</InputLabel>
              <Select
                value={userType}
                label="User Type"
                onChange={(e) => setUserType(e.target.value as 'Admin' | 'User')}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="User">User</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Additional Details"
              multiline
              rows={4}
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
