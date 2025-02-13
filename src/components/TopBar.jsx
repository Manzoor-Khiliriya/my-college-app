import { Box, Typography, Link } from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";
import PhoneIcon from "@mui/icons-material/Phone";

export default function TopBar({ isMobile, isScrolled }) {
  const phoneAndEmail = [
    {
      icon: <DraftsIcon sx={{ height: 20 }} />,
      text: "principal@lbscek.ac.in",
    },
    {
      icon: <PhoneIcon sx={{ height: 20 }} />,
      text: "04994 250290, 04994 250555",
    },
  ];

  const links = [
    {
      href: "/accredited-by-nba",
      text: "Accredited by NBA",
      color: "#96a2b8",
    },
    { href: "/login", text: "Login", color: "white", bg: "#3db166" },
  ];

  if (isMobile || isScrolled) {
    return null;
  }
  return (
    <Box
      bgcolor="#192f59"
      color="#96a2b8"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={5}
      py={2}
    >
      {phoneAndEmail.map(({ icon, text }, i) => (
        <Box key={i} display="flex" alignItems="center" gap={1} ml={i ? 4 : 0}>
          {icon}
          <Typography fontSize={"15px"}>{text}</Typography>
        </Box>
      ))}
      <Box ml="auto" display="flex" gap={3}>
        {links.map(({ href, text, color, bg }, index) => (
          <Box
            key={index}
            bgcolor={bg}
            px={bg ? 2 : 0}
            py={bg ? 0.5 : 0}
            borderRadius={bg ? 1 : 0}
            alignSelf={!bg ? "center" : "start"}
          >
            <Link
              href={href}
              sx={{
                fontWeight: 600,
                color,
                textDecoration: "none",
                fontSize: "15px",
                textTransform: "none",
                "&:hover": { color: "white" },
              }}
            >
              {text}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
