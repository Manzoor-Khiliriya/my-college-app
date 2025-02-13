import { Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CustomHeading from "../components/CustomHeading";
import ContactInfoCard from "../components/ContactInfoCard";

export default function CentralLibrary() {
  return (
    <Box>
      <CustomHeading>Central Library</CustomHeading>
      <Grid container spacing={5} px={5} pt={5} pb={{ xs: 4, md: 15 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h5" fontWeight={800} align="center" my={3}>
          Library & Information Centre (LIC)
          </Typography>
          <Typography variant="body1" align="justify" my={3}>
          The central library is operating in a spacious building having built up area of 15000 sq. Ft. And the circulation of documents is fully automated with barcode technology. A total of 25100 volumes of textbooks and reference with more than 8500 different titles are available along with online journal access through our Intranet Digital Library System. In addition to the above a very good collection of Audio visuals, CD-Roms, E books, Journals, Periodicals , seminar reports, Project report are also available to the user community. 
          </Typography>
          <Typography variant="body1">
            Email:
            <Link
              href="mailto:library@lbscek.ac.in"
              underline="none"
              color="grey"
              sx={{ "&:hover": { color: "#3db166" } }}
            >
             library@lbscek.ac.in
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
