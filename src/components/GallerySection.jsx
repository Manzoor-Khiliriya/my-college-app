import { Box, Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";

function GallerySection({ title, images }) {
  return (
    <Box my={4}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        {title}
      </Typography>
      <Paper sx={{ padding: 3, boxShadow: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ padding: 1 }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
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
