import { Box, Divider, Typography, Link } from "@mui/material";
import React from "react";
import { Link as LinkIcon } from "@mui/icons-material";

const quickLinks = [
  { label: "Online Fee Payment" },
  { label: "Career Guidance & Placement Unit (CGPU)" },
  { label: "Students' Grievance Redressal Committee (SGRC)" },
  { label: "Departments" },
  { label: "Syllabus" },
  { label: "Quotations and Tenders" },
  { label: "Contact Us" }
];

export default function QuickLinks() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="#192f59"
      pl={{ xs: 5, md: 10 }}
      pt={10}
      pr={{ xs: 5, sm: 3 }}
      pb={{ xs: 5, md: 0 }}
      mx={{ xs: 0, sm: 5, md: 0 }}
    >
      <Box display="flex" alignItems="center" mb={5}>
        <LinkIcon sx={{ color: "white", mr: 1 }} />
        <Typography variant="h5" fontWeight={800} color="white">
          Quick Links
        </Typography>
      </Box>
      {quickLinks.map((link) => (
        <React.Fragment key={link.label}>
          <Link
            href={'/login'}
            sx={{
              color: "#3db166",
              textDecoration: "none",
              fontWeight: 600,
              "&:hover": { color: "#76d27f" },
              transition: "color 0.3s ease",
            }}
          >
            {link.label}
          </Link>

          <Divider sx={{ flexGrow: 1, backgroundColor: "#3db166", my: 2 }} />
        </React.Fragment>
      ))}
    </Box>
  );
}
