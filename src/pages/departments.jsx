import {
  Box,
  Link,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CustomHeading from "../components/CustomHeading";
import ContactInfoCard from "../components/ContactInfoCard";

export default function Departments() {
  const departments = [
    "Computer Science & Engineering",
    "Mechanical Engineering",
    "Electronics & Communication Engineering",
    "Civil Engineering",
    "Electrical & Electronics Engineering",
    "Applied Science",
    "Physical Education",
  ];

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <Box>
      <CustomHeading>Departments</CustomHeading>
      <Grid container spacing={5} px={5} pt={5} pb={{ xs: 4, md: 15 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <TableContainer component={Paper} sx={{borderRadius: 0}}>
            <Table aria-label="customized table">
              <TableBody>
                {departments.map((department, index) => (
                  <StyledTableRow key={index}>
                    <TableCell>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        align="center"
                        gutterBottom
                      >
                        <Link
                          href="#"
                          color="#5e5e5e"
                          underline="none"
                          sx={{
                            cursor: "pointer",
                            ":hover": { color: "#3db166" },
                          }}
                        >
                          {department}
                        </Link>
                      </Typography>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ContactInfoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
