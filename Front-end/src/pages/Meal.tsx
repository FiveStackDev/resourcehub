import { DashboardLayout } from '../layouts/DashboardLayout';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddIcon from '@mui/icons-material/Add'; // Import Add icon

export const Meal = () => {
  const mealTimes = [
    { id: 1, title: 'Breakfast', image: '/breakfast.png' },
    { id: 2, title: 'Lunch', image: '/lunch.png' },
    { id: 3, title: 'Dinner', image: '/dinner.png' },
  ];

  const mealTypes = [
    { id: 1, title: 'Veg', image: '/veg.png' },
    { id: 2, title: 'Fish', image: '/fish.png' },
    { id: 3, title: 'Chicken', image: '/chick.png' },
  ];

  const renderCards = (items) =>
    items.map((item) => (
      <Grid item xs={12} sm={6} md={4} key={item.id}>
        <Card sx={{ borderRadius: 2, boxShadow: 3, width: 232, height: 252 }}>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt={item.title}
          />
          <CardContent>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              textAlign="center"
              sx={{
                mt: -2,
                mb: -5,
                overflow: 'hidden', 
                textOverflow: 'ellipsis', 
                whiteSpace: 'nowrap', // Ensuring that text doesn't overflow and stays on one line
              }}
            >
              {item.title}
            </Typography>
          </CardContent>
          <CardActions
            sx={{ justifyContent: 'center', gap: 0.5, paddingBottom: 2 }}
          >
            <Button
              variant="outlined"
              startIcon={<EditOutlinedIcon />}
              color="primary"
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              startIcon={<DeleteOutlineOutlinedIcon />}
              color="error"
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));

  return (
    <DashboardLayout>
      <Box sx={{ padding: 3 }}>

        <Box sx={{ mb: 4 }}> {/* Reduced bottom margin */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1, // Reduced bottom margin
            }}
          >
            <Typography variant="h5" fontWeight="bold" color="black">
              Meal Times
            </Typography>
          </Box>
          <Box sx={{ mt: 2, mb: 5 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              endIcon={<AddIcon />}
            >
              Add New
            </Button>
          </Box>
          <Grid container spacing={3}> {/* Consistent spacing */}
            {renderCards(mealTimes)}
          </Grid>
        </Box>

        <Box sx={{ mb: 4 }}> {/* Reduced bottom margin */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1, // Reduced bottom margin
            }}
          >
            <Typography variant="h5" fontWeight="bold" color="black">
              Meal Types
            </Typography>
          </Box>
          <Box sx={{ mt: 2, mb: 5 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              endIcon={<AddIcon />}
            >
              Add New
            </Button>
          </Box>
          <Grid container spacing={3}> {/* Consistent spacing */}
            {renderCards(mealTypes)}
          </Grid>
        </Box>
      </Box>
    </DashboardLayout>
  );
};
