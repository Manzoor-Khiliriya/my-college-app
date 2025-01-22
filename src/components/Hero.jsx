import { Box, Container, Typography } from '@mui/material';
import HeaderTypography from './HeaderTypography';

const heroStyles = {
  container: {
    backgroundColor: 'grey.100',
    py: 10,
    textAlign: 'center',
  },
  typography: {
    gutterBottom: true,
    color: 'textSecondary',
  },
};

export default function Hero() {
  return (
    <Box sx={heroStyles.container}>
      <Container maxWidth="md" sx={{ padding: { xs: 2, sm: 3 } }}>
        <HeaderTypography>
          Unlock Your Potential
        </HeaderTypography>
        <Typography variant="h5" sx={heroStyles.typography}>
          Discover a world of opportunities where learning meets innovation.
        </Typography>
        <Typography variant="h6" sx={heroStyles.typography}>
          Join us on a journey to academic excellence, personal growth, and a brighter future.
        </Typography>
      </Container>
    </Box>
  );
}
