import { Box, Container, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: 'grey.100',
        py: { xs: 10, sm: 15 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          Unlock Your Potential
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Discover a world of opportunities where learning meets innovation.
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Join us on a journey to academic excellence, personal growth, and a brighter future.
        </Typography>
      </Container>
    </Box>
  );
}
