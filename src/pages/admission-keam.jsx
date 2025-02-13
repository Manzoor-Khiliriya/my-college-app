import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CustomHeading from "../components/CustomHeading";
import ContactInfoCard from "../components/ContactInfoCard";
import Image from "next/image";

export default function AdmissionKEAM() {
  return (
    <Box>
      <CustomHeading>Admission (KEAM)</CustomHeading>
      <Grid container spacing={5} px={5} pt={5} pb={{ xs: 4, md: 15 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Grid container>
            <Grid  size={{xs: 12, md: 6}} sx={{ position: "relative", maxWidth: '400px' ,height: "200px" }}>
              <Image src="/images/college-code.jpeg" alt="Director" fill />
            </Grid>
            <Grid size={{xs: 12, md: 6}} sx={{ position: "relative" ,maxWidth: '320px',height: "200px" }}>
              <Image src="/images/nba.jpg" alt="Director" fill />
            </Grid>
          </Grid>

          <Typography variant="body1" align="justify" my={3}>
            In accordance with Chapter VIII of the Ordinance to establish APJ
            Abdul Kalam Technological University (KTU), Government of Kerala
            vide GO(Ms) No. 93/2015/HEdn dated 11.03.2015 have made affiliation
            of all institutions which imparts education in Engineering and
            Technology in the State of Kerala with KTU as mandatory from the
            academic year 2015-16 onward. In view of this B.Tech and M.Tech
            programmes offered by LBS College of Engineering, Kasragod are
            affiliated to APJ Abdul Kalam Technological University
            (http://ktu.edu.in/) from the Academic Year 2015-16 onwards.
          </Typography>
          <Typography variant="body1" fontWeight={600}>
            B.Tech Course
          </Typography>

          <Typography variant="body1" align="justify" mt={3}>
            LBS College of Engineering Kasaragod has five academic departments
            and they offer six full-time B.Tech Degree programmes under APJ
            Abdul Kalam Technological University, Kerala, with a total annual
            intake of around 500 students.
            <br />
            <br />
            Allotment to 95% seats of the annual intake is made by the
            Commissioner for Entrance Examination (CEE), Government of Kerala
            from the rank list of Kerala Engineering Entrance Examination
            (KEAM). Details of Kerala engineering entrance examination and
            allotment.
            <br />
            <br />
            5% seats are reserved for non-resident Indians (NRI). For NRI
            admission, separate applications are invited by the college and rank
            list is prepared on the basis of qualifying examination and students
            are admitted from this rank list.
            <br />
            <br />
            Dr. Abdul Rahman is a Ph.D. graduate in Computer Science & Engg,
            having PGDHRM and MBA degrees. He has authored and edited a few
            books published by reputed international publishers and published
            over 100 papers in academic journals and international and national
            proceedings.
            <br />
            <br />
          </Typography>
          <Typography variant="body1" fontWeight={600}>
            Academic Eligibility
          </Typography>

          <Typography variant="body1" align="justify" mt={3}>
            <strong>FIRST YEAR (KEAM):</strong> Candidates who have passed
            Higher Secondary Examination, Kerala, or Examinations recognized as
            equivalent thereto, with 50% marks in Mathematics separately and 50%
            marks in Mathematics, Physics and Chemistry / Bio-technology /
            Computer Science / Biology taken together are eligible for
            admission.
            <br />
            <br />
            <strong>SECOND YEAR (Lateral Entry):</strong> Candidates who have a
            diploma in Engineering awarded by the board of Technical
            Examinations or an Examination recognized equivalent thereto, by the
            state board of Technical Education after undergoing an institutional
            course of at least 3 years securing a minimum of 50% marks in the
            final diploma Examination are eligible for admission.
            <br />
            <br />
            The allotment of seats is done centrally by the LBS Centre for
            Science & Technology Thiruvananthapuram, Govt. of Kerala based on a
            rank list published after Lateral Entry Test-LET
            (https://lbscentre.kerala.gov.in/), according to the options
            registered online by the candidates.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ContactInfoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
