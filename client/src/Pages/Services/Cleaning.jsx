import React from 'react';
import { Container, Grid, Box, Typography, Card, CardMedia,Button } from '@mui/material';

function Cleaning() {
  return (
    <Container maxWidth="lg" style={{ marginTop: '1%', marginBottom: '1%' }}>
      <Grid container spacing={3}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ width: '100%', height: '100%', borderRadius: '8px' }}>
            <CardMedia
              component="img"
              alt="Dentists"
              height="100%"
              image= "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va3xlbnwwfHwwfHx8MA%3D%3D"
            />
          </Card>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
  <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%" textAlign="center">
    <Typography variant="h4" style={{ fontWeight: 'bold' }}>Online Maid Service</Typography>
    <Typography variant="h6">Book a professional housekeeper for your daily chores</Typography>
    <Button
      variant="contained"
      sx={{ color: 'white', backgroundColor: 'black', width: '10rem', mt: '1rem' }}
    >
      Book Now
    </Button>
  </Box>
</Grid>

      </Grid>
    </Container>
  );
}

export default Cleaning;
