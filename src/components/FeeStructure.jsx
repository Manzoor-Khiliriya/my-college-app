import { Box, Typography } from "@mui/material";

export default function FeeStructure() {
  const feeDetails = [
    { label: "Tuition Fee", amount: "$5,000 per year" },
    { label: "Lab and Library Fee", amount: "$500 per year" },
    { label: "Extracurricular Activities Fee", amount: "$300 per year" },
    { label: "One-time Admission Fee", amount: "$1,000 (non-refundable)" },
  ];

  return (
    <Box mb={3}>
      <Typography variant="h5" component="h2" gutterBottom>
        Fee Structure
      </Typography>
      <Typography variant="body1" paragraph>
        Our fee structure is designed to be affordable and transparent. Here’s a
        summary:
      </Typography>
      <ul style={{ listStyleType: "square" }}>
        {feeDetails.map((fee, index) => (
          <li key={index}>
            <Typography key={index} variant="body2" paragraph>
              <strong>{fee.label}</strong>: {fee.amount}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}
