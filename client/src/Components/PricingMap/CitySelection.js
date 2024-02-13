import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material'; // Import Link from react-router-dom
import DelhiIcon from './Images/Delhi.png';
import GurgaonIcon from './Images/Gurgaon.jpg';
import NoidaIcon from './Images/Noida.png';
import PuneIcon from './Images/Pune.jpg';
import { useNavigate } from 'react-router-dom'; 


const CitySelection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLocationClick = (screenName) => {
    // Route to ServiceSelection page with state data
    navigate('/ServiceSelection', { state: { location: screenName } });
  };

  return (
    <Box margin={2}>
      <Typography variant="h4" align="center" fontWeight="bold" margin={2}>
        Select Your City
      </Typography>
      <Typography variant="h5" align="center" margin={2}>
        I’m looking for a Helper in your city.
      </Typography>
      <Grid container spacing={2}>
        {[{ label: 'Delhi', icon: DelhiIcon, screenName: 'Delhi' },
          { label: 'Gurgaon', icon: GurgaonIcon, screenName: 'Gurgaon' },
          { label: 'Noida', icon: NoidaIcon, screenName: 'Noida' },
          { label: 'Pune', icon: PuneIcon, screenName: 'Pune' }].map((city, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => handleLocationClick(city.screenName)}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    src={city.icon}
                    alt={`${city.label} Icon`}
                    style={{ width: '100%', maxWidth: '20rem', height: 'auto', marginBottom: '10px', borderRadius: '2rem' }}
                  />
                  <Typography variant="h6">{city.label}</Typography>
                </Box>
              </Link>
            </Grid>
        ))}
      </Grid>
      <Typography variant="h5" align="center" margin={2}>
        Select the location where you’d like to book a HelperHub
      </Typography>
    </Box>
  );
};

export default CitySelection;
