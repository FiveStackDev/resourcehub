import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography } from '@mui/material';
import { Eye, EyeOff } from 'lucide-react';

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('JhonDoe');
  const [password, setPassword] = useState('JhonDoe');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex"
      style={{ backgroundImage: 'url(/Login.png)' }}
    >
      <div className="flex-1 flex flex-col justify-center items-center p-12">
        <Typography variant="h2" className="text-white mt-8 mb-4"></Typography>
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
            Sign In
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

          <TextField
            fullWidth
            required
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
              bgcolor: '#90CAF9',
              color: 'black', 
              '&:hover': {
                bgcolor: '#64B5F6',
              },
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
            }}
          >
            SIGN IN
          </Button>

          <Typography className="text-white text-center">
            Forget password?{' '}
            <Link to="/forgot-password" className="text-blue-300 hover:underline">
              Reset
            </Link>
          </Typography>
        </Box>
      </div>
    </div>
  );
};
