import { Box, Typography, Paper } from '@mui/material';

function Section({ title, children, titleAlign = 'center', contentAlign = 'justify' }) {
  return (
    <Paper
      sx={{
        padding: 8,
        boxShadow: 3,
        borderRadius: 12,
        bgcolor:'#3db166'
      }}
    >
      <Box
        sx={{
          paddingBottom: 1,
        }}
      >
        <Typography 
          variant="h4" 
          align={titleAlign} 
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          {title}
        </Typography>
      </Box>
      <Typography 
        variant="body1" 
        align={contentAlign} 
        sx={{ lineHeight: 1.7, color: 'white' }}
      >
        {children}
      </Typography>
    </Paper>
  );
}

export default Section;
