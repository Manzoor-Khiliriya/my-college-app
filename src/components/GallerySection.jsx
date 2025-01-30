import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import HeaderTypography from "./HeaderTypography";

function GallerySection({ images }) {
  return (
    <Box my={5}>
      <HeaderTypography>Our College Gallery</HeaderTypography>

      <Paper sx={{ padding: 3, boxShadow: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {images.map((image, index) => (
            <Grid size={{xs:12, sm:6, md: 4}} key={index}>
              <Box sx={{ padding: 1 }}>
                <Image
                  src={image.src}
                  alt={image.alt || "Gallery Image"}
                  width={500}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                  sx={{ borderRadius: 2 }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default GallerySection;
