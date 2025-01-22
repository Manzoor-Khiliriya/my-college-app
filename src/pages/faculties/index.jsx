import React from "react";
import FacultyList from "../../components/FacultyList";
import HeaderTypography from "../../components/HeaderTypography";
import { Container } from "@mui/material";

export default function Faculties() {
  return (
    <>
      <Container sx={{ paddingY: 4 }}>
        <HeaderTypography>Our Faculties</HeaderTypography>
        <FacultyList />
      </Container>
    </>
  );
}
