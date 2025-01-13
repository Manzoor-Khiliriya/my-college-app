import { Box, Typography } from "@mui/material";
import HeaderTypography from "./HeaderTypography";

export default function AdmissionsIntro() {
  return (
    <Box mb={3}>
      <HeaderTypography>Admissions</HeaderTypography>
      <Typography
        variant="body1"
        align="center"
        color="textSecondary"
      >
        Explore our admissions process, fee structure, and everything you need
        to know to join our institution.
      </Typography>
    </Box>
  );
}
