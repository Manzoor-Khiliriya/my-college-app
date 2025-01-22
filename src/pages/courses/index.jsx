import React from "react";
import CourseList from "../../components/CourseList";
import HeaderTypography from "../../components/HeaderTypography";
import { Container } from "@mui/material";

export default function Courses() {
  return (
    <>
    <Container sx={{ paddingY: 4 }}>
    <HeaderTypography>Our Courses</HeaderTypography>
    <CourseList />
    </Container>
    </>
  );
}
