import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React from "react";

export default function MoreAbout() {
  const sections = [
    {
      image: "/images/more-about-1.png",
      title: "C G P U",
      description:
        "The institute’s Career Guidance & Placement Unit plays a pivotal role in fostering the holistic development and successful placement of students. Equipped with comprehensive infrastructure, the cell orchestrates year-round training activities to prepare students for campus selection programs and collaborates with diverse industries for recruitment opportunities.",
    },
    {
      image: "/images/more-about-2.png",
      title: "Alumni Association",
      description:
        "The LBS College of Engineering Kasaragod Alumni Association (LBSCEKA) was launched in 1997. The major objective of LBSCEKA is to foster, prompt, and develop fraternity and unity among all teaching staff, staff, retired/former teachers, and former students of LBSCE Kasaragod, and to work together for the betterment of LBSCEK.",
    },
    {
      image: "/images/more-about-3.png",
      title: "National Service Scheme",
      description:
        "National Service Scheme (NSS) aims at arousing social consciousness of the youth with an overall objective of personality development of the students through community service. LBSCEK has two vibrant NSS units 179 and 683 working under APJ Abdul Kalam Technological University NSS cell.",
    },
    {
      image: "/images/more-about-4.png",
      title: "I E D C",
      description:
        "The Innovation and Entrepreneurship Development Centre (IEDC) is being promoted in educational institutions to develop an institutional mechanism to create an entrepreneurial culture in S&T academic institutions and to foster techno-entrepreneurship for the generation of wealth and employment by S&T persons.",
    },
  ];

  return (
    <Grid
      container
      spacing={5}
      sx={{ bgcolor: "#192f59", p: 5, mt: 3 }}
      height={"100%"}
    >
      {sections.map((section, index) => (
        <Grid
          size={{xs:12, md: 3}}
          key={index}
          sx={{ color: "white", display: "flex", flexDirection: "column" }}
        >
          <Box
            sx={{
              display: 'block',
              mx:'auto',
              mb: 3,
            }}
          >
            <Image
              src={section.image}
              height={50}
              width={100}
              alt={section.title}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography variant="h6" textAlign="center" fontWeight={700} mb={2} height={{xs:40, md: 50, lg: 40}}>
            {section.title}
          </Typography>
          <Typography
            variant="body2"
            textAlign="justify"
            fontWeight={600}
            lineHeight={1.7}
            color={"#d4e1fa"}
            mb={3}
            sx={{ flexGrow: 1 }}
          >
            {section.description}
          </Typography>
          <Button
            sx={{
              color: "#3db166",
              textTransform: "none",
              fontWeight: "600",
              display: "block",
              mx: "auto",
              "&:hover": { color: "white" },
            }}
          >
            Learn More
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
