import { Typography } from "@mui/material";

export default function CustomHeading({gutterBottom = true,children,sx = {}}) {
  return (
    <Typography
      variant='h3'
      align="center"
      gutterBottom={gutterBottom}
      sx={{
        bgcolor: "#192f59",
        fontWeight: "bold",
        height: {xs: 150, md: 280},
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 5,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
