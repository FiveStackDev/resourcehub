import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Logo } from '../components/Logo';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log({ email });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 to-purple-900 flex">
      {/* Left side with logo and message */}
      <div className="flex-1 flex flex-col justify-center items-center p-12">
        <Logo />
        <Typography variant="h2" className="text-white mt-8 mb-4">
          No Worries.!!
        </Typography>
        <Link
          to="/login"
          className="text-white border border-white px-6 py-2 rounded hover:bg-white/10 transition-colors"
        >
          Take me back.!
        </Link>
      </div>

      {/* Right side with reset form */}
      <div className="flex-1 flex items-center justify-center">
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-lg w-96"
        >
          <Typography variant="h4" className="text-white mb-6">
            Forgot Password ?
          </Typography>

          <Typography className="text-white/70 mb-6">
            Enter your email
          </Typography>

          <TextField
            fullWidth
            label="Email address"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.23)',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: 'rgb(147, 197, 253)',
              '&:hover': {
                bgcolor: 'rgb(96, 165, 250)',
              },
            }}
          >
            RESET PASSWORD
          </Button>

          <Typography className="text-white text-center">
            Go back to login page?{' '}
            <Link to="/login" className="text-blue-300 hover:underline">
              login
            </Link>
          </Typography>
        </Box>
      </div>
    </div>
  );
};