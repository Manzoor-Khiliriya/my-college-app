import { Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CustomHeading from "../components/CustomHeading";
import ContactInfoCard from "../components/ContactInfoCard";

export default function AlumniAssociation() {
  return (
    <Box>
      <CustomHeading>Alumni Association</CustomHeading>
      <Grid container spacing={5} px={5} pt={5} pb={{ xs: 4, md: 15 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h4" fontWeight={800} align="center" my={3}>
            Alumni Association
          </Typography>
          <Typography variant="h5" fontWeight={700} my={3}>
            About LBSCEKA
          </Typography>
          <Typography variant="body1" align="justify" my={3}>
            The LBS College of Engineering Kasaragod Alumni Association
            (LBSCEKA) was launched in 1997. The major objective of LBSCEKA is to
            foster, prompt and develop fraternity and unity among all teaching
            staff, staff, retired/former teachers and former students of LBSCE
            Kasaragod and to work together for the betterment of LBSCEK. The
            association aims to establish good rapport with former students of
            LBSCE and organize various programmes which will be mutually
            beneficial. It provides a forum for the alumini of the College to
            meet and discuss the matters of common interest and promote goodwill
            and mutual co-operation among the members.
            <br />
            <br />
            LBSCEKA is a platform for products of LBSCEK to come together.
            Anybody who has completed his/her Graduation/Post Graduation from
            LBSCEK is naturally a member of this association. At present, the
            Association has more than 3000 former students as members. The
            office of LBSCEKA is located at LBSCEK campus.
          </Typography>
          <Typography variant="body1">
            Email:
            <Link
              href="mailto:alumni@lbscek.ac.in"
              underline="none"
              color="grey"
              sx={{ "&:hover": { color: "#3db166" } }}
            >
              alumni@lbscek.ac.in
            </Link>
          </Typography>
          <Typography variant="h5" fontWeight={700} my={3}>
            Activities
          </Typography>

          <Typography variant="body1" align="justify" mt={3}>
            Since its inception, LBSCEKA has been contributing immensely towards
            the overall development of the college. Every year, the University
            Rank holders are felicitated with cash awards. The association
            extends support and financial aid to placement activities and
            personality development programmes for students. Through its ‘Back
            to Campus’ programme, the association provides the alumni members
            the opportunity to visit the college and interact with the staff and
            students. In addition, LBSCEKA has plans to set up a fund for the
            infrastructure development and other activities at the College and
            funds for helping economically weak but meritorious students in
            their studies.
          </Typography>
          <Typography variant="h5" fontWeight={700} my={3}>
            Chapters
          </Typography>

          <Typography variant="body1" align="justify" mt={3}>
            Several chapters of LBSCEKA are active in various metros of India
            and abroad and they share the latest technical know-how with those
            in the campus. The major chapters are functioning in UAE, Qatar and
            Bangalore. The U.A.E Chapter (CEKA UAE) was started with twenty five
            members, and now have a count of 350 plus members in UAE. To keep up
            the tempo and spirit of the alumni chapter and to grow it further,
            CEKA UAE organises several programmes like outdoor games, family
            get-together and alumni meet every year. The official CEKA UAE
            website is www.cekauae.com The Qatar Chapter has more than 100
            alumni as its members. CEKA Qatar is also very active and constantly
            organises so many programmes for the alumni and their family. CEKA
            Qatar is a registered alumni organisation with Engineers Forum,
            Qatar.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ContactInfoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
