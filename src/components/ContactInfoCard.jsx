import { Box, Button, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ContactInfoCard() {
  return (
    <Box>
      {/* Contact Info Box */}
      <Box sx={{ bgcolor: "#192f59", p: 5, color: "white", mb: 3 }}>
        <Typography variant="h6" mb={3} fontWeight={600}>
          Contact Info
        </Typography>

        <Typography
          variant="subtitle1"
          mb={3}
          fontWeight={600}
          sx={{ color: "#3db166" }}
        >
          L B S College of Engineering
          <Typography variant="body2" sx={{ fontSize: "12px", mt: 0 }}>
            (A Govt. of Kerala Undertaking)
          </Typography>
        </Typography>

        <Typography variant="subtitle1">
          Povval, Muliyar Post Office,
        </Typography>
        <Typography variant="subtitle1" mb={3}>
          Kasaragod, Kerala-671542
        </Typography>
        <Typography variant="subtitle1" mb={3}>
          04994 250290, 04994 250555
        </Typography>

        <Typography variant="body2" sx={{ fontSize: "12px", my: 2 }}>
          principal@lbscek.ac.in
        </Typography>

        <Typography variant="subtitle1" sx={{ color: "#3db166" }} mb={5}>
          Mon – Fri 9:00 A.M. – 5:00 P.M.
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#3db166",
            fontWeight: 600,
            textTransform: "none",
            py: 2,
            px: 3,
            "&:hover": { bgcolor: "#339a57" },
          }}
        >
          Student Login
        </Button>
      </Box>

      <Link
        href="https://www.youtube.com/watch?v=dFem7iQwnVE&t=3s"
        target="_blank"
        sx={{ display: "block" }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            width: "100%", 
            height: "250px", 
            backgroundImage: "url('/images/contact-info-video.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src="/images/play-icon.png"
            alt="Play Icon"
            width={85}
            height={80}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
            }}
          />
        </Box>
      </Link>
    </Box>
  );
}
