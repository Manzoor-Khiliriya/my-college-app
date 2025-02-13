import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function FooterLinksSection() {
  const sections = [
    {
      title: "Institution",
      links: [
        { link: "College", href: "/about-us" },
        { link: "College Map", href: "/college-map" },
        { link: "AICTE Orders", href: "/aicte-orders" },
        { link: "Student Verification", href: "/login" },
        { link: "Mandatory Disclosure", href: "https://lbscek.ac.in/wp-content/uploads/2024/12/mandatory_disclosure2425.pdf" },
      ],
    },
    {
      title: "Administration",
      links: [
        { link: "Board of Governance", href: "/board-of-governance" },
        { link: "Director", href: "/director" },
        { link: "Principal", href: "/" },
        { link: "Deans (PG & UG)", href: "/" },
        { link: "Administrative Wing", href: "/" },
        { link: "Right to Information", href: "/" },
      ],
    },
    {
      title: "Admission",
      links: [
        { link: "Admission Procedure", href: "/admission-procedure" },
        { link: "NRI Scheme", href: "/" },
        { link: "Lateral Entry Scheme", href: "/" },
        { link: "Fee Waiver Scheme", href: "/" },
        { link: "NRI Fee Structure", href: "https://lbscek.ac.in/wp-content/uploads/2024/07/nri-fee2024.pdf" },
      ],
    }
  ];
  
    

  return (
    <>
      {sections.map((section, index) => (
          <Grid key={index} size={{ xs: 12, md: 3 }}>
            <Typography variant="body1" fontWeight="bold" mb={2}>
              {section.title}
            </Typography>
            <Divider
              sx={{ width: "100%", bgcolor: "#3db166", height: 2, mb: 3 }}
            />
           {section.links.map((item, idx) => (
            <Box key={idx} mb={1}>
              <Link
                href={item.href} 
                color="inherit"
                underline="none"
                aria-label={`Navigate to ${item.link}`} 
                sx={{
                  color: "#838383",
                  transition: "color 0.3s ease-in-out",
                  "&:hover": { color: "white" },
                }}
              >
                {item.link} 
              </Link>
            </Box>
          ))}
          </Grid>
        ))}
    </>
  );
}
