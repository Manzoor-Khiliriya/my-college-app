import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import DetailSection from "@/components/DetailSection";
import { Container } from "@mui/material";
import GallerySection from "../components/GallerySection";
import { galleryImages } from "../constants/galleryImages";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Container>
        <GallerySection images={galleryImages} title="Our College Gallery"  />
        <DetailSection />
      </Container>
      <Footer />
    </div>
  );
}
