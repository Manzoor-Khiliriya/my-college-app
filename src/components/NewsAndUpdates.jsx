import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import newsData from "../data/newsData";

export default function NewsAndUpdates() {
  const firstNews = newsData[0];
  const remainingNews = newsData.slice(1);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mx: { xs: 5, sm: 10, lg: 15 },
        my: 5,
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}
      >
        <Typography variant="h6" color="darkblue" sx={{ fontWeight: 600 }}>
          News And Updates
        </Typography>
        <Divider
          sx={{ flexGrow: 1, height: 3, backgroundColor: "lightgray" }}
        />
      </Box>

      <Typography variant="body2" color="green" mb={3}>
        Read All News
      </Typography>

      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Link
            href={`/news/${firstNews.id}`}
            passHref
            style={{ textDecoration: "none", color: "black" }}
          >
            <Box
              sx={{
                overflow: "hidden",
                position: 'relative',
                width: '100%',
                height: {xs: 320, lg: 350},
                "& img": {
                  transition: "transform 0.3s ease-in-out",
                },
                "&:hover img": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Image
                src={firstNews.image}
                
                fill
                alt="First News"
              />
            </Box>
            <Typography
              variant="body2"
              fontWeight={600}
              color="gray"
              mt={2}
              mb={1}
            >
              {firstNews.date}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                "&:hover": { color: "green" },
                transition: "color 0.3s ease",
                cursor: "pointer",
              }}
            >
              {firstNews.title}
            </Typography>
          </Link>
        </Grid>

        {[0, 1].map((gridIndex) => (
          <Grid container size={{ xs: 12, md: 4 }} key={gridIndex} spacing={4}>
            {remainingNews
              .slice(gridIndex * 6, (gridIndex + 1) * 6)
              .map((item) => (
                <Link
                key={item.id}
                  href={`/news/${item.id}`}
                  passHref
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Grid size={12} display={"flex"} gap={3}>
                    <Box
                      sx={{
                        overflow: 'hidden',
                        borderRadius: 1,
                        "& img": {
                          transition: "transform 0.3s ease-in-out",
                        },
                        "&:hover img": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <Image
                        src={item.image}
                        width={80}
                        height={70}
                        alt={item.title}
                      />
                    </Box>
                    <Box flexDirection="column" >
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        color="gray"
                        mb={1}
                      >
                        {item.date}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        sx={{
                          "&:hover": { color: "#3db166" },
                          transition: "color 0.3s ease",
                          cursor: "pointer",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Grid>
                </Link>
              ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
