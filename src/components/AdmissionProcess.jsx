import { Box, Button, Typography } from "@mui/material";

export default function AdmissionProcess() {
  return (
    <Box mb={3}>
      <Typography variant="h5" component="h2" gutterBottom>
        Admission Process
      </Typography>
      <Typography variant="body1">
        Joining us is easy! Follow these steps:
      </Typography>
      <Typography variant="body2">
        1. Fill out the online application form available on our website.
      </Typography>
      <Typography variant="body2">
        2. Submit the required documents, including academic records, ID proof,
        and recommendation letters.
      </Typography>
      <Typography variant="body2">
        3. Schedule an interview or entrance test (if applicable).
      </Typography>
      <Typography variant="body2">
        4. Await the admission decision and confirm your enrollment by paying
        the initial deposit.
      </Typography>
      <Button variant="contained" sx={{ mt: 2 }}>
        Continue with Addmission Process
      </Button>
    </Box>
  );
}
