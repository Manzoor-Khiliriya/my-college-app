import { Box, Typography } from '@mui/material';

export default function ExtracurricularActivities() {
  const activities = [
    { title: 'Sports', description: 'Basketball, soccer, volleyball, and more' },
    { title: 'Arts and Culture', description: 'Painting, music, theater, and dance' },
    { title: 'Clubs', description: 'Coding club, robotics, debate, and environment club' },
    { title: 'Community Service', description: 'Volunteering opportunities to give back to society' },
  ];

  return (
    <Box mb={3}>
      <Typography variant="h5" component="h2" gutterBottom>
        Extracurricular Activities
      </Typography>
      <Typography variant="body1" paragraph>
        We believe in the holistic development of our students. Our extracurricular programs include:
      </Typography>
      {activities.map((activity, index) => (
        <Typography key={index} variant="body2" paragraph>
          - {activity.title}: {activity.description}
        </Typography>
      ))}
    </Box>
  );
}
