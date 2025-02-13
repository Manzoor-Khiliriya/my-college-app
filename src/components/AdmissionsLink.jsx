import { Box, Typography, Button, Link } from '@mui/material';
import React from 'react';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const admissionLinks = [
  { label: 'NRI Admission 2024-’25' },
  { label: 'NRI Admission 2024-’25 Prospectus' },
  { label: 'NRI Scheme Fee Structure' },
  { label: 'Lateral Entry Fee Structure' },
  { label: '2024-24 Admission Fee Structure' },
];



export default function AdmissionsLink() {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      bgcolor="#192f59"
      p={{ xs: 5, md: '91px' }} 
    >
      <Typography 
        variant="h5" 
        fontWeight={800} 
        color="white" 
        mb={3} 
      >
        Admission 2024
      </Typography>

      {admissionLinks.map((link, index) => (
        <Link 
          key={index}
          href={'/login'} 
          sx={{
            color: "white",
            textDecoration: 'none',
            fontWeight: 600,
            marginBottom: 2,
            pl: 8,
            display: 'flex',
            alignItems: {xs: 'start', md: 'center'}
          }}
        >
          <PanoramaFishEyeIcon sx={{ width: 9, marginRight: 2 }} />
          {link.label}
        </Link>
      ))}

      <Button 
        variant="contained" 
        sx={{
          width: 250, 
          mt: 5, 
          bgcolor: '#3db166', 
          fontWeight: 600, 
          p: 2,
          '&:hover': {
            bgcolor: 'black',
          }
        }}
      >
        NRI Admission 2024-25
      </Button>
    </Box>
  );
}
