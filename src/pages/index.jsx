import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import DetailSection from "../components/DetailSection";
import { Container } from "@mui/material";
import GallerySection from "../components/GallerySection";
import { galleryImages } from "../constants/galleryImages";
import Carousel from "../components/Carousel";
import { carouselImages } from "../constants/carouselImages";
import HomeCard from "../components/HomeCard";
import { cardImages } from "../constants/cardImages";

export default function Home() {
  return (
    <div>
      <Carousel images={carouselImages}/>
      <HomeCard images={cardImages} />
      <Hero />
      <Container>
        <GallerySection images={galleryImages} title="Our College Gallery"  />
        <DetailSection />
      </Container>
    </div>
  );
}
