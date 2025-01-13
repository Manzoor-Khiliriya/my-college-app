import { Box, Typography, Paper } from '@mui/material';

function Section({ title, children, titleAlign = 'left', contentAlign = 'justify' }) {
  return (
    <Paper
      sx={{
        padding: 4,
        marginBottom: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'background.paper',
      }}
    >
      <Box
        sx={{
          marginBottom: 2,
          paddingBottom: 1,
        }}
      >
        <Typography 
          variant="h5" 
          component="h2" 
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
        sx={{ lineHeight: 1.7, color: 'text.secondary' }}
      >
        {children}
      </Typography>
    </Paper>
  );
}

export default Section;
