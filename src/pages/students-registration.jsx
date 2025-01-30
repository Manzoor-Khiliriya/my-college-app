import React from "react";
import StudentsRegistration from "../components/StudentsRegistration";
import { Container } from "@mui/material";

export default function studentsRegistration() {
  return (
    <>
      <Container maxWidth="md" sx={{ paddingY: 4 }}>
        <StudentsRegistration />
      </Container>
    </>
  );
}
