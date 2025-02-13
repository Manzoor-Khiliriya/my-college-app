import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  styled,
  tableCellClasses,
  TableHead,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CustomHeading from "../components/CustomHeading";
import ContactInfoCard from "../components/ContactInfoCard";

export default function Programs() {
  const ugPrograms = [
    { branch: "Computer Science & Engineering(Two Batches)", intake: 180 },
    { branch: "Mechanical Engineering", intake: 60 },
    { branch: "Electronics & Communication Engineering", intake: 60 },
    { branch: "Electrical & Electronics Engineering", intake: 60 },
    { branch: "Information Technology", intake: 60 },
    { branch: "Civil Engineering", intake: 60 },
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#3db166",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

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
      <CustomHeading>Programs</CustomHeading>
      <Grid container spacing={5} px={5} pt={5} pb={{ xs: 4, md: 15 }}>
        <Grid size={12} pb={5}>
          <Box mb={5}>
            <Typography variant="h5" fontWeight={800} mb={3}>
              PG Programs (Affiliated to KTU)
            </Typography>
            <TableContainer component={Paper} sx={{borderRadius: 0}}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center" sx={{ fontSize: "15px" }}>
                      Branch
                    </StyledTableCell>
                    <StyledTableCell align="right" sx={{ fontSize: "15px" }}>
                      Intake
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      <Typography
                        variant="body1"
                        align="center"
                        color="#949494"
                      >
                        M.Tech(CS)Computer Science and Information Security
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="right">
                      <Typography
                        variant="body1"
                        color="#949494"
                      >
                        18
                      </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box>
            <Typography variant="h5" fontWeight={800} mb={3}>
              UG Programs (Affiliated to KTU)
            </Typography>
            <TableContainer component={Paper} sx={{borderRadius: 0}}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center" sx={{ fontSize: "15px" }}>
                      Branch
                    </StyledTableCell>
                    <StyledTableCell align="right" sx={{ fontSize: "15px" }}>
                      Intake
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ugPrograms.map(({ branch, intake }, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        <Typography variant="body1" color="#949494">
                          {branch}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row" align="right">
                        <Typography variant="body1" color="#949494">
                          {intake}
                        </Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} ml="auto">
          <ContactInfoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
