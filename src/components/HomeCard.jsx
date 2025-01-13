import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function HomeCard({ images }) {
  const cardTitle = [
    "DIRECTORATE OF ADMISSION",
    "PAREEKSHABHAVAN",
    "DIRECTORATE OF RESEARCH",
    "DISTANCE EDUCATION",
  ];

  const cardCaption = [
    "Directorate of Admission",
    "Registration | Results | Notification",
    "Ph.D Registration",
    "UG AUDIT COURSE 2023",
  ];
  return (
    <Box my={4}>
      <Grid container spacing={2} justifyContent="center" paddingInline={10}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box component="a"
          href="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            display: "block", 
            '&:hover': { textDecoration: "underline" }
          }}>
              <Typography variant="subtitle2" align="center" gutterBottom>
                {cardTitle[index]}
              </Typography>
              <Image
                style={{
                  display: "flex",
                  marginInline: "auto",
                  marginBottom: "3px",
                }}
                src={image.src}
                alt={image.alt}
                width={220}
                height={100}
              />
              <Typography variant="body2" align="center">
                {cardCaption[index]}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
