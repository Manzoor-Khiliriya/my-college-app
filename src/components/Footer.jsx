import React from "react";
import { Box, Typography, Link, IconButton, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { Facebook, Instagram } from "@mui/icons-material";
import FooterLinksSection from "./FooterLinksSection";

export default function Footer() {
  const socialMedias = [
    {
      href: "https://www.facebook.com/lbscekasaragod?mibextid=LQQJ4d",
      icon: <Facebook />,
    },
    {
      href: "https://www.instagram.com/lbsce_ksd/?igsh=MWhmcWltanIzZHc5Zw%3D%3D&utm_source=qr",
      icon: <Instagram />,
    },
  ];
  return (
    <footer>
      <Grid
        container
        spacing={5}
        sx={{
          bgcolor: "#000",
          color: "white",
          px: { xs: 4, sm: 15, md: 4 },
          py: 10,
        }}
      >
        {/* Contact Info */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ position: "relative", height: 50, mb:4 }}>
            <Image src={"/images/my-logo-white.png"} fill alt="College Logo" />
          </Box>
          {[
            "LBS College of Engineering,",
            "Povval, Muliyar Post Office,",
            "Kasaragod, Kerala-671542",
          ].map((text, index) => (
            <Typography key={index} variant="body1" color="#838383" my={1}>
              {text}
            </Typography>
          ))}
          <Typography variant="body2" mb={2} mt={3}>
            04994 250290, 04994 250555
          </Typography>
          <Link
            href="mailto:principal@lbscek.ac.in"
            color="inherit"
            underline="none"
          >
            principal@lbscek.ac.in
          </Link>
          <Divider
            sx={{ width: "100%", bgcolor: "#3db166", height: 2, my: 3 }}
          />
        </Grid>

        {/* Sections */}
        <FooterLinksSection />
      </Grid>

      {/* Copyright Section */}
      <Box
        sx={{
          bgcolor: "#202020",
          py: 4,
          px: { xs: 4, sm: 15, md: 4 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "start", md: "center" },
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" color="grey">
          Copyright All Right Reserved 2021.
        </Typography>
        <Box>
          {socialMedias.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                aria-label="social media"
                sx={{ color: "#3db166",transition: 'color 0.5s ease', "&:hover": { color: "white" } }}
              >
                {social.icon}
              </IconButton>
            </Link>
          ))}
        </Box>
      </Box>
    </footer>
  );
}
