import { Box, Typography } from '@mui/material';

export default function FAQs() {
  return (
    <Box>
      <Typography variant="h5" component="h2" gutterBottom>
        Frequently Asked Questions (FAQs)
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Q: Is financial aid available?</strong>
        <br />
        A: Yes, we offer scholarships and financial aid for eligible students.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Q: Are there any entrance exams?</strong>
        <br />
        A: Entrance exams are required for some programs. Please check the specific program details.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Q: What is the application deadline?</strong>
        <br />
        A: Applications are accepted year-round, but we recommend applying early to secure your spot.
      </Typography>
    </Box>
  );
}
