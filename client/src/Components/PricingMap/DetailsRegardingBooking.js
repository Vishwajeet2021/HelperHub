import React from 'react';
import { Typography, Divider, Button, Box } from '@mui/material';

const BookingDetails = () => {
  // Data for dynamic sections
  const sections = [
    {
      heading: 'Select House Size',
      subHeading: 'Select 1 out of 4 options',
      data: [
        { label: '1 bhk', onClick: () => alert('Button 1 clicked') },
        { label: '2 bhk', onClick: () => alert('Button 2 clicked') },
        { label: '3 bhk(less than 2000sqft)', onClick: () => alert('Button 3 clicked') },
        { label: '4 bhk(less than 4000sqft)', onClick: () => alert('Button 3 clicked') },
      ],
    },
    {
      heading: 'How many such Floors?',
      subHeading: 'Select 1 out of 4 options',
      data: [
        { label: '1 floor Only', onClick: () => alert('Button 1 clicked') },
        { label: '2 floor', onClick: () => alert('Button 2 clicked') },
        { label: '3 floor', onClick: () => alert('Button 3 clicked') },
        { label: '4 floor', onClick: () => alert('Button 3 clicked') },
      ],
    },
    {
      heading: 'Do you have Dogs?',
      subHeading: 'Select 1 out of 2 options',
      data: [
        { label: 'Yes', onClick: () => alert('Button 1 clicked') },
        { label: 'No', onClick: () => alert('Button 2 clicked') },
      ],
    },
    {
      headingBox: 'Inclusions',
      inBox: true, // Indicates whether the section should be in a box
      dataBox: [
        {
          subHeading: 'Breads',
          description: 'Roti, Poori, Plain Paratha, Aloo Paratha, Gobhi Paratha, Pyaaz Paratha, Paneer Paratha, Mixed veg Paratha',
        },
        {
          subHeading: 'Sabzi (Dry)',
          description: 'Lauki ki sabzi, Tindey ki sabzi, Kaddu ki sabzi, Bhindi ki sabzi, Aloo methi, Aloo palak, Aloo jeera, Aloo gobhi, Aloo matar, Mixed veg',
        },
      ],
    },
    // Add more sections as needed
  ];

  return (
    <div style={{ padding: '20px' }}>
      {sections.map((section, index) => (
        <div key={index}>
          <Typography variant="h6" gutterBottom fontWeight={'bold'}>
            {section.heading}
          </Typography>
          {section.subHeading && (
            <Typography variant="body2" color="textSecondary">
              {section.subHeading}
            </Typography>
          )}
          {section.data && (
            <div style={{ display: 'flex', marginTop: '20px' }}>
              {section.data.map((button, buttonIndex) => (
                <Button
                  key={buttonIndex}
                  variant="text"
                  color="primary"
                  onClick={button.onClick}
                  style={{ border: '2px solid black', borderColor: '#e7e7e7', marginBottom: '1rem' }}
                  sx={{
                    marginRight: '10px',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      borderColor: '#454545',
                      color: '#454545',
                    },
                    borderColor: '#454545',
                    color: '#454545',
                  }}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          )}
          {section.data && index < sections.length - 1 && (
            <Divider sx={{ width: '100%', marginLeft: '0', marginBottom: '1', marginTop: '1' }} />
          )}
          {section.data && index === sections.length - 1 && (
            <Divider sx={{ width: '100%', marginLeft: '0', marginTop: '1' }} />
          )}
          {section.data && section.subHeading && (
            <Divider sx={{ width: '100%', marginLeft: '0', marginBottom: '1', marginTop: '1' }} />
          )}
          {section.data && !section.subHeading && (
            <Divider sx={{ width: '100%', marginLeft: '0', marginBottom: '2' }} />
          )}

          {section.inBox && (
            <Box
              sx={{
                border: '2px solid black',
                borderRadius: '8px',
                padding: '20px',
                marginTop: '20px',
                borderColor: '#e7e7e7',
              }}
            >
              <Typography variant="h6" gutterBottom fontWeight={'bold'}>
                {section.headingBox}
              </Typography>
              {section.dataBox.map((content, contentIndex) => (
                <div key={contentIndex}>
                  {content.subHeading && (
                    <Typography variant="subtitle1" gutterBottom>
                      {content.subHeading}
                    </Typography>
                  )}
                  {content.description && (
                    <Typography variant="body2" color="textSecondary">
                      {content.description}
                    </Typography>
                  )}
                </div>
              ))}
            </Box>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookingDetails;
