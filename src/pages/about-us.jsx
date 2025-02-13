import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CustomHeading from "../components/CustomHeading";
import AboutCollege from "../components/AboutCollege";
import ContactInfoCard from "../components/ContactInfoCard";

export default function About() {
  return (
    <Box>
      <CustomHeading>About Us</CustomHeading>
      <Grid container spacing={5} px={5} pt={5} pb={{ xs: 4, md: 15 }}>
        <Grid size={{xs : 12, md: 8}}>
          <AboutCollege />
        </Grid>

        <Grid size={{xs : 12, md: 4}}>
          <ContactInfoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
