'use client'
import { Box, IconButton } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

export default function Carousel({ images, interval = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

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
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(autoSlide);
  }, [handleNext, interval]);

  return (
    <Box sx={{ position: "relative",width: "100%", height: {xs : 200, md: 550} }}>
      <Image
        src={images[activeIndex].src}
        alt={images[activeIndex].alt}
        fill
      />
      <IconButton
        onClick={handlePrev}
        sx={{
          ...carouselButton,
          left: 10,
        }}
        aria-label="Previous image"
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          ...carouselButton,
          right: 10,
        }}
        aria-label="Next image"
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
}
