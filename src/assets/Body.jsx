import React from 'react';
import { Box, Typography } from '@mui/material';

const Body = () => {
  return (
    <Box sx={{ marginLeft: '750px', marginTop: '-190px' }}>
      <Typography variant="h5" gutterBottom sx={{ marginBottom: '250px' }} >
        Welcome to the QKD Messaging Simulator!
      </Typography>
      <Box
        component="img"
        sx={{
          width: '100%',
          maxWidth: '600px',
          display: 'block',
          margin: '20px auto'
        }}
        alt="QKD Messaging Simulator Diagram"
        src="your-image-path.png"  // Replace this with your actual image path
      />
    </Box>
  );
};

export default Body;