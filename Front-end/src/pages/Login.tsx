import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography } from '@mui/material';
import { Eye, EyeOff } from 'lucide-react';
import { Logo } from '../components/Logo';

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would validate credentials here
    // For now, we'll just navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 to-purple-900 flex">
      {/* Left side with logo and welcome message */}
      <div className="flex-1 flex flex-col justify-center items-center p-12">
        <Logo />
        <Typography variant="h2" className="text-white mt-8 mb-4">
          Welcome Back .!
        </Typography>
      </div>

      {/* Right side with login form */}
      <div className="flex-1 flex items-center justify-center">
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-lg w-96"
        >
          <Typography variant="h4" className="text-white mb-6">
            Sign In
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

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              ),
            }}
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

          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-checked': {
                    color: 'white',
                  },
                }}
              />
            }
            label="Remember me"
            className="text-white mt-2"
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
            SIGN IN
          </Button>

          <Typography className="text-white text-center">
            forget password?{' '}
            <Link to="/forgot-password" className="text-blue-300 hover:underline">
              reset
            </Link>
          </Typography>
        </Box>
      </div>
    </div>
  );
};