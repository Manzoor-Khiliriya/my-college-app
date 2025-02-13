import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

export default function Placements({ images, interval = 5000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMdOrBelow = useMediaQuery("(max-width:960px)");

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const carouselButton = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: "white",
    zIndex: 10,
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(autoSlide);
  }, [handleNext, interval, activeIndex]);

  return (
    <Box sx={{ width: "100%", pt: 10, px: 5, mx: "auto", position: "relative" }}>
      <Typography variant="h5" fontWeight={800} textAlign="center" mb={3}>
        Placement 2024-25
      </Typography>
      <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
        {!isMdOrBelow && (
          <IconButton
            onClick={handlePrev}
            sx={{ ...carouselButton, left: 10 }}
            aria-label="Previous image"
          >
            <ArrowBackIcon sx={{ bgcolor: "black" }} />
          </IconButton>
        )}

        <Box sx={{ position: "relative", width: "100%", height: { xs: 130, md: 380 }, mx: "auto" }}>
          <Image
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>

        {!isMdOrBelow && (
          <IconButton
            onClick={handleNext}
            sx={{ ...carouselButton, right: 10 }}
            aria-label="Next image"
          >
            <ArrowForwardIcon sx={{ bgcolor: "black" }} />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}
