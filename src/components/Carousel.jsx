import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Carousel({ images }) {
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

  return (
    <Box sx={{ maxWidth: "100%", position: "relative" }}>
      <Box>
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          style={{ width: "100%", height: "35vh", objectFit: "fill" }}
        />
      </Box>
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
