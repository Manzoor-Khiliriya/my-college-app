import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function AboutCollege() {
  return (
    <Grid
      container
      spacing={5}
      sx={{ bgcolor: "#192f59", py: 10, pl: 7, pr: 10 }}
    >
      <Grid size={{ xs: 12, md: 3 }}>
        <Box sx={{ position: "relative", height: 50 }}>
          <Image
            src="/images/my-logo-white.png"
            alt="College Logo"
            fill
            style={{ maxWidth: 500 }}
          />
        </Box>
        <Typography variant="h4" color="#3db166" fontWeight={700} my={2}>
          About Our College
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 9 }}>
        <Typography variant="h6" color="white" align="justify">
          The LBS College of Engineering was started in the year 1993, under the
          auspices of L B S Centre for Science and Technology
          Thiruvananthapuram, an autonomous body owned by the Government of
          Kerala. The college offered B. Tech programmes in 4 branches; ME, EEE,
          CSE and ECE, with 240 seats, in a temporary building in 1995. The
          current campus was constructed at 52 acres of land given by the
          plantation corporation Kerala at Povval. B Tech in Information
          Technology with intake 60 and MCA with intake of 35 were started in
          2000. B Tech in Civil Engineering was added to the existing programme
          during 2008. As part of expansion, additional 60 seats were added for
          Mechanical, Computer Science and Electronics and Communication
          Engineering programmes. During 2013-15, four post graduate programmes
          were added and Mechanical Engineering and Computer Science &
          Engineering was recognized as a research centre. The college is
          located in Muliyar Panchayath of Kasaragod district, the northern most
          district of the state. The Campus spreads over an area of 52 acres and
          is 12 Kms away from Kasaragod town. The nearest airport is Mangaluru
          Airport and the nearest railway station is Kasaragod railway station.
          The Bekal Fort, Madhur temple and Ananthapuri temple are the prime
          tourist attractions of Kasaragod district. As of now, the college
          offers UG programmes (B. Tech.) in six branches viz. ECE, CSE, ME,
          EEE, IT and CE and one PG program in CSE. The annual intake for UG
          programme is 480 and for PG Programme is 18. The college was under
          Calicut university initially and later in 1996 under Kannur
          university. From 2015, the college is affiliated to APJ Abdul Kalam
          Technological University. The Institution started its journey
          commencing with an infrastructural area of 20,000 square feet. Within
          a period of two and a half decades, the institution was expanded to
          2.5 lakh square feet. All departments have separate buildings. Apart
          from this there are two academic blocks with 50 class rooms, seminar
          halls, staff rooms and laboratories. The college also has its own
          hostels, an administrative block, a college main stadium, multi-sports
          play space and an open-air auditorium. The college also boasts of a
          main auditorium with a seating capacity of 1500. Adequate
          infrastructure and laboratory facilities have been created over the
          years in various departments to meet the requirements of different
          courses as per the existing curriculum, along with a pool of
          experienced faculty and staff to handle these courses.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#3db166",
            borderRadius: 8,
            px: 4,
            py: 2,
            fontWeight: '600',
            textTransform: 'none',
            display: "flex",
            justifySelf: "end",
          }}
        >
          Read More
        </Button>
      </Grid>
    </Grid>
  );
}
