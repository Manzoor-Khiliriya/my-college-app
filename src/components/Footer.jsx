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
import Image from "next/image";

const QuickLinks = ["Home", "About Us", "Courses", "Admissions", "Contact Us"];
const contactInfo = [
  { icon: <LocationOn />, text: "123 College Road, City, State" },
  { icon: <Phone />, text: "+91 98451 23456" },
  { icon: <Email />, text: "contact@mycollege.edu" },
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
        <Grid container spacing={3} px={5}>
          {/* College Name & Logo */}
          <Grid size={{xs:12, md: 4}}>
            <Box>
              <Image
                src="/images/my-logo.png"
                width={160}
                height={80}
                alt="College Logo"
                style={{ maxHeight: "80px", maxWidth: "120px" }}
                priority
              />
              <Typography variant="h6" fontWeight="bold" my={2}>
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
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{xs:12, md: 4}}>
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
                    },
                  }}
                >
                  {label}
                </Link>
              </Box>
            ))}
          </Grid>

          {/* Social Media Links */}
          <Grid size={{xs:12, md: 4}}>
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
                  aria-label={`Follow us on ${href.split('/')[2]}`}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Copyright Section */}
      <Box sx={{ bgcolor: "#001f33", py: 2, textAlign: "center", color: "white" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} My College. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
