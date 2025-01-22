import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const cardData = [
  {
    title: "DIRECTORATE OF ADMISSION",
    caption: "Directorate of Admission",
  },
  {
    title: "PAREEKSHABHAVAN",
    caption: "Registration | Results | Notification",
  },
  {
    title: "DIRECTORATE OF RESEARCH",
    caption: "Ph.D Registration",
  },
  {
    title: "DISTANCE EDUCATION",
    caption: "UG AUDIT COURSE 2023",
  },
];

export default function HomeCard({ images }) {
  return (
    <Box my={6}>
      <Grid container spacing={2} justifyContent="center" paddingInline={8}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              component="a"
              href="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                '&:hover': { textDecoration: "underline" },
              }}
            >
              <Typography variant="subtitle2" align="center" gutterBottom>
                {card.title}
              </Typography>
              <Image
                src={images[index]?.src}
                alt={images[index]?.alt}
                width={220}
                height={100}
                loading="lazy"
                style={{
                  display: "flex",
                  marginInline: "auto",
                  marginBottom: "3px",
                }}
              />
              <Typography variant="body2" align="center">
                {card.caption}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

