import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function AdmissionProcess() {
  const steps = [
    "Fill out the online application form available on our website.",
    "Submit the required documents, including academic records, ID proof, and recommendation letters.",
    "Schedule an interview or entrance test (if applicable).",
    "Await the admission decision and confirm your enrollment by paying the initial deposit.",
  ];

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/students-registration");
  };

  return (
    <Box mb={3}>
      <Typography variant="h5" component="h2" gutterBottom>
        Admission Process
      </Typography>
      <Typography variant="body1" paragraph>
        Joining us is easy! Follow these steps:
      </Typography>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>
            <Typography key={index} variant="body2" paragraph>
               {step}
            </Typography>
          </li>
        ))}
      </ol>

      <Button variant="contained" onClick={handleNavigation} sx={{ mt: 2 }}>
        Continue with Admission Process
      </Button>
    </Box>
  );
}
