import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer" 
      sx={{
        backgroundColor: 'grey.900',
        color: 'white',
        py: 2,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2">
          &copy; 2024 GUPS Bekal. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
