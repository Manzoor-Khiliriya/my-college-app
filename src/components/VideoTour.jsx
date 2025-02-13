import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function VideoTour() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: 'url("/images/college-image.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "650px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      {/* Content Box */}
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "650px",
          padding: "20px",
        }}
      >
        <Link href={"https://www.youtube.com/watch?v=dFem7iQwnVE&t=3s"}>
          <Image
            src={"/images/play-icon.png"}
            height={80}
            width={85}
            style={{ marginBottom: "20px" }}
          />
        </Link>
        <Typography variant="h4" fontWeight={800} gutterBottom mb={4}>
          Video Tour in LBS
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          Take a tour of LBS College of Engineering and explore one of the best
          colleges in the state. The video will guide you around the campus.
        </Typography>
      </Box>
    </Box>
  );
}
