import { Box, Typography } from '@mui/material';

export default function ExtracurricularActivities() {
  return (
    <Box mb={3}>
      <Typography variant="h5" component="h2" gutterBottom>
        Extracurricular Activities
      </Typography>
      <Typography variant="body1" paragraph>
        We believe in the holistic development of our students. Our extracurricular programs include:
      </Typography>
      <Typography variant="body2" paragraph>
        - Sports: Basketball, soccer, volleyball, and more
      </Typography>
      <Typography variant="body2" paragraph>
        - Arts and Culture: Painting, music, theater, and dance
      </Typography>
      <Typography variant="body2" paragraph>
        - Clubs: Coding club, robotics, debate, and environment club
      </Typography>
      <Typography variant="body2" paragraph>
        - Community Service: Volunteering opportunities to give back to society
      </Typography>
    </Box>
  );
}
