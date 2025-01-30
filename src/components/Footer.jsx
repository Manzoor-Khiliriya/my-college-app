import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const contactInfo = [
  { icon: <LocationOn />, text: "123 College Road, City, State" },
  { icon: <Phone />, text: "+91 98451 23456" },
  { icon: <Email />, text: "contact@mycollege.edu" },
];

const QuickLinks = ["Home", "About Us", "Courses", "Admissions", "Contact Us"];

const usefulResources = [
  { text: "Online Library", href: "https://library.mycollege.edu" },
  { text: "Research Tools", href: "https://tools.mycollege.edu" },
  { text: "Student Portal", href: "https://portal.mycollege.edu" },
  { text: "Alumni Network", href: "https://alumni.mycollege.edu" },
];

const socialLinks = [
  { icon: <Facebook />, href: "https://facebook.com" },
  { icon: <Twitter />, href: "https://twitter.com" },
  { icon: <LinkedIn />, href: "https://linkedin.com" },
];

export default function CollegeFooter() {
  return (
    <>
      <Box sx={{ bgcolor: "#003366", color: "white", mt: 4, py: 4 }}>
        <Grid container spacing={3} px={3}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Contact Info
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" mb={2} color="red">
              My College
            </Typography>
            {contactInfo.map(({ icon, text }) => (
              <Box display="flex" alignItems="center" key={text} mb={1}>
                {icon}
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {text}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Quick Links
            </Typography>
            {QuickLinks.map((label, index) => (
              <Box key={index} display="flex" alignItems="center" mb={1}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  &gt;
                </Typography>
                <Link
                  href={`/${label.toLowerCase().replace(/\s/g, "-")}`}
                  color="inherit"
                  underline="none"
                  aria-label={`Navigate to ${label}`}
                  sx={{
                    "&:hover": {
                      transform: "translateX(5px)",
                      transition: "transform 0.3s ease",
                      color: "red"
                    }
                  }}
                >
                  {label}
                </Link>
              </Box>
            ))}
          </Grid>

          {/* Useful Resources */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Useful Resources
            </Typography>
            {usefulResources.map(({ text, href }, index) => (
              <Box key={index} display="flex" alignItems="center" mb={1}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  &gt;
                </Typography>
                <Link
                  href={href}
                  color="inherit"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    "&:hover": {
                      transform: "translateX(5px)",
                      transition: "transform 0.3s ease",
                      color: "red"
                    }
                  }}
                >
                  {text}
                </Link>
              </Box>
            ))}
          </Grid>

          {/* Social Media Links */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Connect With Us
            </Typography>
            <Box display="flex" gap={1}>
              {socialLinks.map(({ icon, href }, index) => (
                <IconButton
                  key={index}
                  href={href}
                  target="_blank"
                  color="inherit"
                  aria-label={`Follow us on ${href.split("/")[2]}`}
                  sx={{
                    "&:hover": {
                      backgroundColor: "red"
                    }
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Copyright Section */}
      <Box
        sx={{ bgcolor: "#001f33", py: 2, textAlign: "center", color: "white" }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} My College. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
