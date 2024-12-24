import { Box, Typography } from '@mui/material';

export default function FeeStructure() {
  return (
    <Box mb={3}>
      <Typography variant="h5" component="h2" gutterBottom>
        Fee Structure
      </Typography>
      <Typography variant="body1" paragraph>
        Our fee structure is designed to be affordable and transparent. Here’s a summary:
      </Typography>
      <Typography variant="body2" paragraph>
        - **Tuition Fee**: $5,000 per year
      </Typography>
      <Typography variant="body2" paragraph>
        - **Lab and Library Fee**: $500 per year
      </Typography>
      <Typography variant="body2" paragraph>
        - **Extracurricular Activities Fee**: $300 per year
      </Typography>
      <Typography variant="body2" paragraph>
        - **One-time Admission Fee**: $1,000 (non-refundable)
      </Typography>
    </Box>
  );
}
