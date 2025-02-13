import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function DetailSection() {
  const details = [
    {
      title: "VISION",
      text: "To become a paragon institution for pursuance of Education and Research in Engineering and Technology",
    },
    {
      title: "MISSION",
      text: [
        "Impart finest quality Technical Education & Training",
        "Nurture a vision of Sustainable development",
        "Bequeath it to the next generation of professionals",
      ],
    },
  ];

  return (
    <Grid
      container
      spacing={{ xs: 5, md: 10 }}
      mt={{ xs: 4, md: 10 }}
      mb={4}
      px={{ xs: 2, sm: 6 }}
      height={"100%"}
    >
      {details.map((section, index) => (
        <Grid size={{ xs: 12, md: 6 }} key={index} sx={{ display: "flex" }}>
          <Box
            sx={{
              padding: 5,
              boxShadow: 3,
              borderRadius: 12,
              bgcolor: "#3db166",
              height: "100%",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontWeight: "800" }}
              mb={3}
            >
              {section.title}
            </Typography>
            {Array.isArray(section.text) ? (
              <Typography variant="h6" sx={{ color: "white" }}>
                <ul>
                  {section.text.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: "10px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Typography>
            ) : (
              <Typography variant="h6" align="center" sx={{ color: "white" }}>
                {section.text}
              </Typography>
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
