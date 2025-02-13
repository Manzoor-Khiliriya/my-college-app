import { Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CustomHeading from "../components/CustomHeading";
import ContactInfoCard from "../components/ContactInfoCard";

export default function Login() {
  return (
    <Box>
      <CustomHeading>Portal Login</CustomHeading>
      <Grid container spacing={5} px={5} pt={5} pb={{ xs: 4, md: 15 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h5" fontWeight={800} align="center" mb={3}>
            STAFF LOGIN
          </Typography>
          <Typography variant="body1" align="justify" my={3}>
            Staff Login{" "}
            <Link
              href="https://lbscentre.kerala.gov.in/lbscek/users/login"
              underline="none"
              color="grey"
              fontWeight={700}
              sx={{ "&:hover": { color: "#3db166" } }}
            >
              Click here
            </Link>
          </Typography>
          <Typography variant="body1" mt={7}>
            If you need help or you have any other question, feel free to email{" "}
            <Link
              href="mailto:support.lbs@kerala.gov.in"
              underline="none"
              color="grey"
              sx={{ "&:hover": { color: "#3db166" } }}
            >
              support.lbs@kerala.gov.in
            </Link>{" "}
            or call our IT Team 0471-2560327 Email:
          </Typography>

          <Typography variant="h5" fontWeight={800} align="center" mb={3}>
            STUDENTS / PARENTS LOGIN
          </Typography>
          <Typography variant="body1" align="justify" my={3}>
            Students/ Parents Login{" "}
            <Link
              href="https://lbscentre.kerala.gov.in/lbscek/studlogin/login"
              underline="none"
              color="grey"
              fontWeight={700}
              sx={{ "&:hover": { color: "#3db166" } }}
            >
              Click here
            </Link>
          </Typography>

          <Typography variant="body1" align="justify" my={3}>
            Students/ Parents Login{" "}
            <Link
              href="https://lbscentre.kerala.gov.in/lbscek/studlogin/forgot_password"
              underline="none"
              color="grey"
              fontWeight={700}
              sx={{ "&:hover": { color: "#3db166" } }}
            >
              Forgot Password
            </Link>
          </Typography>
          <Typography variant="body1">
            Students are requested to create the students login before Semester
            registration
            <br />
            <br />
            For online Semester Registration if you need help or you have any
            other question, feel free to email{" "}
            <Link
              href="mailto:support.lbs@kerala.gov.in"
              underline="none"
              color="grey"
              sx={{ "&:hover": { color: "#3db166" } }}
            >
              support.lbs@kerala.gov.in
            </Link>{" "}
            or call our IT Team 0471-2560327
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ContactInfoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
