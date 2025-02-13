import { Box, Divider, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React from "react";

export default function PhotoGallery({ images }) {
  return (
    <Box
      sx={{
        mx: { xs: 5, sm: 10, md: 13 },
        my: { xs: 2, md: 1 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: "100%",
          mb: 3,
        }}
      >
        <Typography variant="h4" fontWeight={800}>
          PHOTO GALLERY
        </Typography>
        <Divider
          sx={{ flexGrow: 1, height: 3, backgroundColor: "lightgray" }}
        />
      </Box>

      <Grid container spacing={5}>
        {images.map((image, index) => (
          <Grid key={index} size={{ xs: 12, md: 3 }}>
            <Link href={image.href}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  alignItems: "center",
                }}
              >
                <Image
                  src={image.src}
                  alt="Gallery Image"
                  width={150}
                  height={100}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
