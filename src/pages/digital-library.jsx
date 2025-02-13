import { Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CustomHeading from "../components/CustomHeading";
import ContactInfoCard from "../components/ContactInfoCard";

export default function DigitalLibrary() {
    const libraryLinks = [
        {label: 'Knimbus ' , href: 'https://lbscek.knimbus.com/libraryStatus.html#/home'},
        {label: 'National Digital Library of India ' , href: 'https://ndl.iitkgp.ac.in/'},
        {label: 'Open Access Journals & articles' , href: 'https://doaj.org/'},
        {label: 'Lbscek Central Library ' , href: 'https://lbsceklibrary.weebly.com/'},

    ]
  return (
    <Box>
      <CustomHeading>Digital Library</CustomHeading>
      <Grid container spacing={5} px={5} pt={5} pb={{ xs: 4, md: 15 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h5" fontWeight={800} align="center" my={3}>
          Digital Library
          </Typography>
          <Typography variant="body1" align="justify" my={3}>
          The Digital Library facility can be used either from the Central Library / Central Computing Facility (CCF)
          </Typography>
          <Typography variant="h5" fontWeight={800} my={3}>
          Digital library links
          </Typography>
          {libraryLinks.map(({label, href}) => (
            <Typography variant="h6" fontWeight={800} my={3}>
           {label} {" "}
            <Link
              href={href}
              underline="none"
              color="grey"
              sx={{ "&:hover": { color: "#3db166" } }}
            >
             Click Here
            </Link>
          </Typography>
          ))}
          
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ContactInfoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
