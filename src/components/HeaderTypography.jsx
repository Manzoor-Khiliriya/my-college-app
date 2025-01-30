import { Typography } from "@mui/material";

export default function HeaderTypography({
  variant = "h4",
  component = "h1",
  align = "center",
  gutterBottom = true,
  children,
  sx = {},
}) {
  return (
    <Typography
      variant={variant}
      component={component}
      align={align}
      gutterBottom={gutterBottom}
      sx={{
        fontSize: { xs: "2rem", md: "2.5rem" },
        fontWeight: "bold",
        color: "text.primary",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
