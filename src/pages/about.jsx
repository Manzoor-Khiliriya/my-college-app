import { Container, Box, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DetailSection from "../components/DetailSection";
import GallerySection from "../components/GallerySection";
import { galleryImages } from "../constants/galleryImages";
import HeaderTypography from "../components/HeaderTypography";

export default function About() {
  return (
    <div>
      <Container maxWidth="md" sx={{ paddingY: 4 }}>
        <Box mb={4}>
          <HeaderTypography>About Our College</HeaderTypography>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            paragraph
          >
            Welcome to our college! Here’s everything you need to know about us.
          </Typography>
        </Box>
        <GallerySection images={galleryImages} />
        <DetailSection />
      </Container>
    </div>
  );
}
