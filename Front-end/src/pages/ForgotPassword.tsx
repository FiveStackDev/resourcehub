import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex"
      style={{ backgroundImage: 'url(/Forgot_password.png)' }}
    >
      <div className="flex-1 flex flex-col justify-center items-center p-12">
        <Typography variant="h2" className="text-white mt-8 mb-4"></Typography>
        <Link
          to="/login"
          className="text-white border border-white px-6 py-4 rounded hover:bg-white/10 transition-colors"
          style={{
            position: 'absolute',
            top: '620px',
            left: '215px',
            fontSize: '30px',
            fontWeight: '500',
            textAlign: 'center',
          }}
        >
          Take me back.!
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="p-8 rounded-lg w-96"
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '2px solid white',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
          }}
        >
          <Typography variant="h4" className="text-white mb-6">
            Forgot Password ?
          </Typography>

          <Typography className="text-white/70 mb-6">
            Enter your email
          </Typography>

          <TextField
            fullWidth
            required
            label="Email address"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            defaultValue="JhonDoe"
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
              bgcolor: '#90CAF9',
              color: 'black',
              '&:hover': {
                bgcolor: '#64B5F6',
              },
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
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
