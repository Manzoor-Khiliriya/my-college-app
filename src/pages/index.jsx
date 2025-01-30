import dynamic from "next/dynamic";
import Carousel from "../components/Carousel";
import HomeCard from "../components/HomeCard";
import { Container } from "@mui/material";
import { galleryImages } from "../constants/galleryImages";
import { cardImages } from "../constants/cardImages";
import { carouselImages } from "../constants/carouselImages";
import HeaderTypography from "../components/HeaderTypography";

const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const GallerySection = dynamic(() => import("../components/GallerySection"), {
  ssr: false,
});
const DetailSection = dynamic(() => import("../components/DetailSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Carousel images={carouselImages} />
      <Hero />
      <HomeCard images={cardImages} />
      <Container>
        <GallerySection images={galleryImages} title="Our College Gallery" />
        <HeaderTypography>Our Details</HeaderTypography>
        <DetailSection />
      </Container>
    </>
  );
}
