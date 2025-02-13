import { Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CustomHeading from "../components/CustomHeading";
import ContactInfoCard from "../components/ContactInfoCard";

export default function OnlineAnnualAdmission() {
 
  return (
    <Box>
      <CustomHeading>Online Annual / Admission</CustomHeading>
      <Grid container spacing={5} px={5} pt={5} pb={{ xs: 4, md: 15 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h5" fontWeight={800} align="center" my={3}>
            ANNUAL FEE / ADMISSION FEE
          </Typography>
          <Typography variant="body1" align="justify" my={3}>
          Online Payment can be done through Students Login : To Login{" "}
            <Link
              href={"https://lbscentre.kerala.gov.in/lbscek/studlogin/login"}
              underline="none"
              color="grey"
              fontWeight={700}
              sx={{ "&:hover": { color: "#3db166" } }}
            >
              Click Here
            </Link>
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ContactInfoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
