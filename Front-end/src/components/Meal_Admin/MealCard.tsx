import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface MealCardProps {
  item: {
    id: number;
    title: string;
    image: string;
  };
  onEditClick: (item: { id: number; title: string; image: string }) => void;
  onDeleteClick: (item: { id: number; title: string; image: string }) => void;
}

export const MealCard: React.FC<MealCardProps> = ({ item, onEditClick, onDeleteClick }) => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3, width: 232, height: 252 }}>
      <CardMedia component="img" height="140" image={item.image} alt={item.title} />
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
            whiteSpace: 'nowrap',
          }}
        >
          {item.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', gap: 0.5, paddingBottom: 2 }}>
        <Button
          variant="outlined"
          startIcon={<EditOutlinedIcon />}
          color="primary"
          onClick={() => onEditClick(item)}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteOutlineOutlinedIcon />}
          color="error"
          onClick={() => onDeleteClick(item)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
