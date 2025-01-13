import { Box, Button, Typography } from "@mui/material";

export default function AdmissionProcess() {
  const steps = [
    "Fill out the online application form available on our website.",
    "Submit the required documents, including academic records, ID proof, and recommendation letters.",
    "Schedule an interview or entrance test (if applicable).",
    "Await the admission decision and confirm your enrollment by paying the initial deposit.",
  ];

  return (
    <Box mb={3}>
      <Typography variant="h5" component="h2" gutterBottom>
        Admission Process
      </Typography>
      <Typography variant="body1" paragraph>
        Joining us is easy! Follow these steps:
      </Typography>
      {steps.map((step, index) => (
        <Typography key={index} variant="body2" paragraph>
          {index + 1}. {step}
        </Typography>
      ))}
      <Button variant="contained" sx={{ mt: 2 }}>
        Continue with Admission Process
      </Button>
    </Box>
  );
}
