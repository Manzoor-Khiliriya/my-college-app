import { Box, Button } from "@mui/material";
import { useState } from "react";

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
          style={{ width: "100%", height: "40vh", objectFit: "fill" }}
        />
      </Box>
      <Button
        onClick={handlePrev}
        sx={{
          ...carouselButton,
          left: 10,
        }}
      >
        Prev
      </Button>
      <Button
        onClick={handleNext}
        sx={{
          ...carouselButton,
          right: 10,
        }}
      >
        Next
      </Button>
    </Box>
  );
}
