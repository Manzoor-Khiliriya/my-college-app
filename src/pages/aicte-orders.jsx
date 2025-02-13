import { Box, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Keeping your preferred import
import React from "react";
import CustomHeading from "../components/CustomHeading";
import ContactInfoCard from "../components/ContactInfoCard";

const aicteLetters = [
  {
    label: "AICTE Approval Letter 2024-2025",
    href: "https://lbscek.ac.in/wp-content/uploads/2024/05/EOA-REPORT-2024-2025.pdf",
  },
  {
    label: "AICTE Approval Letter 2023-2024",
    href: "https://lbscek.ac.in/wp-content/uploads/2023/06/EOA-REPORT-2023-24.pdf",
  },
  {
    label: "AICTE Approval Letter 2022-2023",
    href: "https://lbscek.ac.in/wp-content/uploads/2022/07/EOA-Report-22-23.pdf",
  },
  {
    label: "AICTE Approval Letter 2021-2022",
    href: "https://lbscek.ac.in/wp-content/uploads/2022/07/EOA_Report-2021-2022.pdf",
  },
  {
    label: "AICTE Approval Letter 2020-2021",
    href: "https://lbscek.ac.in/wp-content/uploads/2021/05/EOA_HO_Report-2020-21-2020-07-15T133111.513.pdf",
  },
];

export default function AicteOrders() {
  return (
    <Box>
      <CustomHeading>AICTE Orders</CustomHeading>
      <Grid container spacing={5} px={5} pt={4} pb={{ xs: 4, md: 15 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          {aicteLetters.map((letter, index) => (
            <Link
              key={index}
              href={letter.href}
              sx={{
                display: "block",
                textDecoration: "none",
                color: "#5e5e5e",
                "&:hover": { color: "#3db166" },
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
                <Typography variant="h6" fontWeight={600}  mb={2}>
                {letter.label}
              </Typography>
            </Link>
          ))}
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ContactInfoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
