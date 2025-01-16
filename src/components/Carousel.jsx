import { Box, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

export default function Carousel({ images, interval = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const carouselButton = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: "white",
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [activeIndex, 3000]);

  return (
    <Box sx={{ maxWidth: "100%", position: "relative" }}>
      <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          layout="responsive"
          width={1200}  
          height={650}  
          style={{ objectFit: "contain" }} 
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
