import { Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CustomHeading from "../components/CustomHeading";
import ContactInfoCard from "../components/ContactInfoCard";
import Image from "next/image";

export default function Director() {
  return (
    <Box>
      <CustomHeading>Director</CustomHeading>
      <Grid container spacing={5} px={5} pt={5} pb={{ xs: 4, md: 15 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ position: "relative", width: "180px", height: "250px" }}>
              <Image src="/images/director.png" alt="Director" fill />
            </Box>
            <Link
              color="#5e5e5e"
              underline="none"
              mt={3}
              sx={{ cursor: "pointer", ":hover": { color: "#3db166" } }}
            >
              Prof. (Dr.) M. Abdul Rahiman
            </Link>
            <Typography variant="body1">Phone : 0471 – 2324396</Typography>
            <Typography variant="body1">
              E-mail:{" "}
              <Link
                color="#5e5e5e"
                underline="none"
                sx={{ cursor: "pointer", ":hover": { color: "#3db166" } }}
              >
                director.lbs@kerala.gov.in
              </Link>
            </Typography>
          </Box>
            <Typography variant="body1" fontWeight={600}>Profile</Typography>
            
          <Typography variant="body1" align="justify" mt={3}>

            Dr. M Abdul Rahiman, an eminent academician and an able
            administrator, is the Director of LBS Centre for Science &
            Technology. Dr. Rahman was the First Batch student of LBS College of
            Engg and later worked as a faculty there. He served as the first
            Pro-Vice-Chancellor of APJ Abdul Kalam Technological University
            (KTU), Kerala. He was the Managing Director of Kerala State Centre
            for Advanced Printing and Training (C-APT).
            <br />
            <br />
            He is also the former Director, All India Council for Technical
            Education (AICTE), the apex body of technical education under the
            Ministry of Human Resource Development, Government of India which
            regulates Engineering, Management, Architecture, Hotel Management,
            Pharmacy institutions of the country. Dr. Rahman also served as
            Director, VHSE, Govt. of Kerala.
            <br />
            <br />
            Having joined in University as the founder PVC, he has been at the
            forefront of bringing in some radical changes in the Academics,
            Examination, and Administration of the KTU. He brought transparency
            and accountability in its administration through the implantation of
            e-Governance in the University. The Online system at KTU was
            developed under his leadership. He is also instrumental in bringing
            out many positive changes in the AICTE through e-Governance during
            his tenure as its Director. He also associated with the
            implementation of Prime Minister’s Scholarship Scheme for the State
            of Jammu & Kashmir with the aim to encourage the youth of J&K to
            pursue higher studies throughout the country. Dr. Rahman also
            contributed to implementing the National Vocational Education
            Qualification framework which would help in promoting skill-based
            competency.
            <br />
            <br />
            Dr. Abdul Rahman is a Ph.D. graduate in Computer Science & Engg,
            having PGDHRM and MBA degrees. He has authored and edited a few
            books published by reputed international publishers and published
            over 100 papers in academic journals and international and national
            proceedings.
            <br />
            <br />
            <Link
              href="https://www.lbscentre.kerala.gov.in"
              target="_blank"
              color="#5e5e5e"
              underline="none"
              sx={{ cursor: "pointer", ":hover": { color: "#3db166" } }}
            >
              www.lbscentre.kerala.gov.in
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
