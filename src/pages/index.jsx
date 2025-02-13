import Carousel from "../components/Carousel";
import { Typography, Link, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { carouselImages } from "../constants/carouselImages";
import NewsAndUpdates from "../components/NewsAndUpdates";
import PhotoGallery from "../components/PhotoGallery";
import QuickLinks from "../components/QuickLinks";
import Image from "next/image";
import AdmissionsLink from "../components/AdmissionsLink";
import Placements from "../components/Placements";
import { placementImages } from "../constants/placementImages";
import Recruiters from "../components/Recruiters";
import { recruiterImages } from "../constants/recruiterImages";
import MoreAbout from "../components/MoreAbout";
import VideoTour from "../components/VideoTour";
import DetailSection from "../components/DetailSection";
import AboutCollege from "../components/AboutCollege";
import { photoGalleryImages } from "../constants/photoGallery";

export default function Home() {
  return (
    <>
      <Carousel images={carouselImages} />
      <NewsAndUpdates />
      <Grid container>
        <Grid size={{ xs: 12, md: 8 }}>
          <PhotoGallery images={photoGalleryImages} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <QuickLinks />
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          size={{ xs: 12, md: 8 }}
          mx={{ xs: 0, sm: 5, md: 0 }}
          p={5}
          bgcolor={"#f3f3f3"}
        >
          <Typography variant="body1" color="#163269">
            Lal Bahadur Shastri College of Engineering, Kasaragod is established
            in 1993 under the auspices of L B S Centre for Science and
            Technology, Thiruvananthapuram
            <Link
              href="http://www.lbscentre.kerala.gov.in"
              target="_blank"
              sx={{
                color: "#5e5e5e",
                textDecoration: "none",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#3db166",
                },
              }}
            >
              (www.lbscentre.kerala.gov.in)
            </Link>
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          mx={{ xs: 0, sm: 5, md: 0 }}
          p={5}
          display={"flex"}
          bgcolor={"#3db166"}
        >
          <Image src={"/images/logo-only.png"} width={50} height={40} alt="logo" />
          <Typography variant="h6" color="white" fontWeight={600}>
            Take A Tour of Our Campus
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ height: "100%" }}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            mx: { xs: 2, sm: 8, md: 0 },
          }}
        >
          <Box sx={{ position: "relative", height: "100%" }}>
            <Image
              src="/images/admission-college.jpg"
              fill
              objectFit="cover"
              alt="Admission College"
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ mx: { xs: 2, sm: 8, md: 0 } }}>
          <AdmissionsLink />
        </Grid>
      </Grid>
      <DetailSection /> 
      <AboutCollege />
      <Placements images={placementImages} />
      <Recruiters images={recruiterImages} />
      <MoreAbout />
      <VideoTour />
    </>
  );
}
