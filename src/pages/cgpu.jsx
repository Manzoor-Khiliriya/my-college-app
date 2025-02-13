import { Box, Link, Typography } from "@mui/material";
import React from "react";
import CustomHeading from "../components/CustomHeading";
import { Height } from "@mui/icons-material";
import Image from "next/image";

export default function CGPU() {
  return (
    <Box>
      <CustomHeading sx={{ height: { xs: 250, md: 280 } }}>
        Career guidance & Placement Unit (CGPU)
      </CustomHeading>
      <Box px={{ xs: 5, md: 10, lg: 15 }} py={5}>
        <Typography variant="h4" fontWeight={700} mb={3}>
          Career Guidance & Placement Unit (CGPU)
        </Typography>
        <Typography variant="body1" align="justify" mb={3}>
          The institute’s Career Guidance & Placement Unit plays a pivotal role
          in fostering the holistic development and successful placement of
          students. Equipped with comprehensive infrastructure, the cell
          orchestrates year-round training activities to prepare students for
          campus selection programs and collaborates with diverse industries for
          recruitment opportunities. It focuses on molding engineering graduates
          into adept professionals, offering services such as campus interviews,
          job placements, and training programs to develop crucial skills for
          the competitive job market. The cell also organizes workshops and
          seminars on personality development, interpersonal relationships,
          communication, interview, and presentation skills to facilitate
          all-round individual development. Orientation programs for freshers
          and engagement with alumni further enrich the student experience,
          while the continuous feedback mechanism ensures the ongoing
          enhancement of placement and training initiatives
        </Typography>
        <Typography variant="body1">

        Email: <Link href="mailto:cgpu@bscek.ac.in" underline="none" color="grey" sx={{'&:hover' : {color: '#3db166'}}}>cgpu@bscek.ac.in</Link>
        </Typography>
        <Box sx={{position: 'relative', width: '100%', height: {xs: 170, md:220, lg: 280}}}>
            <Image src={'/images/placement-graph-1.jpg'} fill />
        </Box>
      </Box>
    </Box>
  );
}
