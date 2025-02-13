import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React from "react";
import ContactInfoCard from "../components/ContactInfoCard";
import CustomHeading from "../components/CustomHeading";

export default function CollegeMap() {
  return (
    <Box>
      <CustomHeading>
        College Map
      </CustomHeading>
      
      <Grid container spacing={5} px={5} >
        <Grid size={{xs : 12, md: 8}} pt={5}>
          <Box sx={{ position: "relative", width: "100%", height: 600 }}>
            <Image src="/images/college-map.png" alt="College Map" fill />
          </Box>
        </Grid>

        <Grid size={{xs : 12, md: 4}} py={4}>
          <ContactInfoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
